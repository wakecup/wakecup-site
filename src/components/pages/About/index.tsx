import React from 'react';

import Contact from '../../contact';
import LayoutWrapper from '../../layoutWrapper';
import { SEO } from '../../SEO';
import TeamMember from '../../teamMember';

import { AboutContainer, SectionContainer } from './styles';

interface TeamProps {
  key: string;
  name: string;
  title: string;
  quote: string;
  about: string;
  picture: string;
  linkedin?: string;
}

interface Props {
  i18n: {
    title: string;
    ourdna: string;
    proposal: string;
    ourMission: string;
    missionText: string;
    missionText2: string;
    coreTeam: string;
    team: TeamProps[];
  };
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

      {/* <ValuesContainer>
        <h2>Our core values</h2>
        <strong>Brotherly</strong>
        <p>
          TEAM - WORKING WITH PROPOSAL. RAISING TOGETHER. WE ARE PROUD TO RESPECT THE WORK LIFE
          INTEGRATION.
        </p>
        <strong>Brotherly</strong>
        <p>
          TEAM - WORKING WITH PROPOSAL. RAISING TOGETHER. WE ARE PROUD TO RESPECT THE WORK LIFE
          INTEGRATION.
        </p>
        <strong>Brotherly</strong>
        <p>
          TEAM - WORKING WITH PROPOSAL. RAISING TOGETHER. WE ARE PROUD TO RESPECT THE WORK LIFE
          INTEGRATION.
        </p>
      </ValuesContainer> */}

      <Contact place="about" />
    </AboutContainer>
  </LayoutWrapper>
);

export default About;
