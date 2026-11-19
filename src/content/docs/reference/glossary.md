---
title: Glossary
description: Definitions of the model codes, hardware terms, and collector vocabulary used throughout the Game Boy Archive.
---

Short definitions of terms used across the archive, with links to the pages that explain them in context.

## Model codes

**AGB** — Model-number prefix of the [Game Boy Advance](/consoles/game-boy-advance/) (AGB-001).

**AGS** — Model-number prefix of the [Game Boy Advance SP](/consoles/game-boy-advance-sp/): AGS-001 (front-lit) and AGS-101 (backlit).

**CGB** — Model-number prefix of the [Game Boy Color](/consoles/game-boy-color/) (CGB-001). Also used in technical documentation for Color hardware and Color-mode software.

**DMG** — *Dot Matrix Game*, the development name of the original Game Boy and the prefix of its model number, [DMG-01](/consoles/dmg-01/overview/). Technical documentation also uses "DMG" for the original monochrome hardware generally.

**MGB** — Model-number prefix shared by the [Game Boy Pocket](/consoles/game-boy-pocket/) (MGB-001) and [Game Boy Light](/consoles/game-boy-light/) (MGB-101).

**OXY** — Model-number prefix of the [Game Boy Micro](/consoles/game-boy-micro/) (OXY-001).

See [Model Codes & Identification](/collecting/identification/) for the full list.

## Processor and system hardware

**APU** — Audio processing unit. On the original Game Boy it provides four channels: two pulse, one programmable wave, and one noise. See the [technical reference](/reference/example/#audio).

**Boot ROM** — A small program built into the console that runs at power-on. On the original Game Boy it displays the Nintendo logo and checks the cartridge header before starting the game.

**HRAM** — High RAM, a small block of fast internal memory at the top of the original Game Boy's address space.

**LR35902** — Informal name often used for the original Game Boy's processor. See **SM83**.

**Memory map** — The layout of the processor's 16-bit address space: cartridge ROM, video RAM, cartridge RAM, work RAM, object memory, I/O registers, and high RAM. See the [technical reference](/reference/example/#memory-and-address-space).

**OAM** — Object attribute memory, which stores the position and attributes of sprites (objects).

**PPU** — Picture processing unit, the graphics hardware that builds each frame from tiles, the background, the window, and objects.

**SM83** — The Sharp 8-bit processor core used in the Game Boy and Game Boy Color. It is related to, but not identical with, the Intel 8080 and Zilog Z80.

**VRAM / WRAM** — Video RAM, which holds tile and map data, and work RAM, the general-purpose memory used by games. The original Game Boy has 8 KiB of each; the Color has more.

## Cartridges and saves

**Cartridge header** — A block of data in every Game Boy ROM that declares the title, cartridge type, ROM and RAM sizes, and other information. See [Game Boy Cartridges](/cartridges/game-boy-cartridges/).

**Dual-mode cartridge** — A Game Boy Color release that also runs on monochrome Game Boy systems. Often, but not always, in a black shell.

**EEPROM / Flash** — Non-volatile memory types used for saves in some cartridges. They do not need a backup battery.

**Game Pak** — Nintendo's name for a game cartridge.

**MBC** — Memory bank controller: a chip in many Game Boy and Game Boy Color cartridges that switches which part of a large ROM or RAM is visible to the processor. Common families include MBC1, MBC2, MBC3, and MBC5.

**Reproduction cartridge** — An unofficial copy of a game built on a non-original board, often with a copied label. See [Model Codes & Identification](/collecting/identification/#cartridges).

**RTC** — Real-time clock. Some cartridges, such as those using the MBC3, include a clock that keeps time while the console is off.

**SRAM (battery-backed)** — Save memory that loses its contents without power, kept alive by a coin cell in the cartridge. When that cell runs out, the save is lost.

## Display and lighting

**Backlight** — A light source behind the screen. Used by the Game Boy Advance SP AGS-101 and the Game Boy Micro.

**Electroluminescent (EL) panel** — The thin light-emitting layer behind the Game Boy Light's screen, switched on by a dedicated switch.

**Front light** — A light source at the edge of a reflective screen that lights it from the front. Used by the Game Boy Advance SP AGS-001.

**Ghosting** — Smearing or trails behind moving images caused by slow pixel response, characteristic of the DMG-01 screen.

**Reflective LCD** — A screen with no built-in light that relies on ambient light. The DMG-01, Pocket, Color, and original Advance all use reflective screens.

**STN** — Super-twisted nematic, the LCD technology used for the DMG-01 screen. See [History](/consoles/dmg-01/history/#almost-cancelled).

**TFT** — Thin-film transistor, an active-matrix LCD technology used for the color screens of the Game Boy Advance family.

## Hardware, repair, and modding

**Contrast wheel** — The thumbwheel on the DMG-01's right side that adjusts screen contrast.

**Conductive membrane** — The rubber contact under each button. A conductive pad on its underside bridges contacts on the board when pressed. See [Buttons & Membranes](/consoles/dmg-01/physical-design/buttons-membranes/).

**Date code** — A printed code on a chip or board indicating when it was made. Useful for comparing production, but not a precise build date for the whole console.

**EXT. port** — The DMG-01's serial link connector, used with Game Link cables and peripherals. See [Link Port & Peripherals](/consoles/dmg-01/physical-design/link-port-peripherals/).

**Glob top** — Bare silicon dies mounted directly on a board and covered with epoxy. Used on the cost-reduced [DMG-CPU-07](/consoles/dmg-01/pcbs-revisions/dmg-cpu-07/) and [DMG-CPU-08](/consoles/dmg-01/pcbs-revisions/dmg-cpu-08/) boards.

**IPS screen kit** — An aftermarket replacement display using a modern backlit IPS panel. It is a modification, not a factory part. See [Modifications](/consoles/dmg-01/modifications/).

**Silkscreen** — Text printed on a circuit board, such as the `DMG-CPU-xx` revision marking.

**Tri-point (Y-type) screw** — A three-lobed screw head, often sold as *tri-wing*, used on many Nintendo cases. The DMG-01 case usually needs a Y1 driver. See [Screws & Fasteners](/consoles/dmg-01/physical-design/screws-fasteners/).

## Related hardware

**Game Boy Player** — A GameCube accessory (DOL-017) that plays Game Boy, Color, and Advance cartridges on a television.

**Game Link Cable** — Cable that connects two systems for multiplayer or data exchange. Connector styles changed between generations; see [Model Comparison](/consoles/model-comparison/#connectors-and-interfaces).

**Super Game Boy** — A Super Famicom / SNES accessory that plays original Game Boy cartridges on a television, with added borders and palettes for supporting games.
