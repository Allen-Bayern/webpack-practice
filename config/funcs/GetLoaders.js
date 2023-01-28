const getStyleLoaders = (loaderUsed = '') => [
    'style-loader',
    'css-loader',
    {
        loader: 'postcss-loader',
        options: {
            postcssOptions: {
                plugins: [
                    'postcss-preset-env',
                    ['autoprefixer', {
                        browsers: ['Android >= 4.0', 'iOS >= 7']
                    }],
                    ['postcss-pxtorem', {
                        rootValue: 16,
                        propList: ['*']
                    }],
                ]
            } ,
        },
    },
    loaderUsed,
].filter(loader => !!loader);

module.exports = {
    getStyleLoaders,
};
