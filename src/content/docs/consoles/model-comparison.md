---
title: Model Comparison
description: Side-by-side comparison of every Game Boy handheld — model numbers, displays, power, cartridge support, and connectors.
---

Use this page to see how the Game Boy handhelds differ at a glance before opening an individual model page. The family shares a name, but processors, displays, power systems, link connectors, and cartridge support changed between generations. These differences decide which parts, accessories, and cartridges work with a given console.

## Handheld models at a glance

| System | Model number | First release | Display | Screen lighting | Power | Cartridges supported |
| --- | --- | --- | --- | --- | --- | --- |
| [Game Boy](/consoles/dmg-01/overview/) | DMG-01 | 1989 (Japan) | Monochrome reflective LCD, 160 × 144 | None | 4 × AA or external DC | Game Boy; dual-mode Game Boy Color titles in monochrome mode |
| [Game Boy Pocket](/consoles/game-boy-pocket/) | MGB-001 | 1996 | Monochrome reflective LCD, 160 × 144 | None | 2 × AAA | As DMG-01 |
| [Game Boy Light](/consoles/game-boy-light/) | MGB-101 | 1998 (Japan only) | Monochrome LCD, 160 × 144 | Electroluminescent panel, switchable | 2 × AA | As DMG-01 |
| [Game Boy Color](/consoles/game-boy-color/) | CGB-001 | 1998 | Color reflective LCD, 160 × 144 | None | 2 × AA | Game Boy and Game Boy Color |
| [Game Boy Advance](/consoles/game-boy-advance/) | AGB-001 | 2001 | Color reflective TFT, 240 × 160 | None | 2 × AA | Game Boy Advance, plus Game Boy and Game Boy Color in legacy mode |
| [Game Boy Advance SP](/consoles/game-boy-advance-sp/) | AGS-001 | 2003 | Color TFT, 240 × 160 | Front light | Built-in rechargeable lithium-ion | As Game Boy Advance |
| [Game Boy Advance SP](/consoles/game-boy-advance-sp/) (revised) | AGS-101 | 2005 | Color TFT, 240 × 160 | Backlight | Built-in rechargeable lithium-ion | As Game Boy Advance |
| [Game Boy Micro](/consoles/game-boy-micro/) | OXY-001 | 2005 | Color TFT, 240 × 160 | Backlight | Built-in rechargeable battery | Game Boy Advance only |

Release years are first releases; dates differed by region. The [Model Codes & Identification](/collecting/identification/) page explains where these model numbers appear on the hardware.

## Generations and architecture

The handhelds fall into three hardware generations:

- **Original monochrome platform — DMG-01, Pocket, Light.** All three run the same Game Boy software on an 8-bit Sharp SM83-family processor at about 4.19 MHz. The Pocket and Light are smaller redesigns, not new platforms. The [technical reference](/reference/example/) describes the shared architecture.
- **Game Boy Color — CGB-001.** Same processor family with an optional double-speed mode, more work RAM and video RAM, and color palettes. It still runs original Game Boy software.
- **Game Boy Advance family — AGB-001, AGS-001/101, OXY-001.** A new architecture built around an ARM7TDMI processor (about 16.78 MHz) and a 240 × 160 display. The AGB and AGS models also contain the hardware needed to run Game Boy and Game Boy Color cartridges; the Micro does not.

## Connectors and interfaces

| System | Link connector | Headphone output | Notes |
| --- | --- | --- | --- |
| DMG-01 | Original large EXT. port | 3.5 mm stereo jack | Connecting to later models needs the [DMG-14 adapter or a universal cable](/consoles/dmg-01/physical-design/link-port-peripherals/). |
| Pocket, Light | Smaller link connector | Headphone jack | Same connector style as the Color. |
| Color | Smaller link connector | Headphone jack | Also has an infrared communication port. |
| Advance, Advance SP | Game Boy Advance link connector | Advance: jack. SP: none built in | The SP needs a headphone adapter for audio output. |
| Micro | Micro-specific link connector | Headphone jack | Needs an adapter to use standard Advance link cables. |

Before connecting accessories across generations, check the specific cable, adapter, and game support. A connector that fits does not guarantee the link will work.

## What this means for repairs and parts

- **Parts rarely interchange between models.** Shells, screens, batteries, membranes, and boards are designed for each enclosure. Even within one model, board revisions can differ — see [DMG-01 PCB revisions](/consoles/dmg-01/pcbs-revisions/overview/).
- **Screen lighting is model-specific.** Unlit reflective screens, the Light's electroluminescent panel, the AGS-001 front light, and the AGS-101 and Micro backlights are different technologies. A replacement screen needs to match the exact model.
- **Power systems differ.** Battery count, cell type, and external power connectors changed between models. Check the electrical rating and polarity of any external supply against the specific console; do not rely on the plug fitting.

## Sources

- [Pan Docs](https://gbdev.io/pandocs/) — Game Boy and Game Boy Color hardware, including the CGB double-speed mode and memory.
- [GBATEK](https://problemkaputt.de/gbatek.htm) — Game Boy Advance hardware reference, including processor and display specifications.
- [Game Boy Complete Technical Reference](https://gekkio.fi/files/gb-docs/gbctr.pdf) — model families and hardware revisions.
- [NinDB: Game Boy hardware](https://nindb.net/gb/hardware.html) and [Game Boy Advance hardware](https://www.nindb.net/gba/hardware.html) — model numbers, accessories, and the Micro link-cable adapter.
- [Nintendo UK: Nintendo history](https://www.nintendo.com/en-gb/Hardware/Nintendo-History/Nintendo-History-625945.html) — release chronology.
