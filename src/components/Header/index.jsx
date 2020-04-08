import React from 'react';
// import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Link } from '@components/Link';

// Styled components
import HeaderComponents from './components';

const Header = () => {
  const Image = () => (
    <StaticQuery
      query={graphql`
        query {
          file(relativePath: { eq: "logo.png" }) {
            childImageSharp {
              fluid(maxWidth: 254, maxHeight: 80) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
      `}
      render={data => <Img height="80" fluid={data.file.childImageSharp.fluid} />}
    />
  );

  return (
    <HeaderComponents.Header>
      <HeaderComponents.HeaderContainer>
        <HeaderComponents.ImageContainer>{Image()}</HeaderComponents.ImageContainer>
        <HeaderComponents.LinkContainer>
          <Link to="/">Home</Link>
        </HeaderComponents.LinkContainer>
      </HeaderComponents.HeaderContainer>
    </HeaderComponents.Header>
  );
};

export default Header;
