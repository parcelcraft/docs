import React from 'react'
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
    useNextSeoProps() {
      return {
        titleTemplate: '%s - Parcelcraft'
      }
    },
    logoLink: "https://www.parcelcraft.com",
    project: {
      link: 'https://github.com/parcelcraft/docs',
    },
    navbar: { extraContent: (<a href='https://parcelcraft.canny.io/feature-requests'> Request or vote for new features</a>)},
    docsRepositoryBase: 'https://github.com/parcelcraft/docs/blob/main',
    head: (
      <>

        <link rel="shortcut icon" href="/images/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png" />
      </>
    ),
    themeSwitch: {
      useOptions() {
        return {
          light: 'Light',
          dark: 'Dark',
          system: 'System Theme',
        }
      }
    },
    footer: {
      text: `© ${new Date().getFullYear()} Parcelcraft`,
    },


  }

  export default config
