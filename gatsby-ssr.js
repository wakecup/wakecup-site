/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable react/jsx-filename-extension */
const React = require('react');
const { ThemeProvider, theme } = require('./src/util/style');

exports.wrapPageElement = ({ element }) => {
  return <ThemeProvider theme={theme}>{element}</ThemeProvider>;
};
