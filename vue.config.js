const { defineConfig } = require('@vue/cli-service');
//comment
module.exports = defineConfig({
    transpileDependencies: true,

    pluginOptions: {
        vuetify: {
            // https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
        },
    },
    devServer: {
        allowedHosts: [
            'waveballoon.com',
            'www.waveballoon.com',
            'www.www.waveballoon.com',
        ],
    },
});
