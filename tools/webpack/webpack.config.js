module.exports = {
    module: {
        rules: [
            {
                test: /\.scss$/,
                include: [
                    path.resolve(__dirname, "libs/core/src/lib/icon")
                ],
                use: [
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            modules: true,
                            localIdentName: DEBUG ? '[local]' : '__[hash:6]'
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: { plugins: () => ([autoprefixer, csso]) }
                    },
                    {
                        loader: 'resolve-url-loader',
                        options: {
                            attempts: 1,
                            debug: true,
                            sourceMap: false
                        }
                    },
                    'fix-global-font-face-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            }
        ]
    }
};
