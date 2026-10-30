// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Gameboy Archive",
      customCss: ["./src/styles/custom.css"],
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/ildemartinez/gameboy-archive",
        },
      ],
      sidebar: [
        {
          label: "Game Boy Family",
          items: [
            {
              label: "Game Boy DMG",
              items: [
                { label: "Overview", slug: "consoles/dmg-01/overview" },
                { label: "History", slug: "consoles/dmg-01/history" },

                {
                  label: "Physical Design",
                  items: [
                    {
                      label: "Shell & Housing",
                      items: [
                        { label: "Overview", slug: "consoles/dmg-01/physical-design/shell-housing/overview" },
						{ label: "Basic Colors", slug: "consoles/dmg-01/physical-design/shell-housing/basic-colors" },
						{ label: "Play It Loud! / Game Boy Bros.", slug: "consoles/dmg-01/physical-design/shell-housing/play-it-loud" },
						{ label: "Limited Editions", slug: "consoles/dmg-01/physical-design/shell-housing/limited-editions" },						
                      ],
                    },

                    { label: "Materials", slug: "consoles/dmg-01/physical-design/materials" },
                    { label: "Dimensions", slug: "consoles/dmg-01/physical-design/dimensions" },
                    { label: "Screws & Fasteners", slug: "consoles/dmg-01/physical-design/screws-fasteners" },
                    { label: "Buttons & Membranes", slug: "consoles/dmg-01/physical-design/buttons-membranes" },
                    { label: "Battery Compartment", slug: "consoles/battery" },
                    { label: "Cartridge Slot", slug: "consoles/dmg-01/physical-design/cartridge-slot" },
                    { label: "Labels & Markings", slug: "consoles/dmg-01/physical-design/labels-markings" },
                    { label: "Mechanical Parts", slug: "consoles/dmg-01/physical-design/mechanical-parts" },
                  ],
                },
                {
                  label: "PCBs & Revisions",
                  items: [
                    { label: "DMG-CPU-01", slug: "consoles/dmg-01/pcbs-revisions/dmg-cpu-01" },
                    { label: "DMG-CPU-02", slug: "consoles/dmg-01/pcbs-revisions/dmg-cpu-02" },
                    { label: "DMG-CPU-03", slug: "consoles/dmg-01/pcbs-revisions/dmg-cpu-03" },
                    { label: "DMG-CPU-04", slug: "consoles/dmg-01/pcbs-revisions/dmg-cpu-04" },
                    { label: "DMG-CPU-05", slug: "consoles/dmg-01/pcbs-revisions/dmg-cpu-05" },
                    { label: "DMG-CPU-06", slug: "consoles/dmg-01/pcbs-revisions/dmg-cpu-06" },
                    { label: "DMG-CPU-07", slug: "consoles/dmg-01/pcbs-revisions/dmg-cpu-07" },
                    { label: "DMG-CPU-08", slug: "consoles/dmg-01/pcbs-revisions/dmg-cpu-08" },
                  ],
                },
                { label: "Modifications", slug: "consoles/dmg-01/modifications" },
              ],
            },
            { label: "Game Boy Pocket", slug: "consoles/game-boy-pocket" },
            { label: "Game Boy Light", slug: "consoles/game-boy-light" },
            { label: "Game Boy Color", slug: "consoles/game-boy-color" },
            { label: "Game Boy Advance", slug: "consoles/game-boy-advance" },
            { label: "Game Boy Advance SP", slug: "consoles/game-boy-advance-sp" },
            { label: "Game Boy Micro", slug: "consoles/game-boy-micro" },

          ],
        },
        {
          label: "Game Boy Cartridges",
          slug: "cartridges/game-boy-cartridges",
        },
      ],
    }),
  ],
});
