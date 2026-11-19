---
title: PCB Revisions Overview
description: How DMG-01 circuit-board revisions are identified, grouped, and compared, with links to each DMG-CPU board.
---

The DMG-01 is built from several circuit boards rather than a single motherboard. The **main CPU board** carries a silkscreened `DMG-CPU-xx` marking. The display, power-conversion, and headphone-jack assemblies have their own markings and may come from different revision groups. This overview explains how the archive organizes these boards and what the revision numbers can and cannot tell you.

## Main CPU-board revisions

| Marking | Documented distinction | Page |
| --- | --- | --- |
| DMG-CPU-01 | Earliest catalogued revision in the commonly documented sequence | [DMG-CPU-01](/consoles/dmg-01/pcbs-revisions/dmg-cpu-01/) |
| DMG-CPU-02 | Part of the broadly similar -01 to -06 group | [DMG-CPU-02](/consoles/dmg-01/pcbs-revisions/dmg-cpu-02/) |
| DMG-CPU-03 | Part of the broadly similar -01 to -06 group | [DMG-CPU-03](/consoles/dmg-01/pcbs-revisions/dmg-cpu-03/) |
| DMG-CPU-04 | Part of the broadly similar -01 to -06 group | [DMG-CPU-04](/consoles/dmg-01/pcbs-revisions/dmg-cpu-04/) |
| DMG-CPU-05 | Part of the broadly similar -01 to -06 group | [DMG-CPU-05](/consoles/dmg-01/pcbs-revisions/dmg-cpu-05/) |
| DMG-CPU-06 | Last revision before the cost-reduced boards | [DMG-CPU-06](/consoles/dmg-01/pcbs-revisions/dmg-cpu-06/) |
| DMG-CPU-07 | Cost-reduced: bare dies under epoxy glob tops | [DMG-CPU-07](/consoles/dmg-01/pcbs-revisions/dmg-cpu-07/) |
| DMG-CPU-08 | Cost-reduced: bare dies under epoxy glob tops | [DMG-CPU-08](/consoles/dmg-01/pcbs-revisions/dmg-cpu-08/) |

### What is established

- Comparative references describe **-01 to -06 as broadly similar** designs with separately packaged chips.
- **-07 and -08** use bare silicon dies mounted on the PCB and covered with epoxy. This is visible and affects repair: those dies cannot be desoldered or replaced like packaged ICs.

### What still needs research

- A verified, change-by-change engineering log for each of -01 to -06.
- A reliable mapping from board revision to production dates, regions, or serial-number ranges.
- A catalogue of secondary-board markings (LCD, power, and jack boards) and which combinations occur together.

The archive does not assign undocumented differences to a revision. Additions should cite board photographs, component designators, chip markings, or date codes from identifiable specimens.

## Identifying a board

Read the marking directly from the board's silkscreen. Shell color, serial numbers, and labels cannot reliably identify the board inside. Follow [Identifying a DMG-01 Board Revision](/guides/example/) for a safe procedure, and use [Documenting a Game Boy Console](/consoles/example/) to record the result alongside the console's exterior and tested functions.

## Related pages

- [Architecture & Specifications](/consoles/dmg-01/architecture-specifications/) — what the boards implement.
- [Repair & Troubleshooting](/repair/overview/) — how board revisions affect diagnosis.
- [Model Comparison](/consoles/model-comparison/) — later models use entirely different boards.

## Sources

- [Game Boy hardware database: DMG](https://gbhwdb.gekkio.fi/consoles/dmg/) — photographs and component data for submitted units.
- [ConsoleMods Wiki: Game Boy model differences](https://consolemods.org/wiki/Game_Boy%3AModel_Differences) — summary of early and cost-reduced board construction.
