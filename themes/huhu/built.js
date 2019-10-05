({
  baseUrl: './source/scripts',
  optimize: 'none',
  name: './app',
  out: './source/scripts/app-built.js',
  removeCombined: true,
  paths: {
    // cdn
    jquery: 'empty:',
    av: 'empty:',
    pjax: 'empty:',
    confirm: 'empty:',
    fancybox: 'empty:',
    algoliasearch: 'empty:',
    valine: 'empty:',

    // need built
    util: 'util',
    share: 'share',
    search: 'search',
    registerSW: 'registerSW'
  }
})
