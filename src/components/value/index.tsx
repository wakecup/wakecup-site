import React from 'react';
import { FaHandsHelping, FaHeart, FaLightbulb, FaFileContract } from 'react-icons/fa';

import { Container } from './styles';

const iconSize = 40;

const icons = {
  brotherly: <FaHandsHelping size={iconSize} />,
  purpose: <FaFileContract size={iconSize} />,
  passion: <FaHeart size={iconSize} />,
  innovation: <FaLightbulb size={iconSize} />,
};

interface Props {
  icon: 'brotherly' | 'purpose' | 'passion' | 'innovation';
  title: string;
  description: string;
}

const Value: React.FC<Props> = ({ icon, title, description }) => (
  <Container>
    <strong>
      {icons[icon]} {title}
    </strong>
    <p>{description}</p>
  </Container>
);

export default Value;
