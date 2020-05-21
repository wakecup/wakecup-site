import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Fade from 'react-reveal/Fade';

import {
  StyledImage,
  SliderWrapper,
  ImageContainer,
  TextContainer,
  H1Slider,
  H2Slider,
} from './components';

function Slider() {
  const Image = () => (
    <StaticQuery
      query={graphql`
        query {
          file(relativePath: { eq: "consultancy-digital-marketing.jpg" }) {
            childImageSharp {
              fluid(maxHeight: 900, quality: 85) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
      `}
      render={data => (
        <StyledImage fluid={data.file.childImageSharp.fluid} imgStyle={{ objectFit: 'cover' }} />
      )}
    />
  );

  return (
    <SliderWrapper>
      <ImageContainer>{Image()}</ImageContainer>
      <TextContainer>
        <H1Slider>
          <Fade bottom>Raise your business: become digital!</Fade>
        </H1Slider>
        <H2Slider>
          <Fade bottom>
            This is the very right moment to having a digital presence: migrating your sales to
            online, creating greater proximity to your audience and preparing for the post-crisis.
          </Fade>
        </H2Slider>
      </TextContainer>
    </SliderWrapper>
  );
}

export default Slider;
