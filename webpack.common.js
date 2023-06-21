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
    spaces: './src/spaces.js',
    reactBasics: './src/reactBasics.jsx',
    open: './src/open.jsx',
    journal: './src/journal.js',
    rework: './src/rework.js',
    header: './src/header.jsx',
    footer: './src/footer.jsx'
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
      chunks: ['open', 'header', 'footer']
    }),
    new HtmlWebpackPlugin({
      hash: true,
      template: './src/journal/aboutLetter.html',
      filename: './journal/aboutLetter.html',
      chunks: ['rework', 'header', 'footer']
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
    // Spaces page link
    new HtmlWebpackPlugin({
      hash: true,

      template: './src/reactBasics.html',
      filename: './reactBasics.html',
      chunks: ['reactBasics']
    }),
    new HtmlWebpackPlugin({
      hash: true,

      template: './src/open.html',
      filename: './open.html',
      chunks: ['open', 'header', 'footer']
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

    // Typeface page link
    new HtmlWebpackPlugin({
      hash: true,
      template: './src/library/rework.html',
      filename: './library/rework.html',
      chunks: ['rework', 'header', 'footer']
    }),
    new HtmlWebpackPlugin({
      hash: true,
      template: './src/library/ptSans.html',
      filename: './library/ptSans.html',
      chunks: ['rework', 'header', 'footer']
    }),
    new HtmlWebpackPlugin({
      hash: true,
      template: './src/library/ebGaramond.html',
      filename: './library/ebGaramond.html',
      chunks: ['rework', 'header', 'footer']
    }),
    new HtmlWebpackPlugin({
      hash: true,
      template: './src/library/comissioner.html',
      filename: './library/comissioner.html',
      chunks: ['rework', 'header', 'footer']
    }),
    new HtmlWebpackPlugin({
      hash: true,
      template: './src/library/manrope.html',
      filename: './library/manrope.html',
      chunks: ['rework', 'header', 'footer']
    }),
    new HtmlWebpackPlugin({
      hash: true,
      template: './src/library/montserrat.html',
      filename: './library/montserrat.html',
      chunks: ['rework', 'header', 'footer']
    }),
    new HtmlWebpackPlugin({
      hash: true,
      template: './src/library/raleway.html',
      filename: './library/raleway.html',
      chunks: ['rework', 'header', 'footer']
    }),
    new HtmlWebpackPlugin({
      hash: true,
      template: './src/library/rubik.html',
      filename: './library/rubik.html',
      chunks: ['rework', 'header', 'footer']
    }),
    new HtmlWebpackPlugin({
      hash: true,
      template: './src/library/openSans.html',
      filename: './library/openSans.html',
      chunks: ['rework', 'header', 'footer']
    }),
    new HtmlWebpackPlugin({
      hash: true,
      template: './src/library/merriweather.html',
      filename: './library/merriweather.html',
      chunks: ['rework', 'header', 'footer']
    }),
    new HtmlWebpackPlugin({
      hash: true,
      template: './src/library/inter.html',
      filename: './library/inter.html',
      chunks: ['rework', 'header', 'footer']
    }),
    new HtmlWebpackPlugin({
      hash: true,
      template: './src/library/firaSans.html',
      filename: './library/firaSans.html',
      chunks: ['rework', 'header', 'footer']
    }),
    new HtmlWebpackPlugin({
      hash: true,
      template: './src/library/bodoni.html',
      filename: './library/bodoni.html',
      chunks: ['rework', 'header', 'footer']
    }),
    new HtmlWebpackPlugin({
      hash: true,
      template: './src/library/spectral.html',
      filename: './library/spectral.html',
      chunks: ['rework', 'header', 'footer']
    }),

    new HtmlWebpackPlugin({
      hash: true,

      template: './src/library/roboto.html',
      filename: './library/roboto.html',
      chunks: ['fontArticle']
    }),

    // new HtmlWebpackPlugin({
    //   hash: true,

    //   template: './src/library/ptsans.html',
    //   filename: './library/ptsans.html',
    //   chunks: ['fontArticle']
    // }),

    new HtmlWebpackPlugin({
      hash: true,

      template: './src/library.html',
      filename: './library.html',
      chunks: ['library', 'header', 'footer']
    }),
    new HtmlWebpackPlugin({
      hash: true,

      template: './src/library/playfairDisplay.html',
      filename: './library/playfairDisplay.html',
      chunks: ['rework', 'header', 'footer']
    }),
    new HtmlWebpackPlugin({
      hash: true,

      template: './src/library/akzidenzGrotesk.html',
      filename: './library/akzidenzGrotesk.html',
      chunks: ['rework', 'header', 'footer']
    }),
    new HtmlWebpackPlugin({
      hash: true,

      template: './src/library/20kopeek.html',
      filename: './library/20kopeek.html',
      chunks: ['rework', 'header', 'footer']
    }),
    new HtmlWebpackPlugin({
      hash: true,

      template: './src/library/21cent.html',
      filename: './library/21cent.html',
      chunks: ['rework', 'header', 'footer']
    }),
    new HtmlWebpackPlugin({
      hash: true,

      template: './src/library/basebloom.html',
      filename: './library/basebloom.html',
      chunks: ['rework', 'header', 'footer']
    }),
    new HtmlWebpackPlugin({
      hash: true,

      template: './src/library/bebasNeue.html',
      filename: './library/bebasNeue.html',
      chunks: ['rework', 'header', 'footer']
    }),
    new HtmlWebpackPlugin({
      hash: true,

      template: './src/library/charter.html',
      filename: './library/charter.html',
      chunks: ['rework', 'header', 'footer']
    }),
    new HtmlWebpackPlugin({
      hash: true,

      template: './src/library/geometria.html',
      filename: './library/geometria.html',
      chunks: ['rework', 'header', 'footer']
    }),
    new HtmlWebpackPlugin({
      hash: true,

      template: './src/library/itcFranklin.html',
      filename: './library/itcFranklin.html',
      chunks: ['rework', 'header', 'footer']
    }),
    new HtmlWebpackPlugin({
      hash: true,

      template: './src/library/museoSans.html',
      filename: './library/museoSans.html',
      chunks: ['rework', 'header', 'footer']
    }),
    new HtmlWebpackPlugin({
      hash: true,

      template: './src/library/nunitoSans.html',
      filename: './library/nunitoSans.html',
      chunks: ['rework', 'header', 'footer']
    }),
    new HtmlWebpackPlugin({
      hash: true,

      template: './src/library/oldStandart.html',
      filename: './library/oldStandart.html',
      chunks: ['rework', 'header', 'footer']
    }),
    new HtmlWebpackPlugin({
      hash: true,

      template: './src/library/podkova.html',
      filename: './library/podkova.html',
      chunks: ['rework', 'header', 'footer']
    }),
    new HtmlWebpackPlugin({
      hash: true,

      template: './src/library/comissioner.html',
      filename: './library/comissioner.html',
      chunks: ['rework', 'header', 'footer']
    }),
    new HtmlWebpackPlugin({
      hash: true,

      template: './src/library/saint.html',
      filename: './library/saint.html',
      chunks: ['rework', 'header', 'footer']
    }),
    new HtmlWebpackPlugin({
      hash: true,

      template: './src/journal.html',
      filename: './journal.html',
      chunks: ['journal', 'header', 'footer']
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
        path: path.join(__dirname, './src/partials/O_Footer.html'),
        location: 'O_Footer',
        template_filename: '*',
        priority: 'replace'
      }
    ]),
    new HtmlWebpackPartialsPlugin([
      {
        path: path.join(__dirname, './src/partials/analytics.html'),
        location: 'analytics',
        template_filename: '*',
        priority: 'replace'
      }
    ]),
    new HtmlWebpackPartialsPlugin([
      {
        path: path.join(__dirname, './src/partials/O_Header.html'),
        location: 'O_Header',
        template_filename: '*',
        priority: 'replace'
      }
    ])
  ],
  optimization: {
    minimizer: [new CssMinimizerPlugin()]
  }
}
