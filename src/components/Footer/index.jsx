import React from 'react';
import PropTypes from 'prop-types';

// Components
import FooterComponents from './components';

const Footer = ({ children }) => (
  <FooterComponents.FooterWrapper>
    <div>Link 1, link 2, link 3</div>
    <FooterComponents.Copyright>{children}</FooterComponents.Copyright>
  </FooterComponents.FooterWrapper>
);

Footer.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default Footer;
