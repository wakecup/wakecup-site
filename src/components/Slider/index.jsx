import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import SliderComponents from './components';

function Slider() {
  const Image = () => (
    <StaticQuery
      query={graphql`
        query {
          file(relativePath: { eq: "consultancy-digital-marketing.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1000, quality: 85) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
      `}
      render={data => <Img fluid={data.file.childImageSharp.fluid} />}
    />
  );

  return (
    <SliderComponents.SliderWrapper>
      {Image()}
      <SliderComponents.TextContainer>
        <SliderComponents.H1Slider>DIGITAL MARKETING CONSULTANCY</SliderComponents.H1Slider>
        <SliderComponents.H2Slider>
          Oriented about innovation and passionate about connectivity. We are specialists to deliver
          the best solutions in Digital Marketing to all our clients.
        </SliderComponents.H2Slider>
      </SliderComponents.TextContainer>
    </SliderComponents.SliderWrapper>
  );
}

export default Slider;
