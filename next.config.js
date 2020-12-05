require('dotenv').config();

const config = {
  env: {
    API: process.env.API,
    STATIC: process.env.STATIC,
    PAYMENT_SIGNATURE: process.env.PAYMENT_SIGNATURE,
    PAYMENT_ID: process.env.PAYMENT_ID,
  },
  webpack: (config) => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty',
    };

    config.module.rules = [
      ...config.module.rules,
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff',
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader',
      },
    ];

    return config;
  },
};

const withCSS = require('@zeit/next-css');

module.exports = withCSS(config);
