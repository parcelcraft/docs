import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import Script from "next/script"

declare global {
  interface Window {
    dataLayer: any[]; // Define the type of dataLayer as an array of any
  }
}


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
  docsRepositoryBase: 'https://github.com/parcelcraft/docs/blob/main',
  head: (
    <>
     <Script src="https://www.googletagmanager.com/gtag/js?id=G-24X875LHXS" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-24X875LHXS');
        `}
      </Script>

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
