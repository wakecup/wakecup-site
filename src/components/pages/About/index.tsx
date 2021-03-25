import React from 'react';
import { Link } from 'gatsby';

import Value from '../../value';
import LayoutWrapper from '../../layoutWrapper';
import { SEO } from '../../SEO';
import TeamMember from '../../teamMember';

import { AboutContainer, SectionContainer, ValuesContainer } from './styles';
import { ContactSection } from '../Home/styles';

interface Props {
  i18n: i18nAboutProps;
}

const About: React.FC<Props> = ({ i18n }) => (
  <LayoutWrapper>
    <SEO title={i18n.title} />
    <AboutContainer>
      <SectionContainer>
        <h1>{i18n.ourdna}</h1>
        <em>{i18n.proposal}</em>
      </SectionContainer>

      <SectionContainer>
        <h2>{i18n.ourMission}</h2>
        <p>{i18n.missionText}</p>
        <p>{i18n.missionText2}</p>
      </SectionContainer>

      <SectionContainer>
        <h2>{i18n.coreTeam}</h2>
        {i18n.team.map(member => (
          <TeamMember
            key={member.key}
            name={member.name}
            title={member.title}
            quote={member.quote}
            about={member.about}
            picture={member.picture}
            linkedin={member.linkedin}
          />
        ))}
      </SectionContainer>

      <ValuesContainer>
        <h2>Our core values</h2>
        <span>
          {i18n.values.map(value => (
            <Value
              key={value.key}
              icon={value.key as 'brotherly' | 'purpose' | 'passion' | 'innovation'}
              title={value.title}
              description={value.description}
            />
          ))}
        </span>
      </ValuesContainer>

      <ContactSection>
        <strong>Want to level up your business? Send us a message!</strong>
        <Link to={i18n.lang === 'en' ? '/contact' : `/${i18n.lang}/contact`}>Contact</Link>
      </ContactSection>
    </AboutContainer>
  </LayoutWrapper>
);

export default About;
