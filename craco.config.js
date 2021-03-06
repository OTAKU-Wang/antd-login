/* craco.config.js 用于修改antd的主题 */
const CracoLessPlugin = require('craco-less');

module.exports = {
    // ...
    plugins: [{
        plugin: CracoLessPlugin,
        options: {
            lessLoaderOptions: {
                lessOptions: {
                    modifyVars: {
                        '@primary-color': '#1DA57A'
                    },
                    javascriptEnabled: true,
                },
            },
        },
    }, ],
};