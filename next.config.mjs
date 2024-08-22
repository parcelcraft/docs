import nextra from 'nextra'

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  images: {
    unoptimized: true,
  },
})
//Next.js config 
export default withNextra({
  reactStrictMode: true
})