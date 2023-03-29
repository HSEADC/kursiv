const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

const webpack = require('webpack')
const path = require('path')

module.exports = {
  entry: {
    index: './src/index.js',
    test: './src/jsbasics.js',
    library: './src/library.js',
    fontArticle: './src/library/fontArticle.js',
    spaces: './src/spaces.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'docs')
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['@babel/plugin-proposal-class-properties']
          }
        }
      },
      {
        test: /\.(sa|sc|c)ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [['postcss-preset-env']]
              }
            }
          },
          'sass-loader'
        ]
      },
      {
        test: /\.html$/i,
        loader: 'html-loader'
      },
      {
        resourceQuery: /raw/,
        type: 'asset/source'
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[hash][ext][query]'
        }
      },
      {
        test: /\.(ttf|otf|woff|woff2)$/i,
        loader: 'file-loader',
        options: {
          name: 'fonts/[name].[ext]'
        }
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    }),

    new CopyPlugin({
      patterns: [{ from: 'src/share', to: 'share' }]
    }),

    // Landing page
    new HtmlWebpackPlugin({
      hash: true,
      template: './src/index.html',
      filename: './index.html',
      chunks: ['library']
    }),

    new HtmlWebpackPlugin({
      hash: true,

      template: './src/knowledge.html',
      filename: './knowledge.html'
    }),
    // Spaces page link
    new HtmlWebpackPlugin({
      hash: true,

      template: './src/spaces.html',
      filename: './spaces.html',
      chunks: ['spaces']
    }),
    // Test page link
    new HtmlWebpackPlugin({
      hash: true,

      template: './src/jsbasics.html',
      filename: './jsbasics.html'
    }),

    // Typeface page link
    new HtmlWebpackPlugin({
      hash: true,

      template: './src/library/roboto.html',
      filename: './library/helvetica.html',
      chunks: ['fontArticle']
    }),

    new HtmlWebpackPlugin({
      hash: true,

      template: './src/library/roboto.html',
      filename: './library/roboto.html',
      chunks: ['fontArticle']
    }),

    new HtmlWebpackPlugin({
      hash: true,

      template: './src/library/ptsans.html',
      filename: './library/ptsans.html',
      chunks: ['fontArticle']
    }),

    //Library page link
    new HtmlWebpackPlugin({
      hash: true,

      template: './src/library.html',
      filename: './library.html',
      chunks: ['library']
    }),
    // Article page link
    new HtmlWebpackPlugin({
      hash: true,

      template: './src/knowledge/article.html',
      filename: './knowledge/article.html'
    }),
    //Styleguide
    new HtmlWebpackPlugin({
      hash: true,

      template: './src/styleguide.html',
      filename: './styleguide.html'
    }),
    // Styleguide page link
    new HtmlWebpackPlugin({
      hash: true,

      template: './src/styleguide/logos.html',
      filename: './styleguide/logos.html'
    }),
    new HtmlWebpackPlugin({
      hash: true,

      template: './src/styleguide/brand.html',
      filename: './styleguide/brand.html'
    }),
    new HtmlWebpackPlugin({
      hash: true,

      template: './src/styleguide/fonts.html',
      filename: './styleguide/fonts.html'
    }),
    new HtmlWebpackPlugin({
      hash: true,

      template: './src/styleguide/colors.html',
      filename: './styleguide/colors.html'
    }),
    new HtmlWebpackPlugin({
      hash: true,

      template: './src/styleguide/mockups.html',
      filename: './styleguide/mockups.html'
    }),

    new HtmlWebpackPlugin({
      hash: true,

      template: './src/holder.html',
      filename: './holder.html'
    }),

    // Partials
    new HtmlWebpackPartialsPlugin([
      {
        path: path.join(__dirname, './src/partials/analytics.html'),
        location: 'analytics',
        template_filename: '*',
        priority: 'replace'
      }
    ])
  ],
  optimization: {
    minimizer: [new CssMinimizerPlugin()]
  }
}
