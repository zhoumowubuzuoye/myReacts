const {
    override,
    fixBabelImports
} = require('customize-cra')
module.exports = override(
    fixBabelImports('import', {
        libartName: 'antd',
        libraryDirectory: 'es',
        style: 'css'
    })
)