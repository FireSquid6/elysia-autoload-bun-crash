# elysia-autoload-bun-crash

Uh oh! Bun is crashing on `v1.1.20`!

Steps to reproduce:
1. Clone the repo
2. `bun install`
3. `bun run server.ts`


# Stack Trace

When run on my machine (NixOS Framework Laptop 13) I get:

Bun v1.1.20 ([`ae19489`](<https://github.com/oven-sh/bun/tree/ae19489250ab74ee3ea7d5b50fca5d7d2b4e6d66>)) on linux x86_64 [AutoCommand]

Segmentation fault at address 0x0000001A

- [`ld-temp.o:0`](<https://github.com/oven-sh/bun/blob/ae19489250ab74ee3ea7d5b50fca5d7d2b4e6d66/ld-temp.o#L0>): `WTF::Unicode::convertReplacingInvalidSequences`
- `??`
- *1 unknown/js code*
- [`ld-temp.o:0`](<https://github.com/oven-sh/bun/blob/ae19489250ab74ee3ea7d5b50fca5d7d2b4e6d66/ld-temp.o#L0>): `llint_relativePCBase`
- [`ld-temp.o:0`](<https://github.com/oven-sh/bun/blob/ae19489250ab74ee3ea7d5b50fca5d7d2b4e6d66/ld-temp.o#L0>): `JSC::Interpreter::executeCall`
- [`ld-temp.o:0`](<https://github.com/oven-sh/bun/blob/ae19489250ab74ee3ea7d5b50fca5d7d2b4e6d66/ld-temp.o#L0>): `JSC::JSModuleEnvironment::getOwnPropertySlot`
- [`ld-temp.o:0`](<https://github.com/oven-sh/bun/blob/ae19489250ab74ee3ea7d5b50fca5d7d2b4e6d66/ld-temp.o#L0>): `JSC::VM::drainMicrotasks`
- [`StringImpl.h:0`](<https://github.com/oven-sh/bun/blob/ae19489250ab74ee3ea7d5b50fca5d7d2b4e6d66//build/bun/bun-webkit/include/wtf/text/StringImpl.h#L0>): `Bun::ProcessBindingUV::jsErrname`
- [`unbounded_queue.zig:129`](<https://github.com/oven-sh/bun/blob/ae19489250ab74ee3ea7d5b50fca5d7d2b4e6d66/src/bun.js/unbounded_queue.zig#L129>): `src.bun.js.module_loader.RuntimeTranspilerStore.drain`
- [`event_loop.zig:1211`](<https://github.com/oven-sh/bun/blob/ae19489250ab74ee3ea7d5b50fca5d7d2b4e6d66/src/bun.js/event_loop.zig#L1211>): `src.bun.js.event_loop.EventLoop.tickQueueWithCount__anon_117904`

<!-- from bun.report: k24UHtCeh7gAGAMzFkxD -->
