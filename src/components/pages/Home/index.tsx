import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { HomeWrapper } from './styles';
import LayoutWrapper from '../../layoutWrapper';
import { SEO } from '../../SEO';
import Slider from '../../slider';

// Icons
import SocialMediaPresenceIcon from '../../../images/social-media-presence.svg';
import SocialMediaIcon from '../../../images/social-media-mkt.svg';
import UuxIcon from '../../../images/uux.svg';
import StrategyAnalysisIcon from '../../../images/strategy-analysis.svg';

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
    className: string,
    icon: JSX.Element,
    description: string,
    isMirror = false
  ) => (
    <div>
      <h4>{title}</h4>
      <div className={isMirror ? 'infoMirroredWrapper' : 'infoWrapper'}>
        <div className={className}>{icon}</div>
        <p>{description}</p>
      </div>
    </div>
  );

  return (
    <LayoutWrapper>
      <SEO />
      <Slider title={i18n.sliderTitle} subtitle={i18n.sliderSubTitle} />
      <HomeWrapper>
        <section className="section">
          <div className="sectionIntro">
            <div className="aboutUsWrapper">
              <h3 className="sectionTitle">{i18n.dna}</h3>
              <p className="paragraph">{i18n.dnaDescription}</p>
              <h3 className="sectionTitle">{i18n.mission}</h3>
              <p className="paragraph">{i18n.missionDescription}</p>
            </div>
            <div className="imgAboutUs">{Image()}</div>
          </div>
        </section>
        <section className="section">
          <h3 className="sectionTitle">{i18n.services}</h3>
          {renderSectionInfo(
            i18n.serviceTitle1,
            'digitalMktIcon',
            <SocialMediaIcon />,
            i18n.serviceDescription1
          )}
          {renderSectionInfo(
            i18n.serviceTitle2,
            'uiIcon',
            <UuxIcon />,
            i18n.serviceDescription2,
            true
          )}
          {renderSectionInfo(
            i18n.serviceTitle3,
            'socialMediaIcon',
            <SocialMediaPresenceIcon />,
            i18n.serviceDescription3
          )}
          {renderSectionInfo(
            i18n.serviceTitle4,
            'strategyIcon',
            <StrategyAnalysisIcon />,
            i18n.serviceDescription4,
            true
          )}
          {renderSectionInfo(
            i18n.serviceTitle5,
            'socialMediaIcon',
            <SocialMediaPresenceIcon />,
            i18n.serviceDescription5
          )}
          {renderSectionInfo(
            i18n.serviceTitle6,
            'strategyIcon',
            <StrategyAnalysisIcon />,
            i18n.serviceDescription6,
            true
          )}
        </section>
      </HomeWrapper>
    </LayoutWrapper>
  );
};

export default IndexPage;
