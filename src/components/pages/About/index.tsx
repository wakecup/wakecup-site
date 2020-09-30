import React from 'react';

import Contact from '../../contact';
import LayoutWrapper from '../../layoutWrapper';

import { AboutContainer } from './styles';

const About: React.FC = () => (
  <LayoutWrapper>
    <AboutContainer>
      <h1>About us</h1>

      <Contact place="about" />
    </AboutContainer>
  </LayoutWrapper>
);

export default About;
