import { DocsThemeConfig } from "nextra-theme-docs"
import { LogoIcon } from "ui/icons"

const config: DocsThemeConfig = {
  logo: <LogoIcon />,
  useNextSeoProps() {
    return {
      titleTemplate: "%s | Goat Slider",
      defaultTitle: "Goat Slider Documentation",
      description: "A detailed documentation for Goat Slider.",
      keywords: [
        "Goat Slider", 
        "Documentation", 
        "Azwedo",
        "Goat Slider Docs",
        "Goat Slider Documentation",
        "Learn Goat Slider"
      ],
      openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://docs.goatslider.com",
        site_name: "Goat Slider",
        description: "A detailed documentation for Goat Slider.",
        images: [
            {
                url: '/assets/og_thumbnail.png'
            }
        ]
      },
      twitter: {
        card: 'summary_large_image',
        site: '@goatslider',
        title: 'Goat Slider Documentation',
        description: 'A detailed documentation for Goat Slider.',
        images: [
            {
                url: '/assets/og_thumbnail.png'
            }
        ]
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
