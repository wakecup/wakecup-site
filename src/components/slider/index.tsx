import React from 'react';
import Img from 'gatsby-image';
import { StaticQuery, graphql } from 'gatsby';
import Fade from 'react-reveal/Fade';

/* eslint-disable import/no-unresolved */
import { SliderWrapper } from './styles';

interface Props {
  title: string;
  subtitle: string;
}

const Slider = ({ title, subtitle }: Props): JSX.Element => {
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
        <Img
          className="imageBack"
          fluid={data.file.childImageSharp.fluid}
          imgStyle={{ objectFit: 'cover' }}
        />
      )}
    />
  );

  return (
    <SliderWrapper>
      <div className="imageContainer">{Image()}</div>
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
};

export default Slider;
