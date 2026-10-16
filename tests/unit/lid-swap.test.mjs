// (v0.976.123) THE LID'S OWN SWAP. Face 389 (run 38825061412) priced the lid's
// death x4 across 3 bots on 2 distinct chests - the shared column
// [-151,72,385] x3 (F11+F5): every bot re-paid the walk plus TWO 10s open
// attempts against the same dead lid while the yard held other chests. The
// cure (the v0.23.1 shape): when the open dies on a chest the bot walked to,
// exclude that chest and scan again - ONCE. These pins hold:
// - the swap fires when the caller let us pick the chest (chestBlock null)
//   and no exclusion has fired yet (exclude empty) - once
// - the swap voice speaks the cause leg with the lid's own coordinates
// - the second candidate's success returns its receipts (deposited > 0, ok)
// - the double death returns the byte-identical primary zero reason
// - a pinned chestBlock gets their failure back (their choice is final)
// - a caller exclusion suppresses the swap (the once-guard shape)
// - the opendeaf voices keep their bytes (attempt 1 / retry lost / autopsy)
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { Vec3 } from 'vec3'
import { depositToChest } from '../../src/lib/deposit.mjs'

const CHEST_SLOTS = 27
const TOTAL = 63

function item (name, count = 1, type = 1) {
  return { name, count, type, stackSize: 64 }
}

function makeWindow ({ chest = [], pocket = [] } = {}) {
  const slots = new Array(TOTAL).fill(null)
  chest.forEach((it, i) => { slots[i] = it })
  pocket.forEach((it, i) => { slots[CHEST_SLOTS + i] = it })
  return {
    type: 'minecraft:generic_9x3',
    slots,
    items: () => slots.slice(0, CHEST_SLOTS).filter(s => s && s.count > 0)
  }
}

// Two chests within the raw walk's reach (3.2): A (0,64,0) the dead lid,
// B (0,64,1) the next chest in the ring. openChest dies on A, wins on B.
function makeBot ({ winWindow, loseBoth = false } = {}) {
  const chests = [
    { name: 'chest', position: new Vec3(0, 64, 0) },
    { name: 'chest', position: new Vec3(0, 64, 1) }
  ]
  const bot = {
    username: 'LidBot',
    entity: { position: new Vec3(0.5, 64, 0.5) },
    inventory: { items: () => bot._pocket },
    _pocket: winWindow.slots.slice(CHEST_SLOTS).filter(s => s && s.count > 0),
    _cursor: null,
    _opens: [],
    clicks: [],
    findBlock: (opts = {}) => {
      const match = opts.matching || (() => true)
      const cands = chests.filter(b => { try { return match(b) } catch { return false } })
      cands.sort((a, b) => a.position.distanceTo(bot.entity.position) - b.position.distanceTo(bot.entity.position))
      return cands[0] ?? null
    },
    openChest: async (chest) => {
      bot._opens.push(`${chest.position.x},${chest.position.y},${chest.position.z}`)
      if (loseBoth || chest.position.z === 0) throw new Error('open chest: timeout after 10000ms')
      return winWindow
    },
    lookAt: async () => {},
    look: async () => {},
    setControlState: () => {},
    // mineflayer prediction: left-click moves between the view and the cursor
    clickWindow: async (idx) => {
      bot.clicks.push(idx)
      const w = winWindow
      const cur = bot._cursor
      const target = w.slots[idx]
      if (!cur) {
        if (!target) return
        bot._cursor = target
        w.slots[idx] = null
      } else {
        if (target && target.name === cur.name && target.count < (target.stackSize ?? 64)) {
          target.count += cur.count
        } else {
          w.slots[idx] = cur
        }
        bot._cursor = null
      }
      bot._pocket = w.slots.slice(CHEST_SLOTS).filter(s => s && s.count > 0)
    }
  }
  return bot
}

test('the lid swap: the dead lid excluded once, the next chest delivers', async () => {
  const w = makeWindow({ chest: [], pocket: [item('gravel', 5, 42)] })
  const bot = makeBot({ winWindow: w })
  const lines = []
  const r = await depositToChest(bot, { log: m => lines.push(m), depositClickTimeoutMs: 200 })
  assert.equal(r.deposited, 5, 'the second chest in the ring took the walk and delivered (gravel - a non-seal, non-keep name the reserve cannot hold)')
  assert.equal(r.reason, 'ok')
  assert.deepEqual(bot._opens, ['0,64,0', '0,64,0', '0,64,1'], 'two attempts on the dead lid, one on the winner')
  const swap = lines.find(l => l.includes("the lid's own swap voice"))
  assert.ok(swap, 'the lid swap voice spoke')
  assert.equal(swap, "[LidBot] deposit: the lid at [0,64,0] died (open chest: timeout after 10000ms) - the next chest in the ring takes the walk (the lid's own swap voice)")
  assert.ok(lines.some(l => l.includes('open attempt 1 timed out')), 'the v0.25.0 cause leg kept its bytes')
  assert.ok(lines.some(l => l.includes('open retry lost on attempt 2')), 'the retry-lost leg kept its bytes')
  assert.ok(lines.some(l => l.includes('open lost autopsy')), 'the autopsy leg kept its bytes')
})

test('the double death: both lids die, the primary zero reason stays byte-identical', async () => {
  const w = makeWindow({ chest: [], pocket: [] })
  const bot = makeBot({ winWindow: w, loseBoth: true })
  const lines = []
  const r = await depositToChest(bot, { log: m => lines.push(m), depositClickTimeoutMs: 200 })
  assert.equal(r.deposited, 0)
  assert.equal(r.reason, 'cannot open chest (open chest: timeout after 10000ms)', 'the primary zero reason byte-identical')
  assert.equal(bot._opens.filter(o => o === '0,64,0').length, 2, 'the dead lid burned its two attempts only')
  assert.equal(bot._opens.filter(o => o === '0,64,1').length, 2, 'the second chest burned its own two attempts')
  assert.equal(lines.filter(l => l.includes("the lid's own swap voice")).length, 1, 'the swap fires once - the exclude guard holds')
})

test('a pinned chestBlock keeps their failure back - their choice is final', async () => {
  const w = makeWindow({ chest: [], pocket: [] })
  const bot = makeBot({ winWindow: w })
  const lines = []
  const pinned = { name: 'chest', position: new Vec3(0, 64, 0) }
  const r = await depositToChest(bot, { chestBlock: pinned, log: m => lines.push(m), depositClickTimeoutMs: 200 })
  assert.equal(r.deposited, 0)
  assert.equal(r.reason, 'cannot open chest (open chest: timeout after 10000ms)')
  assert.equal(bot._opens.length, 2, 'two attempts, no swap')
  assert.equal(lines.filter(l => l.includes("the lid's own swap voice")).length, 0, 'no swap voice for a pinned chest')
})

test('a caller exclusion suppresses the swap - the once-guard shape', async () => {
  const w = makeWindow({ chest: [], pocket: [] })
  const bot = makeBot({ winWindow: w })
  const lines = []
  const r = await depositToChest(bot, { log: m => lines.push(m), depositClickTimeoutMs: 200, exclude: [new Vec3(0, 64, 1)] })
  assert.equal(r.deposited, 0)
  assert.equal(r.reason, 'cannot open chest (open chest: timeout after 10000ms)')
  assert.deepEqual(bot._opens, ['0,64,0', '0,64,0'], 'the scan skipped the excluded chest, the dead lid burned its two attempts')
  assert.equal(lines.filter(l => l.includes("the lid's own swap voice")).length, 0, 'the swap honors the caller exclusion')
})
