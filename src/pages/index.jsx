import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Layout } from '@components/Layout';
import { SEO } from '@components/SEO';
import Slider from '@components/Slider';
import IndexComponents from '@components/PageComponents';

// Icons
import SocialMediaPresenceIcon from '../images/social-media-presence.svg';
import SocialMediaIcon from '../images/social-media-mkt.svg';
import UuxIcon from '../images/uux.svg';
import StrategyAnalysisIcon from '../images/strategy-analysis.svg';

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
      <IndexComponents.Section>
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
      </IndexComponents.Section>
      <IndexComponents.Section>
        <IndexComponents.SectionTitle>Services</IndexComponents.SectionTitle>
        <div>
          <h4>Digital Marketing</h4>
          <IndexComponents.SectionInfoWrapper>
            <IndexComponents.DigitalMktIconWrapper>
              <SocialMediaIcon />
            </IndexComponents.DigitalMktIconWrapper>
            <p>Lorem ipsum bla bla bla</p>
          </IndexComponents.SectionInfoWrapper>
        </div>
        <div>
          <h4>Website Design and Development</h4>
          <IndexComponents.SectionInfoMirroredWrapper>
            <IndexComponents.UiIconWrapper>
              <UuxIcon />
            </IndexComponents.UiIconWrapper>
            <p>
              Analysis of your website, using a SEO audit to meet the requirements for a higher user
              experience
            </p>
          </IndexComponents.SectionInfoMirroredWrapper>
        </div>
        <div>
          <h4>Social Media Presence</h4>
          <IndexComponents.SectionInfoWrapper>
            <IndexComponents.SocialMediaIconWrapper>
              <SocialMediaPresenceIcon />
            </IndexComponents.SocialMediaIconWrapper>
            <p>
              Ensuring that your brand target is aligned to your business on Facebook, Instagram
            </p>
          </IndexComponents.SectionInfoWrapper>
        </div>
        <div>
          <h4>Digital Strategy</h4>
          <IndexComponents.SectionInfoMirroredWrapper>
            <IndexComponents.StrategyIconWrapper>
              <StrategyAnalysisIcon />
            </IndexComponents.StrategyIconWrapper>
            <p>
              The foundation to boost your ROI, ensuring the right decisions are made and the right
              channels used to meet your goals.
            </p>
          </IndexComponents.SectionInfoMirroredWrapper>
        </div>
      </IndexComponents.Section>
    </Layout>
  );
};

export default IndexPage;
