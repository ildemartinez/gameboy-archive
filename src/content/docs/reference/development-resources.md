---
title: Development Resources
description: Curated technical documentation, toolchains, emulators, and test suites for Game Boy, Game Boy Color, and Game Boy Advance development and research.
---

The archive does not duplicate the detailed register-level documentation maintained by the Game Boy development community. This page points developers, emulator authors, and hardware researchers to the established references and tools, and explains what each is used for. For a summary of the hardware itself, start with the [Game Boy Technical Reference](/reference/example/).

## Technical documentation

| Resource | Covers | Use it for |
| --- | --- | --- |
| [Pan Docs](https://gbdev.io/pandocs/) | Game Boy, Game Boy Color, Super Game Boy | The standard community reference: memory map, registers, PPU, APU, timers, interrupts, cartridge header, and MBCs. |
| [Game Boy Complete Technical Reference](https://gekkio.fi/files/gb-docs/gbctr.pdf) | Game Boy family hardware | Low-level CPU behavior, instruction timing, and hardware revisions, based on hardware testing. |
| [GBATEK](https://problemkaputt.de/gbatek.htm) | Game Boy Advance (and Nintendo DS) | GBA processor, memory, display, sound, cartridge, and link hardware. |
| [Nintendo Game Boy Programming Manual](https://files.nekoblog.org/uploads/pdf/39999184-GameBoy-Programming-Manual.pdf) | Original Game Boy | Nintendo's own development documentation, useful for historical and official terminology. |

## Toolchains

- **[RGBDS](https://rgbds.gbdev.io/)** — assembler and linker toolchain for Game Boy and Game Boy Color assembly programming.
- **[GBDK-2020](https://github.com/gbdk-2020/gbdk-2020)** — C development kit for Game Boy and Game Boy Color.
- **[devkitPro / devkitARM](https://devkitpro.org/)** — ARM toolchain commonly used for Game Boy Advance development.
- **[GB ASM Tutorial](https://gbdev.io/gb-asm-tutorial/)** — a step-by-step introduction to Game Boy assembly using RGBDS.

## Emulators with debugging tools

Accurate emulators with debuggers are essential for development and for checking hardware behavior. Emulator accuracy varies, so confirm timing-sensitive behavior on real hardware.

- **[SameBoy](https://sameboy.github.io/)** — Game Boy and Game Boy Color, with a built-in debugger.
- **[Emulicious](https://emulicious.net/)** — multi-system emulator with source-level debugging.
- **[BGB](https://bgb.bircd.org/)** — Game Boy and Game Boy Color emulator with a long-established debugger.
- **[mGBA](https://mgba.io/)** — Game Boy Advance emulator that also runs Game Boy and Color software, with debugging features.

## Hardware test suites

Test ROMs check a specific hardware behavior and report pass or fail. They are used to validate emulators and to compare hardware revisions.

- **[Mooneye Test Suite](https://github.com/Gekkio/mooneye-test-suite)** — tests of CPU, timer, PPU, and model-specific behavior, written from hardware research.
- The [gbdev resource list](https://gbdev.io/resources) indexes further test suites, including Blargg's widely used CPU and sound tests.

## Community

[gbdev.io](https://gbdev.io/) hosts the community resource list, Pan Docs, and tutorials, and links to active community channels for homebrew development.

## Related archive pages

- [Game Boy Technical Reference](/reference/example/) — the archive's summary of the original platform.
- [Game Boy Cartridges](/cartridges/game-boy-cartridges/) — cartridge formats, MBCs, and save technologies.
- [Model Comparison](/consoles/model-comparison/) — architectural differences between generations.
- [Glossary](/reference/glossary/) — definitions of hardware terms.
