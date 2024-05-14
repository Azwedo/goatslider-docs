import { DocsThemeConfig } from "nextra-theme-docs"
import { LogoIcon } from "ui/icons"

const config: DocsThemeConfig = {
  logo: <LogoIcon />,
  useNextSeoProps() {
    return {
      titleTemplate: "%s | Goat Slider",
      description: "A detailed documentation for Goat Slider.",
      openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://docs.goatslider.com",
        site_name: "Goat Slider",
        description: "A detailed documentation for Goat Slider.",
      }
    }
  },
  project: {
    link: "https://github.com/Azwedo/goatslider-docs",
  },
  docsRepositoryBase: "https://github.com/Azwedo/goatslider-docs/blob/Production",
  footer: {
    text: "Goat Slider - A Project by Azwedo.com"
  }
}

export default config;
