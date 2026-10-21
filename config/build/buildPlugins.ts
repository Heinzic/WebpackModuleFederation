import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { Configuration, ProgressPlugin } from "webpack";
import { BuildOptions } from "./types/types";
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'

export function buildPlugins({ mode, paths, ananlyzer }: BuildOptions): Configuration['plugins'] {
    const isDev = mode === 'development'
    const isProd = mode === 'production'

    const plugins: Configuration['plugins'] = [
        new HtmlWebpackPlugin({
            template: paths.html,
        })]

    if (isDev) { plugins.push(new ProgressPlugin()) }
    if (isProd) {
        plugins.push(new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/css/[name].[contenthash:8].css'
        }))
    }
    if (ananlyzer) plugins.push(new BundleAnalyzerPlugin())
    return plugins
}