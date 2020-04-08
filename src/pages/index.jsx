import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Layout } from '@components/Layout';
import { SEO } from '@components/SEO';
import Slider from '@components/Slider';
import IndexComponents from '@components/PageComponents';

const IndexPage = () => {
  const Image = () => (
    <StaticQuery
      query={graphql`
        query {
          file(relativePath: { eq: "about-us.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 420, quality: 80) {
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
    <Layout>
      <SEO />
      <Slider />
      <IndexComponents.SectionIntro>
        <IndexComponents.SectionAboutUsWrapper>
          <IndexComponents.SectionTitle>About us</IndexComponents.SectionTitle>
          <IndexComponents.SectionAboutUsP>
            Wake Cup! Digital Marketing is the responsible enterprise to integrate your company in
            digital world to expand your business in a innovative, creative and singular way.
          </IndexComponents.SectionAboutUsP>
        </IndexComponents.SectionAboutUsWrapper>
        <IndexComponents.SectionAboutUsImg>{Image()}</IndexComponents.SectionAboutUsImg>
      </IndexComponents.SectionIntro>
    </Layout>
  );
};

export default IndexPage;
