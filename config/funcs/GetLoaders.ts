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
        /**
         * 由于loader可能是对象类型
         * 所以单纯判断string类型的loader时必须强开类型断言
         */
        return (loader as string) !== '' || JSON.stringify(loader) !== '{}'
    });
}
