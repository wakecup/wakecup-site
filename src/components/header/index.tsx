import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { InternalLink } from '../link';
import MobileHeader from '../mobileHeader';
import Flag from '../flag';

// Styled components
import { HeaderContainer } from './styles';

type GetLangItem = {
  langKey: 'en' | 'pt';
  selected: boolean;
  link: string;
};

interface Props {
  langs: Array<GetLangItem>;
  currentLang: 'en' | 'pt';
}

const Header = ({ langs, currentLang }: Props): JSX.Element => {
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
      render={data => (
        <div>
          <Img fluid={data.file.childImageSharp.fluid} />
        </div>
      )}
    />
  );

  const selectLanguage = () => {
    const links = langs.map(lang => (
      <InternalLink
        key={lang.langKey}
        partiallyActive={lang.selected}
        to={lang.link}
        className="language"
      >
        <Flag type={lang.langKey} active={lang.selected} />
      </InternalLink>
    ));

    return <ul className="languageWrapper">{links}</ul>;
  };

  const currentPath = window.location.pathname;

  return (
    <HeaderContainer>
      <div className="container">
        <div className="imageContainer">{Image()}</div>
        <div className="linkContainer">
          <div className="internalLinkContainer">
            <InternalLink
              to={currentLang === 'en' ? '/' : `/${currentLang}`}
              partiallyActive={currentPath === '/pt/'}
            >
              Home
            </InternalLink>
          </div>
          {selectLanguage()}
        </div>
        <MobileHeader currentLang={currentLang} languages={selectLanguage()} />
      </div>
    </HeaderContainer>
  );
};

export default Header;
