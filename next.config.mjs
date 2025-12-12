import nextra from 'nextra'

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx'
})

//Next.js config
export default withNextra({
  reactStrictMode: true,
  output: 'export',
  distDir: '.next',
  images: {
    unoptimized: true,
  }
})