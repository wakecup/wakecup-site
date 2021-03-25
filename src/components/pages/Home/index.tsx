import React from 'react';
import { Link } from 'gatsby';

import LayoutWrapper from '../../layoutWrapper';
import { SEO } from '../../SEO';
import Slider from '../../slider';
import SectionPicture from '../../sectionPicture';

// Assets
import { ContactSection, HomeWrapper } from './styles';

interface i18nProps extends Record<string, string> {
  lang: 'pt' | 'en';
}

interface IndexProps {
  i18n: i18nProps;
  data: HomeData;
}

const IndexPage: React.FC<IndexProps> = ({ data, i18n }) => (
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
        </div>
      </div>
      <div>
        <SectionPicture
          image={data.image1.childImageSharp.gatsbyImageData}
          alt="Social media - https://pixabay.com/illustrations/social-media-scrabble-social-5217024/"
          title={i18n.serviceTitle1}
          description={i18n.serviceDescription1}
        />
        <SectionPicture
          image={data.image2.childImageSharp.gatsbyImageData}
          alt="Website development - https://pixabay.com/photos/code-html-digital-coding-web-1076533/"
          title={i18n.serviceTitle2}
          description={i18n.serviceDescription2}
          isMirror
        />
        <SectionPicture
          image={data.image3.childImageSharp.gatsbyImageData}
          alt="Digital Marketing - https://pixabay.com/photos/digital-marketing-technology-1433427/"
          title={i18n.serviceTitle3}
          description={i18n.serviceDescription3}
        />
        <SectionPicture
          image={data.image4.childImageSharp.gatsbyImageData}
          alt="SEO - https://pixabay.com/photos/internet-search-engine-laptop-1519471/"
          title={i18n.serviceTitle4}
          description={i18n.serviceDescription4}
          isMirror
        />
        <SectionPicture
          image={data.image5.childImageSharp.gatsbyImageData}
          alt="Email marketing - https://unsplash.com/photos/EvX8-J2ClMo"
          title={i18n.serviceTitle5}
          description={i18n.serviceDescription5}
        />
        <SectionPicture
          image={data.image6.childImageSharp.gatsbyImageData}
          alt="Public Relations - https://pixabay.com/photos/microphone-active-talk-conference-704255/"
          title={i18n.serviceTitle6}
          description={i18n.serviceDescription6}
          isMirror
        />
      </div>
    </HomeWrapper>
    <ContactSection>
      <strong>Want to level up your business? Send us a message!</strong>
      <Link to={i18n.lang === 'en' ? '/contact' : `/${i18n.lang}/contact`}>Contact</Link>
    </ContactSection>
  </LayoutWrapper>
);

export default IndexPage;
