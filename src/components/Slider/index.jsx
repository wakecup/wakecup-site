import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Fade from 'react-reveal/Fade';

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
        <SliderComponents.H1Slider>
          <Fade bottom cascade>
            Raise your business: become digital!
          </Fade>
        </SliderComponents.H1Slider>
        <SliderComponents.H2Slider>
          <Fade bottom>
            This is the very right moment to having a digital presence: migrating your sales to
            online, creating greater proximity to your audience and preparing for the post-crisis.
          </Fade>
        </SliderComponents.H2Slider>
      </SliderComponents.TextContainer>
    </SliderComponents.SliderWrapper>
  );
}

export default Slider;
