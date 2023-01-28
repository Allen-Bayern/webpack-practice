import { RuleSetUseItem } from "webpack";

export function getStyleLoaders(loaderUsed: RuleSetUseItem = ''): RuleSetUseItem[] {
    return [
        'style-loader',
        'css-loader',
        {
            loader: 'postcss-loader',
            options: {
                postcssOptions() {
                    return {
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
                    }
                } ,
            },
        },
        loaderUsed,
    ].filter(loader => {
        return loader !== '' || JSON.stringify(loader) !== '{}'
    });
}
