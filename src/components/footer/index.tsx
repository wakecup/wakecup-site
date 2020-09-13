import React from 'react';

// Components
import { FooterWrapper } from './styles';

const Footer: React.FC = ({ children }) => (
  <FooterWrapper>
    <div>Link 1, link 2, link 3</div>
    <small>{children}</small>
  </FooterWrapper>
);

export default Footer;
