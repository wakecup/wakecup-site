import React from 'react';
import { FaLinkedinIn } from 'react-icons/fa';

import { OutboundLink } from '../link';

import { Container } from './styles';

interface Props {
  name: string;
  title: string;
  quote: string;
  about: string;
  picture: string;
  linkedin?: string;
}

const TeamMember: React.FC<Props> = ({ name, picture, title, quote, about, linkedin }) => (
  <Container>
    <header>
      <img src={picture} alt={name} />
      <strong>{name}</strong>
      <em>{title}</em>
      <span>
        {linkedin && (
          <OutboundLink to={linkedin} from="about-us">
            <FaLinkedinIn size={18} />
          </OutboundLink>
        )}
      </span>
    </header>
    <div>
      <blockquote>{quote}</blockquote>
      <p className="about">{about}</p>
    </div>
  </Container>
);

export default TeamMember;
