import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: (
    <>
      <img src="/images/favicon-32x32.png" />
      <span style={{ marginLeft: '.5em', fontWeight: 700, fontSize: "24px" }}>
        Parcelcraft
      </span>
    </>
  ),
  logoLink: "https://www.parcelcraft.com",
  project: {
    link: 'https://github.com/parcelcraft/docs',
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
    toggleButton: true
  },
  docsRepositoryBase: 'https://github.com/parcelcraft/docs/blob/main',
  head: (
    <>
      <link rel="shortcut icon" href="/images/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png" />
      <link rel="stylesheet" href="custom-css.css" />
      <script
        dangerouslySetInnerHTML={{
          __html: `
          window.fwSettings={
            'widget_id':154000001780
            };
            !function(){if("function"!=typeof window.FreshworksWidget){var n=function(){n.q.push(arguments)};n.q=[],window.FreshworksWidget=n}}() 
          `,
        }}
      />
      <script></script>
      <script type='text/javascript' src='https://widget.freshworks.com/widgets/154000001780.js' async defer></script>
    </>
  ),
  footer: {
    content: `© ${new Date().getFullYear()} Parcelcraft`
  }
}

export default config
