import { DocsThemeConfig } from "nextra-theme-docs"
import { LogoIcon } from "ui/icons"

const config: DocsThemeConfig = {
  logo: <LogoIcon />,
  useNextSeoProps() {
    return {
      titleTemplate: "%s | Goat Slider",
      description: "A detailed documentation for Goat Slider.",
      openGraph: {
        images: [{ url: "/assets/og-thumbnail.jpg" }],
        description: "A detailed documentation for Goat Slider.",
        siteName: "Goat Slider",
      }
    }
  },
  head: (
    <>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
    </>
  ),
  project: {
    link: "https://github.com/Azwedo/goatslider-docs",
  },
  docsRepositoryBase: "https://github.com/Azwedo/goatslider-docs",
  footer: {
    text: "Goat Slider - A Project by Azwedo.com"
  }
}

export default config;
