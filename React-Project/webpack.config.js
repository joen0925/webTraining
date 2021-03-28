const path = require('path');
module.exports = {
    mode: 'development',
    entry: { 
        index: ["@babel/polyfill",'./src/index.js' ]// 從哪裡開始打包，並加入@balel/polyfill解決不能用async問題
    },
    output: { 
        filename: 'bundle.js', // 要打包成什麼
        path: path.resolve('./build'), // 要打包在哪裡
    },
    module: {
        rules: [
            { 
                test: /.js$/,
                exclude: /node_modules/, //不編譯的檔案
                use: { 
                    loader: 'babel-loader',
                    options: { 
                        presets: ['@babel/preset-react', '@babel/preset-env'] 
                    } 
                } 
            },
            {
                test: /\.css$/i,
                use: ['style-loader',
                {
                    loader: 'css-loader',
                    options: {
                        modules: true, // 啟用 CSS 模組功能
                      },
                },
                ],
            },
            {
                test: /\.(jpg|png|svg)$/,
                loader: 'file-loader',
                options: {
                  name: '[path][name].[hash].[ext]',
                },
            },
        ],
    },
    devServer: {
        contentBase: './build', // 本來打包完的檔案位置
        port: 8080 // 預覽網頁要跑在哪個port
    }
};
