module.exports = {
    siteUrl: 'https://docs.parcelcraft.com',
    sitemapSize: 7000,
    generateRobotsTxt: true,
    additionalPaths: async (config) => [
      await config.transform(config, '/additional-automation'),
      await config.transform(config, '/getting-started/connect-easypost'),
      await config.transform(config, '/enable-1-click-shipping'),
      await config.transform(config, '/international-shipping'),
      await config.transform(config, '/international-shipping/international-settings'),
      await config.transform(config, '/getting-started/print-test-label'),
      await config.transform(config, '/enable-1-click-shipping/setup-stripe-invoicing'),
      await config.transform(config, '/enable-1-click-shipping/set-carrier-defaults'),
      await config.transform(config, '/'),
      await config.transform(config, '/troubleshooting'),
      await config.transform(config, '/faq'),
      await config.transform(config, '/getting-started'),
      await config.transform(config, '/getting-started/install-parcelcraft'),
      await config.transform(config, '/getting-started/setup-easypost'),
      await config.transform(config, '/getting-started/connect-easypost'),
      await config.transform(config, '/getting-started/enter-origin-address'),
      await config.transform(config, '/getting-started/print-test-label'),
      await config.transform(config, '/enable-1-click-shipping/setup-stripe-invoicing'),
      await config.transform(config, '/enable-1-click-shipping/set-product-defaults'),
    ],
 

  }