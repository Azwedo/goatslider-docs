import { DocsThemeConfig } from "nextra-theme-docs"
import { LogoIcon } from "ui/icons"

const config: DocsThemeConfig = {
  logo: <LogoIcon />,
  head: function Head() {
    return (
      <>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <link rel='icon' type='image/x-icon' href='/favicon.ico' />

        <title>
            Goat Slider Documentation
        </title>

        <meta
          name='description'
          content='A detailed documentation for Goat Slider.'
        />

        <meta property='og:title' content='Goat Slider Documentation' />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://docs.goatslider.com' />
        <meta property='og:site_name' content='Goat Slider' />
        <meta property='og:locale' content='en_US' />

        <meta
          property='og:image'
          content='https://docs.goatslider.com/assets/og_thumbnail.jpg'
        />
        <meta
          property='og:description'
          content='A detailed documentation for Goat Slider.'
        />

        <meta
          name='twitter:image'
          content='https://docs.goatslider.com/assets/og_thumbnail.jpg'
        />
        <meta
          name='twitter:description'
          content='A detailed documentation for Goat Slider.'
        />
      </>
    )
  },
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
        "Learn Goat Slider",
      ],
      openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://docs.goatslider.com",
        site_name: "Goat Slider",
        description: "A detailed documentation for Goat Slider.",
        images: [
          {
            url: "/assets/og_thumbnail.png",
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        site: "@goatslider",
        title: "Goat Slider Documentation",
        description: "A detailed documentation for Goat Slider.",
        images: [
          {
            url: "/assets/og_thumbnail.png",
          },
        ],
      },
    }
  },
  project: {
    link: "https://github.com/Azwedo/goatslider-docs",
  },
  docsRepositoryBase:
    "https://github.com/Azwedo/goatslider-docs/blob/Production",
  footer: {
    text: "Goat Slider - A Project by Azwedo.com",
  },
}

export default config