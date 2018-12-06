import ExtractTextPlugin from 'extract-text-webpack-plugin';
import React from 'react';

import homeData from './src/content/home';

export default {
  siteRoot: 'https://stone.codes',
  Document: ({
    Html, Head, Body, children,
  }) => (
    <Html lang="en-US">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Stone Code Productions</title>
      </Head>
      <Body>{children}</Body>
    </Html>
  ),
  getSiteData: () => ({
    siteTitle: 'stone.codes v0.1',
  }),
  getRoutes: async () => [
    {
      path: '/',
      component: 'src/containers/Home',
      getData: () => homeData,
    },
    {
      path: '/roll',
      component: 'src/containers/Dice',
    },
    {
      is404: true,
      component: 'src/containers/404',
    },
  ],
  webpack: (config, { defaultLoaders, stage }) => {
    let loaders = [];

    if (stage === 'dev') {
      loaders = [
        { loader: 'style-loader' },
        { loader: 'css-loader' },
        { loader: 'sass-loader' },
      ];
    } else {
      loaders = [
        {
          loader: 'css-loader',
          options: {
            importLoaders: 1,
            minimize: stage === 'prod',
            sourceMap: false,
          },
        },
        {
          loader: 'sass-loader',
          options: { includePaths: ['src/'] },
        },
      ];

      // Don't extract css to file during node build process
      if (stage !== 'node') {
        loaders = ExtractTextPlugin.extract({
          fallback: {
            loader: 'style-loader',
            options: {
              sourceMap: false,
              hmr: false,
            },
          },
          use: loaders,
        });
      }
    }

    config.module.rules = [
      {
        oneOf: [
          {
            test: /\.s(a|c)ss$/,
            use: loaders,
          },
          defaultLoaders.cssLoader,
          defaultLoaders.jsLoader,
          {
            test: /\.(png|jpg|gif)$/,
            use: [
              {
                loader: 'url-loader',
                options: {},
              },
            ],
          },
          defaultLoaders.fileLoader,
        ],
      },
    ];
    return config;
  },
};
