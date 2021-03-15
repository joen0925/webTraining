const path = require('path');
module.exports = {
    mode: 'development',
    entry: { 
        index: './src/index.js' // 從哪裡開始打包
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
        ]
    },
    devServer: {
        contentBase: './build', // 本來打包完的檔案位置
        port: 8080 // 預覽網頁要跑在哪個port
    }
};
