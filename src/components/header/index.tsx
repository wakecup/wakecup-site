import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { InternalLink } from '../link';

// Styled components
import { HeaderContainer } from './styles';

type GetLangItem = {
  langKey: string;
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
        <div style={{ height: 80 }}>
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
        <li>{lang.langKey}</li>
      </InternalLink>
    ));

    return <ul className="languageWrapper">{links}</ul>;
  };

  return (
    <HeaderContainer>
      <div className="container">
        <div className="imageContainer">{Image()}</div>
        <div className="linkContainer">
          <InternalLink to={currentLang === 'en' ? '/' : `/${currentLang}`}>Home</InternalLink>
        </div>
        {selectLanguage()}
      </div>
    </HeaderContainer>
  );
};

export default Header;
