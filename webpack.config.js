const path = require('path')   //Importing manually Node.js path package (part of node library so don't ned to be installed)

const postCSSPlugins = [
    require('postcss-import'),
    require('postcss-mixins'),
    require('postcss-simple-vars'),
    require('postcss-nested'),
    require('autoprefixer')
]

module.exports = {
    entry: './app/assets/scripts/App.js',
    output: {
        filename: 'bundled.js',
        path: path.resolve(__dirname, 'app')
    },
    devServer: {
        before: function (app, server) {
            server._watch('./app/**/*.html')   // '**' any subfolder; '*.html' any file that ends .html
        },
        contentBase: path.join(__dirname, 'app'),
        hot: true,   //Injecting JSS and CSS to the browser memory on the fly
        port: 3000,
        host: '0.0.0.0'
    },
    mode: 'development',  //adressing/fixing yellow terminal warning
    //watch: true,           //webpack is watching so command 'npm run build' is no longer needed it will automatically rebundle the files after we save changes.  Not needed if devServer is working.
    module: {
        rules: [
            {
                test: /\.css$/i,  //if the file is ending .css
                use: ['style-loader', 'css-loader?url=false', { loader: 'postcss-loader', options: { postcssOptions: { plugins: postCSSPlugins } } }]
            }
        ]
    }
}
// 'css-loader' bundling the styles and 'style-loader' applies the styles to the browser.
