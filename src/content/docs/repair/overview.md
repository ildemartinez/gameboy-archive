---
title: Repair & Troubleshooting
description: A symptom-based starting point for diagnosing Game Boy faults, linking each symptom to the relevant hardware documentation.
---

This section is the archive's entry point for technicians and owners diagnosing a faulty Game Boy. It is organized by **symptom**, because that is how most repairs begin. Each row points to the subsystem pages that describe the hardware involved.

The archive currently documents hardware at the identification and inspection level. It does **not** yet publish schematics, test-point voltages, or component values, and it does not reproduce step-by-step repair procedures that have not been checked against reliable sources. Where a fault is well known in the repair community but not yet documented here, the table says so.

## Before opening a console

1. **Record the unit first.** Follow [Documenting a Game Boy Console](/consoles/example/) so the original condition, markings, and working functions are on record before anything is disturbed.
2. **Remove all power.** Take out the batteries and disconnect any external supply.
3. **Use the correct drivers.** The DMG-01 case usually uses Y1 tri-point screws, with cross-head screws inside; see [Screws & Fasteners](/consoles/dmg-01/physical-design/screws-fasteners/).
4. **Protect fragile connections.** The DMG-01 display and board-to-board ribbon cables are easily damaged by repeated flexing or reconnection.
5. **Identify the board revision.** Repair options depend on the board; see [Identifying a DMG-01 Board Revision](/guides/example/) and the [PCB Revisions overview](/consoles/dmg-01/pcbs-revisions/overview/).

## Symptom guide (DMG-01)

| Symptom | Areas to inspect first | Archive documentation | Status |
| --- | --- | --- | --- |
| No power, or power cuts out when moved | Battery condition and polarity; corroded or bent battery contacts; external DC input; power switch | [Battery Compartment](/consoles/battery/), [Power & Connections](/consoles/dmg-01/physical-design/power-connections/) | Inspection documented; power-circuit data not yet documented |
| Powers on but screen blank or very faint | Contrast wheel setting; ribbon connection between boards; LCD board | [LCD Display](/consoles/dmg-01/physical-design/lcd-display/) | Inspection documented; diagnostic procedure needs research |
| Missing vertical or horizontal lines on the screen | Connection between the LCD glass and its attached ribbon cables | [LCD Display](/consoles/dmg-01/physical-design/lcd-display/) | Widely reported fault; repair method not yet documented here |
| Garbled or frozen Nintendo logo; game does not start | Cartridge contacts; console cartridge connector; cartridge seating | [Cartridge Slot](/consoles/dmg-01/physical-design/cartridge-slot/), [Game Boy Cartridges](/cartridges/game-boy-cartridges/) | Inspection and care documented |
| Speaker silent but headphones work | Headphone-jack switch contacts | [Speaker & Headphone Jack](/consoles/dmg-01/physical-design/audio-output/) | Cause documented |
| Crackling or uneven volume | Volume control; speaker and its wiring | [Speaker & Headphone Jack](/consoles/dmg-01/physical-design/audio-output/) | Needs research |
| Buttons unresponsive or inconsistent | Conductive membranes; contact pads; cracked shell supports | [Buttons & Membranes](/consoles/dmg-01/physical-design/buttons-membranes/) | Cause and cleaning cautions documented |
| Game loses its save | Cartridge backup battery or save memory | [Game Boy Cartridges: saving progress](/cartridges/game-boy-cartridges/#saving-progress) | Cause documented |
| Link play fails | Cable type and adapter; game support; EXT. port condition | [Link Port & Peripherals](/consoles/dmg-01/physical-design/link-port-peripherals/) | Compatibility documented |

A symptom can have more than one cause. Check the simplest external causes — batteries, contacts, cartridge, and control settings — before assuming a board-level fault, and record what you tested.

### About the screen-line fault

Lost vertical or horizontal lines on the DMG-01 screen are among the most frequently reported faults. Community repair guides attribute them to a failing bond between the LCD glass and the ribbon cable attached to it, and describe heat-based reflow of that connection. The method risks permanent damage to the panel and polarizer, and the original reflective panel is no longer manufactured. This archive will document the procedure only once it can be presented with verified sources and clear warnings; until then, see the community references below.

## Other models

Repair documentation currently covers the DMG-01 only. The [Model Comparison](/consoles/model-comparison/) summarizes how later models differ in screen technology, power system, and connectors — differences that change both the faults you may see and the parts that fit.

## Documentation roadmap

These areas are planned for this section. Each will be added only with sourced material:

- **Power circuit:** the DMG-01 power-conversion board, its marking, and documented operating voltages.
- **Display system:** the LCD board, ribbon connections, and the screen-line fault.
- **Audio circuit:** speaker, volume control, and headphone-jack board.
- **Input circuit:** contact-pad layout and membrane compatibility.
- **Cartridge interface:** connector wear, cleaning, and replacement.
- **Later models:** fault guides for the Pocket, Color, and Advance family.

Contributions should cite their source — service documentation, a published teardown, or photographed specimens — and state the board revision they apply to.

## Community references

These are independent community sources. They are listed for further reading and have not been verified by this archive.

- [iFixit: Nintendo Game Boy teardown](https://www.ifixit.com/Teardown/Nintendo%2BGame%2BBoy%2BTeardown/122657) — disassembly and internal layout.
- [Handheld Legend: DMG disassembly guide](https://docs.handheldlegend.com/s/portal/doc/disassembly-guide-QoL1zoC3Zg) — screw variants and disassembly order.
- [gg8.se: Why dead horizontal lines are harder to fix](https://blog.gg8.se/wordpress/2011/07/21/why-dead-horizontal-lines-are-harder-to-fix/) — explanation of where the screen ribbons attach to the LCD glass.
- [Game Boy hardware database](https://gbhwdb.gekkio.fi/) — board photographs for comparison.
