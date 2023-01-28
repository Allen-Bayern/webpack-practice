import { RuleSetUseItem } from "webpack";

export function getStyleLoaders(loaderUsed: RuleSetUseItem = ''): RuleSetUseItem[] {
    return [
        'style-loader',
        'css-loader',
        {
            loader: 'postcss-loader',
            options: {
                postcssOptions: {
                    plugins: [
                        'postcss-preset-env',
                    ],
                },
            },
        },
        loaderUsed,
    ].filter(loader => {
        return loader !== '' || JSON.stringify(loader) !== '{}'
    });
}
