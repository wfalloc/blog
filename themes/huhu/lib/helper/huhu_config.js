const _ = require('lodash')

module.exports = function() {
  const CONFIG = _.assign({}, this.config, this.theme)

  let huhu_config = {
    share: CONFIG.share,
    valine: CONFIG.valine,
    weather: CONFIG.weather,
    algoliasearch: CONFIG.algoliasearch,
    service_worker: CONFIG.service_worker
  }

  let json = ''

  try {
    json = JSON.stringify(huhu_config)
  } catch (e) {
    json = ''
  }

  let script = `<script type="text/javascript">
                  window.HUHU_CONFIG = JSON.parse(${JSON.stringify(json)})
                </script>`

  return script
}
