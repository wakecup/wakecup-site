import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Fade from 'react-reveal/Fade';

import { SliderWrapper } from './styles';

interface Props {
  title: string;
  subtitle: string;
}

const Slider: React.FC<Props> = ({ title, subtitle }) => (
  <SliderWrapper>
    <StaticImage
      src="../../assets/images/consultancy-digital-marketing.jpg"
      className="imageContainer"
      imgClassName="imageBack"
      alt="Wakecup are open for business"
    />
    <div className="textContainer">
      <h1 className="title">
        <Fade bottom>{title}</Fade>
      </h1>
      <h2 className="subtitle">
        <Fade bottom>{subtitle}</Fade>
      </h2>
    </div>
  </SliderWrapper>
);

export default Slider;
