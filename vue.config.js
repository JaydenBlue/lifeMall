const Timestamp = new Date().getTime();
module.exports = {
    publicPath: './',
    outputDir: 'dist',
    lintOnSave: true,
    runtimeCompiler: true,
    chainWebpack: () => { },
    productionSourceMap: false,
    configureWebpack: { // webpack 配置
        output: { // 输出重构  打包编译后的 文件名称  【模块名称.版本号.时间戳】
            filename: `js/[name].js?${Timestamp}`,
            chunkFilename: `js/[name].js?${Timestamp}`
        },
    },
}