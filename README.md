# Game Boy Archive

**Game Boy Archive** is an English-language reference website about Nintendo’s Game Boy family. It brings together historical context, model overviews, hardware notes, cartridge compatibility, and identification guidance in one browsable Astro + Starlight site.

## About the project

The archive is intended for Game Boy owners, collectors, repairers, researchers, and developers who want to understand how the systems differ and how their hardware fits together. It covers the original DMG-01 in the most detail, with shorter overview pages for later models and shared technical references for areas such as cartridges and platform architecture.

The site is an active work in progress. Coverage varies by topic; it does not claim to be a complete catalogue of every regional release, accessory, or board-level change.

## What is documented

- **Game Boy family:** the original DMG-01, Pocket, Japan-only Light, Color, Advance, Advance SP, and Micro.
- **DMG-01 history and design:** development history, shell colors, Play It Loud! / Game Boy Bros., limited editions, physical construction, battery compartment, and modifications.
- **Hardware revisions:** individual pages for DMG-CPU-01 through DMG-CPU-08, with identification notes. The publicly documented differences are clearer for -07 and -08 than for every earlier revision.
- **Technical reference:** processor, memory, display, graphics, audio, cartridges, and link-port concepts for the original platform and related systems.
- **Cartridges:** Game Boy, Game Boy Color, and Game Boy Advance formats, internal hardware, save technologies, and compatibility across systems.
- **Identification guidance:** how to record a console’s model, exterior condition, board markings, and tested functions.

Some pages include generic SVG visual placeholders that indicate the kind of sourced photograph or diagram that would improve the explanation. These are clearly labeled and are not photographs of Nintendo hardware. Existing photo credits and license notes are kept alongside the relevant assets.

## Console coverage

| System | Current coverage |
| --- | --- |
| [Game Boy (DMG-01)](src/content/docs/consoles/dmg-01/overview.md) | Main focus: history, physical design, shell variants, battery system, modifications, and CPU-board revisions. |
| [Game Boy Pocket](src/content/docs/consoles/game-boy-pocket.md) | Model overview, design changes, power, and compatibility. |
| [Game Boy Light](src/content/docs/consoles/game-boy-light.md) | Model overview, Japanese release context, and electroluminescent display. |
| [Game Boy Color](src/content/docs/consoles/game-boy-color.md) | Model overview, color hardware, and backward compatibility. |
| [Game Boy Advance](src/content/docs/consoles/game-boy-advance.md) | Model overview, architecture change, and legacy cartridge support. |
| [Game Boy Advance SP](src/content/docs/consoles/game-boy-advance-sp.md) | Clamshell design, screen revisions, battery, and compatibility. |
| [Game Boy Micro](src/content/docs/consoles/game-boy-micro.md) | Compact design and GBA-only cartridge support. |

Related systems and accessories such as Super Game Boy and Game Boy Player appear in the cartridge and technical references; they do not yet have standalone documentation sections.

## Browse the documentation

- [Home page](src/content/docs/index.mdx)
- [DMG-01 overview](src/content/docs/consoles/dmg-01/overview.md) · [history](src/content/docs/consoles/dmg-01/history.md)
- [DMG-01 shell and housing](src/content/docs/consoles/dmg-01/physical-design/shell-housing/overview.md) · [basic colors](src/content/docs/consoles/dmg-01/physical-design/shell-housing/basic-colors.md) · [Play It Loud!](src/content/docs/consoles/dmg-01/physical-design/shell-housing/play-it-loud.md)
- [Game Boy cartridges](src/content/docs/cartridges/game-boy-cartridges.md)
- [Game Boy technical reference](src/content/docs/reference/example.md)

## Technology

- [Astro](https://astro.build/) for the static site build and development server.
- [Starlight](https://starlight.astro.build/) for the documentation layout, navigation, and search.
- Markdown and MDX content, with a TypeScript Astro content-collection configuration.
- CSS for site-specific styling and Sharp through Astro for image processing.

The project does not use a client-side UI framework such as React, Vue, or Svelte.

## Project structure

```text
.
├── public/                         # Public static files, including the favicon
├── src/
│   ├── assets/
│   │   ├── consoles/               # Referenced photos and image credits
│   │   └── placeholders/           # Labeled editorial SVG placeholders
│   ├── content/
│   │   ├── docs/                   # Markdown/MDX pages; routes follow this tree
│   │   └── i18n/                   # Starlight English locale data
│   ├── content.config.ts           # Astro content collections and loaders
│   └── styles/custom.css           # Site-specific styles
├── astro.config.mjs                # Starlight navigation and site configuration
├── package.json                    # Dependencies and npm scripts
└── package-lock.json               # Locked npm dependency tree
```

## Getting started

You need Node.js and npm installed. From the repository root, install the locked dependencies and start Astro in background mode:

```sh
npm install
npx astro dev --background
```

Astro uses port `4321` by default when it is available. Check or manage the background server with:

```sh
npx astro dev status
npx astro dev logs
npx astro dev stop
```

## Development commands

| Command | Purpose |
| --- | --- |
| `npm run build` | Build the static site into `dist/`. |
| `npm run preview` | Preview the most recent build locally. |
| `npm run astro -- --help` | Show Astro CLI help. |

There is currently no test, lint, or `astro check` script defined in `package.json`. The production build is the available project check.

## Contributing

There is no formal contribution guide in the repository yet. For documentation changes, keep page content in English, use descriptive internal links, and include reliable sources for technical or historical claims. When evidence is incomplete, make that uncertainty clear rather than guessing. Preserve attribution and license information when changing or adding image assets.

## License

No repository-wide `LICENSE` file is currently present, so this README does not assign a license to the project. Individual image assets may have separate attribution and license terms documented in their asset folders.
