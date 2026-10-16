// (v0.976.131) THE DEAD-LID LEDGER. Face 389 (run 38825061412) priced the
// shared column [-151,72,385] x3 (F11+F5): every bot re-paid the walk plus
// TWO 10s open attempts against the SAME dead lid while the yard held other
// chests. The v0.976.123 swap cures the WITHIN-CHAIN repeat; the CROSS-BOT
// repeat rode nowhere - the open-lost verdict was the only chest death that
// never joined a fleet ledger. The cure is the v0.65.0 shape's third
// sibling. These pins hold:
// - the open lost twice pays the write 'dead-lid ledger: chest at [...] cached
//   for the fleet (N live, ttl 15s)' - byte-exact
// - the write fires under the PINNED chestBlock too (the hop chain pins -
//   the field's deaths ride the pin; the record rides BEFORE the swap guard)
// - an expired cell that refuses AGAIN escalates to 90s (the repeat's own
//   half-life, the v0.863.0 law)
// - the hop loop skips the ledgered chest BEFORE the walk ('chest skip (dead
//   lid cached Xs ago at [...])') and the next chest takes the walk
// - the skip reach is TIGHT (radius 1 XZ / dy 2): a dead lid on chest A must
//   never skip chest B two blocks away (the v0.65.0 tight-radius lesson)
// - the swap bytes stay whole: the pinned chestBlock still gets their failure
//   back byte-identical, the once-guard still holds
// - the ledger never blocks a pocket: the second candidate's success still
//   delivers (the swap rides the same call)
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { Vec3 } from 'vec3'
import { depositToChest, depositToChests, CHEST_DOOM_TTL_MS } from '../../src/lib/deposit.mjs'
import { recordNoPath, nearNoPath, NOPATH_REPEAT_TTL_MS } from '../../src/lib/nopath.mjs'

const CHEST_SLOTS = 27
const TOTAL = 63

function item (name, count = 1, type = 1) {
  return { name, count, type, stackSize: 64 }
}

function makeWindow ({ pocket = [] } = {}) {
  const slots = new Array(TOTAL).fill(null)
  pocket.forEach((it, i) => { slots[CHEST_SLOTS + i] = it })
  return {
    type: 'minecraft:generic_9x3',
    slots,
    items: () => slots.slice(0, CHEST_SLOTS).filter(s => s && s.count > 0)
  }
}

// Chest A (0,64,0): the dead lid (every open dies). Chest B (0,64,1): the
// winner. The same shape the lid-swap test holds.
function makeBot ({ winWindow, loseBoth = false, chestA = { name: 'chest', position: new Vec3(0, 64, 0) }, chestB = { name: 'chest', position: new Vec3(0, 64, 1) } } = {}) {
  const chests = [chestA, chestB].filter(Boolean)
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

test('the dead lid pays its write: the open lost twice caches the cell for the fleet', async () => {
  const w = makeWindow({ pocket: [item('gravel', 5, 42)] })
  const bot = makeBot({ winWindow: w })
  const ledger = []
  const lines = []
  await depositToChest(bot, { log: m => lines.push(m), deadLidLedger: ledger, depositClickTimeoutMs: 200 })
  assert.equal(ledger.length, 1, 'the dead cell joined the ledger')
  assert.equal(ledger[0].x, 0)
  assert.equal(ledger[0].y, 64)
  assert.equal(ledger[0].z, 0)
  const write = lines.find(l => l.includes('dead-lid ledger'))
  assert.ok(write, 'the write line spoke')
  assert.equal(write, '[LidBot] dead-lid ledger: chest at [0,64,0] cached for the fleet (1 live, ttl 15s)', 'the write byte-exact (fresh half-life)')
})

test('the write fires under the PINNED chestBlock too - the hop chain pins, the record still lands', async () => {
  const w = makeWindow({ pocket: [] })
  const bot = makeBot({ winWindow: w, loseBoth: true })
  const ledger = []
  const lines = []
  const r = await depositToChest(bot, { chestBlock: { name: 'chest', position: new Vec3(0, 64, 0) }, log: m => lines.push(m), deadLidLedger: ledger, depositClickTimeoutMs: 200 })
  assert.equal(r.deposited, 0)
  assert.equal(r.reason, 'cannot open chest (open chest: timeout after 10000ms)', 'the pinned failure returns byte-identical (their choice is final)')
  assert.equal(ledger.length, 1, 'the record rode BEFORE the swap guard - the pin pays its write')
  assert.ok(lines.some(l => l === '[LidBot] dead-lid ledger: chest at [0,64,0] cached for the fleet (1 live, ttl 15s)'), 'the write byte under the pin')
})

test('the repeat escalates: an expired cell that refuses again rides 90s (the repeat\'s own half-life)', async () => {
  const w = makeWindow({ pocket: [] })
  // ONE chest only: the swap's second candidate finds nothing ('no chest in
  // range') - the whole test rides the single dead cell's own writes
  const bot = makeBot({ winWindow: w, loseBoth: true, chestB: null })
  const ledger = []
  const lines = []
  await depositToChest(bot, { log: m => lines.push(m), deadLidLedger: ledger, depositClickTimeoutMs: 200 })
  assert.equal(ledger.length, 1)
  assert.equal(lines.filter(l => l.includes('dead-lid ledger')).length, 1, 'one death one write')
  // the fresh verdict expires (the 15s half-life passes)
  ledger[0].at = Date.now() - CHEST_DOOM_TTL_MS - 1
  await depositToChest(bot, { log: m => lines.push(m), deadLidLedger: ledger, depositClickTimeoutMs: 200 })
  assert.equal(ledger.length, 1, 'the expired entry pruned, the escalated entry stands - one cell one entry')
  const esc = lines.filter(l => l.includes('dead-lid ledger'))
  assert.equal(esc.length, 2, 'both deaths paid their writes')
  assert.equal(esc[1], "[LidBot] dead-lid ledger: chest at [0,64,0] cached for the fleet (1 live, ttl 90s (the repeat's own half-life))", 'the escalated byte-exact')
  assert.equal(ledger[0].ttl, NOPATH_REPEAT_TTL_MS, 'the entry carries the 90s half-life')
})

test('the live re-record absorbs (the v0.96.0 law): the verdict keeps its original clock', async () => {
  const w = makeWindow({ pocket: [] })
  const bot = makeBot({ winWindow: w, loseBoth: true, chestB: null })
  const ledger = []
  const lines = []
  await depositToChest(bot, { log: m => lines.push(m), deadLidLedger: ledger, depositClickTimeoutMs: 200 })
  const at0 = ledger[0].at
  await depositToChest(bot, { log: m => lines.push(m), deadLidLedger: ledger, depositClickTimeoutMs: 200 })
  assert.equal(ledger.length, 1, 'one cell one entry - the ledger never immortalizes itself')
  assert.equal(ledger[0].at, at0, 'the FIRST failure owns the verdict\'s lifetime (the original clock)')
  assert.equal(ledger[0].ttl, CHEST_DOOM_TTL_MS, 'the absorbed re-record stays fresh - no silent escalation')
  assert.equal(lines.filter(l => l.includes('dead-lid ledger')).length, 2, 'the write byte speaks on every death (the absorbed case included)')
})

test('the hop loop skips the ledgered dead lid BEFORE the walk - the next chest takes it', async () => {
  const ledger = recordNoPath([], { x: 2, y: 64, z: 2 }, Date.now(), { ttl: CHEST_DOOM_TTL_MS })
  const deadLid = { name: 'chest', position: new Vec3(2, 64, 2) }
  const goodChest = { name: 'chest', position: new Vec3(4, 64, 1) }
  const candidates = [deadLid, goodChest]
  const winWindow = makeWindow({ pocket: [item('cobblestone', 12)] })
  const bot = {
    username: 'SkipBot',
    entity: { position: new Vec3(0.5, 64, 0.5) },
    inventory: { items: () => bot._items },
    _items: [item('cobblestone', 12)],
    _opens: [],
    pathfinder: { goto: async () => {} },
    openChest: async chest => {
      bot._opens.push(`${chest.position.x},${chest.position.y},${chest.position.z}`)
      return {
        items: () => [],
        deposit: async type => {
          const it = bot._items.find(i => i.type === type)
          if (!it) throw new Error('chest full')
          bot._items = bot._items.filter(i => i.type !== type)
        },
        close: () => {}
      }
    },
    findBlock: opts => {
      for (const cand of candidates) {
        try { if (opts.matching(cand)) return cand } catch { /* not a match */ }
      }
      return null
    }
  }
  const logLines = []
  const res = await depositToChests(bot, { log: m => logLines.push(m), deadLidLedger: ledger, maxChests: 3 })
  assert.strictEqual(res.deposited, 12, 'the pocket drained into the SECOND chest')
  assert.deepEqual(bot._opens, ['4,64,1'], 'the dead lid never burned an open - the skip rode BEFORE the walk')
  const skip = logLines.find(l => l.includes('dead lid cached'))
  assert.ok(skip, 'the save line spoke')
  assert.equal(skip, '[SkipBot] chest skip (dead lid cached 0s ago at [2,64,2])', 'the save byte-exact')
})

test('the skip reach is TIGHT: a dead lid never skips the chest two blocks away', () => {
  const ledger = recordNoPath([], { x: 2, y: 64, z: 2 }, 1000, { ttl: CHEST_DOOM_TTL_MS })
  const opts = { ttl: CHEST_DOOM_TTL_MS, radius: 1, dy: 2 }
  assert.strictEqual(nearNoPath(ledger, { x: 2, y: 64, z: 2 }, 1500, opts).hit, true, 'the same cell skips')
  assert.strictEqual(nearNoPath(ledger, { x: 3, y: 64, z: 2 }, 1500, opts).hit, true, 'one block away still rides the tight reach (rows pack 1-2 apart)')
  assert.strictEqual(nearNoPath(ledger, { x: 4, y: 64, z: 2 }, 1500, opts).hit, false, 'two blocks away is a DIFFERENT chest - its lid may be fine')
  assert.strictEqual(nearNoPath(ledger, { x: 2, y: 67, z: 2 }, 1500, opts).hit, false, 'three levels up is no lid - the dy holds')
  assert.strictEqual(nearNoPath(ledger, { x: 2, y: 64, z: 2 }, 1000 + CHEST_DOOM_TTL_MS, opts).hit, false, 'the fresh half-life expires on the tick')
})

test('the ledger never blocks a delivery: the swap still delivers through the same call', async () => {
  const w = makeWindow({ pocket: [item('gravel', 5, 42)] })
  const bot = makeBot({ winWindow: w })
  const ledger = []
  const lines = []
  const r = await depositToChest(bot, { log: m => lines.push(m), deadLidLedger: ledger, depositClickTimeoutMs: 200 })
  assert.equal(r.deposited, 5, 'the second chest in the ring took the walk and delivered')
  assert.equal(r.reason, 'ok')
  assert.equal(ledger.length, 1, 'the dead lid paid its write on the way')
  assert.ok(lines.some(l => l.includes("the lid's own swap voice")), 'the swap voice kept its bytes')
  assert.ok(lines.some(l => l.includes('open lost autopsy')), 'the autopsy leg kept its bytes')
})
