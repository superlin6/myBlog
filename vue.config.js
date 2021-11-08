// vue.config.js
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')
module.exports = {
    configureWebpack: {
      plugins: [
        require('unplugin-vue-components/webpack')({ /* options */
        }),
        Components({
            resolvers:[ElementPlusResolver()],
        })
    ],
    
    },
  }