// 引入一个包
const path = require('path')
// 打包的文件引入html文件
const HTMLWebpackPlugin = require('html-webpack-plugin')

// 引入clean插件
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
// webpack中的所有的配置信息都应该写在module.exports中
module.exports = {
    // 指定入口文件
    entry: './src/index.ts',

    // 指定打包文件所在目录
    output: {
        // 执行打包文件的目录
        path: path.resolve(__dirname, 'dist'),
        filename: "bundle.js",
        //
        environment: {
            arrowFunction: false,
            const: false
        }
    },

    // 指定webpack打包时要使用的模块
    module: {
        // 指定要加载的规则
        rules: [
            {
                // test指定的是规则生效的文件
                test: /\.ts$/,
                // 要使用的loader
                use: [
                  // 配置babal
                    {
                        // 指定加载器
                        loader: "babel-loader",
                        // 设置babel
                        options: {
                            // 设置预定义的环境
                            presets: [
                              [
                                // 指定环境插件
                                "@babel/preset-env",
                                //配置信息
                                  {
                                      targets: {
                                          "chrome": "88"
                                      },
                                      // 指定croejs的版本
                                      "corejs": "3",
                                      // 使用corejs的方式"usage",表示按需加载
                                      "useBuiltIns": "usage"
                                  }
                              ]
                            ]
                        }
                    },
                    'ts-loader'],
                // 要排除的文件
                exclude: /node_modules/
            },
            // 设置less文件的处理
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    // 引入postcss
                    {
                      loader: 'postcss-loader',
                      options: {
                          postcssOptions: {
                              plugins: [
                                  [
                                      "postcss-preset-env",
                                      {
                                          browsers: 'last 2 versions'
                                      }
                                  ]
                              ]
                          }
                      }
                    },
                    'less-loader'
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HTMLWebpackPlugin({
            // title: '这是一个自定义的title',
            template: "./src/index.html"
        })
    ],

    // 用来设置引用模块
    resolve: {
        extensions: ['.ts', '.js']
    }
}
