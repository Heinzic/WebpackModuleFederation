import { ModuleOptions } from "webpack";
import { BuildOptions } from "./types/types";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function buildLoaders(options: BuildOptions): ModuleOptions['rules'] {
    const isDev = options.mode === 'development'

    const assetLoader = {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
    }

    const svgrLoader = {
        test: /\.svg$/,
        use: [{ loader: "@svgr/webpack", options: { icon: true } }],
        type: 'javascript/auto',
    }

    const sccLoader = {
        test: /\.s[ac]ss$/i,
        use: [isDev ? 'style-loader' : MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
    }

    const tsLoader = {
        test: /\.tsx?$/,
        use: [{
            loader: 'ts-loader', 
            options: {
                transpileOnly: true
            }
        }],
        exclude: /node_modules/,
    }

    return [sccLoader, tsLoader, assetLoader, svgrLoader]
}