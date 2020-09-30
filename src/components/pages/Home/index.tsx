import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import LayoutWrapper from '../../layoutWrapper';
import { SEO } from '../../SEO';
import Slider from '../../slider';
import SectionPicture from '../../sectionPicture';
import Contact from '../../contact';

// Assets
import { HomeWrapper } from './styles';
import SocialMediaPhoto from '../../../images/social-media.jpg';
import WebsiteDevelopmentPhoto from '../../../images/website-development.jpg';
import DigitalMarketingPhoto from '../../../images/digital-marketing.jpg';
import SeoContentPhoto from '../../../images/seo-content.jpg';
import EmailMarketingPhoto from '../../../images/email-marketing.jpg';
import PublicRelationsPhoto from '../../../images/public-relations.jpg';

interface IndexProps {
  i18n: {
    dna: string;
    dnaDescription: string;
    mission: string;
    missionDescription: string;
    sliderTitle: string;
    sliderSubTitle: string;
    services: string;
    serviceTitle1: string;
    serviceDescription1: string;
    serviceTitle2: string;
    serviceDescription2: string;
    serviceTitle3: string;
    serviceDescription3: string;
    serviceTitle4: string;
    serviceDescription4: string;
    serviceTitle5: string;
    serviceDescription5: string;
    serviceTitle6: string;
    serviceDescription6: string;
  };
}

const IndexPage = ({ i18n }: IndexProps): React.ReactElement => {
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
    <LayoutWrapper>
      <SEO />
      <Slider title={i18n.sliderTitle} subtitle={i18n.sliderSubTitle} />
      <HomeWrapper>
        <div className="section">
          <div className="sectionIntro">
            <div className="aboutUsWrapper">
              <h3 className="sectionTitle">{i18n.dna}</h3>
              <p className="paragraph">{i18n.dnaDescription}</p>
              <h3 className="sectionTitle">{i18n.mission}</h3>
              <p className="paragraph">{i18n.missionDescription}</p>
            </div>
            <div className="imgAboutUs">{Image()}</div>
          </div>
        </div>
        <div>
          <SectionPicture
            image={
              <img
                src={SocialMediaPhoto}
                alt="Social media - https://pixabay.com/illustrations/social-media-scrabble-social-5217024/"
              />
            }
            title={i18n.serviceTitle1}
            description={i18n.serviceDescription1}
          />
          <SectionPicture
            image={
              <img
                src={WebsiteDevelopmentPhoto}
                alt="Website development - https://pixabay.com/photos/code-html-digital-coding-web-1076533/"
              />
            }
            title={i18n.serviceTitle2}
            description={i18n.serviceDescription2}
            isMirror
          />
          <SectionPicture
            image={
              <img
                src={DigitalMarketingPhoto}
                alt="Digital Marketing - https://pixabay.com/photos/digital-marketing-technology-1433427/"
              />
            }
            title={i18n.serviceTitle3}
            description={i18n.serviceDescription3}
          />
          <SectionPicture
            image={
              <img
                src={SeoContentPhoto}
                alt="SEO - https://pixabay.com/photos/internet-search-engine-laptop-1519471/"
              />
            }
            title={i18n.serviceTitle4}
            description={i18n.serviceDescription4}
            isMirror
          />
          <SectionPicture
            image={
              <img
                src={EmailMarketingPhoto}
                alt="Email marketing - https://unsplash.com/photos/EvX8-J2ClMo"
              />
            }
            title={i18n.serviceTitle5}
            description={i18n.serviceDescription5}
          />
          <SectionPicture
            image={
              <img
                src={PublicRelationsPhoto}
                alt="Public Relations - https://pixabay.com/photos/microphone-active-talk-conference-704255/"
              />
            }
            title={i18n.serviceTitle6}
            description={i18n.serviceDescription6}
            isMirror
          />
        </div>
      </HomeWrapper>
      <Contact />
    </LayoutWrapper>
  );
};

export default IndexPage;
