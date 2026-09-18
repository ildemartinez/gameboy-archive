// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Gameboy Archive",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/ildemartinez/gameboy-archive",
        },
      ],
      sidebar: [
        {
          label: "Introduction",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Example Guide", slug: "consoles/example" },
          ],
        },
        {
          label: "Reference",
          items: [{ autogenerate: { directory: "reference" } }],
        },
        {
          label: "Reference",
          items: [{ autogenerate: { directory: "reference" } }],
        },
        {
          label: "Game Boy Family",
          items: [
            {
              label: "Game Boy DMG",
              items: [
                { label: "Overview", slug: "consoles/example" },
                { label: "History", slug: "consoles/example" },

                {
                  label: "Physical Design",
                  items: [
                    {
                      label: "Shell & Housing",
                      items: [
						{ label: "Overview", slug: "empty" },
                        { label: "Basic Colors", slug: "empty" },
						{ label: "Play it Loud! Serie", slug: "empty" },
						{ label: "Limited Editions", slug: "empty" },						
                      ],
                    },

                    { label: "Materials", slug: "empty" },
                    { label: "Dimensions", slug: "empty" },
                    { label: "Screws & Fasteners", slug: "empty" },
                    { label: "Buttons & Membranes", slug: "empty" },
                    { label: "Battery Compartment", slug: "consoles/battery" },
                    { label: "Cartridge Slot", slug: "empty" },
                    { label: "Labels & Markings", slug: "empty" },
                    { label: "Mechanical Parts", slug: "empty" },
                  ],
                },
                {
                  label: "PCBs & Revisions",
                  items: [
                    { label: "DMG-CPU-01", slug: "empty" },
                    { label: "DMG-CPU-02", slug: "empty" },
                    { label: "DMG-CPU-03", slug: "empty" },
                    { label: "DMG-CPU-04", slug: "empty" },
                    { label: "DMG-CPU-05", slug: "empty" },
                    { label: "DMG-CPU-06", slug: "empty" },
                    { label: "DMG-CPU-07", slug: "empty" },
                    { label: "DMG-CPU-08", slug: "empty" },
                  ],
                },
                { label: "Modifications", slug: "consoles/example" },
              ],
            },
            { label: "Game Boy Pocket", slug: "consoles/example" },
            { label: "Game Boy Light", slug: "consoles/example" },
            { label: "Game Boy Color", slug: "consoles/example" },

            /*		{ label: 'Game Boy Pocket', slug: 'consoles/game-boy' },
      					{ label: 'Game Boy Light', slug: 'consoles/game-boy' },
      					{ label: 'Game Boy Color', slug: 'consoles/game-boy' },
      					{ label: 'Game Boy Advance', slug: 'consoles/game-boy' },
      					{ label: 'Game Boy Advance SP', slug: 'consoles/game-boy' },
      					{ label: 'Game Boy Micro', slug: 'consoles/game-boy' },*/
          ],
        },
      ],
    }),
  ],
});
