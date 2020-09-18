import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { HomeWrapper, SectionContent } from './styles';
import LayoutWrapper from '../../layoutWrapper';
import { SEO } from '../../SEO';
import Slider from '../../slider';

// Icons
import SocialMediaPresenceIcon from '../../../images/social-media-presence.svg';
import SocialMediaIcon from '../../../images/social-media-mkt.svg';
import UuxIcon from '../../../images/uux.svg';
import StrategyAnalysisIcon from '../../../images/strategy-analysis.svg';
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

  const renderSectionInfo = (
    title: string,
    description: string,
    isMirror = false,
    image: JSX.Element | null = null
  ) => (
    <SectionContent isOdd={isMirror}>
      {image}
      <div className="infoWrapper">
        <h4>{title}</h4>
        {/* <div className={className}>{icon}</div> */}
        <p>{description}</p>
      </div>
    </SectionContent>
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
          {renderSectionInfo(
            i18n.serviceTitle1,
            i18n.serviceDescription1,
            false,
            <img
              src={SocialMediaPhoto}
              alt="Social media - https://pixabay.com/illustrations/social-media-scrabble-social-5217024/"
            />
          )}
          {renderSectionInfo(
            i18n.serviceTitle2,
            i18n.serviceDescription2,
            true,
            <img
              src={WebsiteDevelopmentPhoto}
              alt="Website development - https://pixabay.com/photos/code-html-digital-coding-web-1076533/"
            />
          )}
          {renderSectionInfo(
            i18n.serviceTitle3,
            i18n.serviceDescription3,
            false,
            <img
              src={DigitalMarketingPhoto}
              alt="Digital Marketing - https://pixabay.com/photos/digital-marketing-technology-1433427/"
            />
          )}
          {renderSectionInfo(
            i18n.serviceTitle4,
            i18n.serviceDescription4,
            true,
            <img
              src={SeoContentPhoto}
              alt="SEO - https://pixabay.com/photos/internet-search-engine-laptop-1519471/"
            />
          )}
          {renderSectionInfo(
            i18n.serviceTitle5,
            i18n.serviceDescription5,
            false,
            <img
              src={EmailMarketingPhoto}
              alt="Email marketing - https://unsplash.com/photos/EvX8-J2ClMo"
            />
          )}
          {renderSectionInfo(
            i18n.serviceTitle6,
            i18n.serviceDescription6,
            true,
            <img
              src={PublicRelationsPhoto}
              alt="Public Relations - https://pixabay.com/photos/microphone-active-talk-conference-704255/"
            />
          )}
        </div>
      </HomeWrapper>
    </LayoutWrapper>
  );
};

export default IndexPage;
