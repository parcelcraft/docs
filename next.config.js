const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  images: {
    unoptimized: true,
  },
})
//Next.js config 
module.exports = withNextra({
  output: 'export',
  distDir: '.next',
}
)
