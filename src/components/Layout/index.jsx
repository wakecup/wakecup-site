import React from 'react';
import PropTypes from 'prop-types';

import Header from '@components/Header';
import Footer from '@components/Footer';

// Styles
import GlobalStyles from '@style/GlobalStyles';
import { ThemeProvider, theme } from '@style';

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyles />
      <Header />
      {children}
      <Footer>2020 Wake Cup! Digital Marketing. All rights reserved.</Footer>
    </>
  </ThemeProvider>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export { Layout };
