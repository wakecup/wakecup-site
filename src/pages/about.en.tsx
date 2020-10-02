import React, { ReactElement } from 'react';

import About from '../components/pages/About';

import AmandaPic from '../assets/images/amandamachado.jpeg';
import GabrielPic from '../assets/images/gabrielmaia.jpeg';

const i18n = {
  title: 'About us',
  ourdna: 'Our DNA',
  proposal: 'More purpose.\nLess promises.',
  ourMission: 'Our mission',
  missionText:
    'Founded since 2017, our mission has been to engage and connect brands to the right partners in order to deliver a customized and engineered approach to growing businesses that combines marketing strategy, social media, communications & PR and software development.',
  missionText2:
    'From awareness to traffic generation to prospect education and finally closing the deal; our engagements are end-to-end solutions for growing businesses.',
  coreTeam: 'Our core team',
  team: [
    {
      key: 'amanda',
      name: 'Amanda Machado',
      title: 'Co-founder & CEO',
      quote:
        "Everyday I take almost 10 hours of my day thinking about Digital Marketing and it isn't any sacrifice, I love what I do.",
      about:
        'Amanda is a T-shaped digital marketing and communications specialist with 10 years’ experience.\n\nGuided  by an extremely communicative and creative vein and a can-do attitude, she’s a social Media Expert and is constantly willing to find new ways to help people and brands to prosper in their business.',
      picture: AmandaPic,
      linkedin: 'https://www.linkedin.com/in/amandamachadomaia',
    },
    {
      key: 'gabriel',
      name: 'Gabriel Maia',
      title: 'Co-founder & CTO',
      quote:
        'When I figured out that to be a developer I should constantly keep learning, I realised I was just on the right way.',
      about:
        'Gabriel is a passionate and self-taught front-end developer skilled in React and React Native, using Redux, Gatsby, SASS, Expo, Node, TypeScript and Python.\n\nHis pursuit of challenges has always pushed him forward to learn something new, even if he had taught himself. This helped him to dare even more building and breaking things, sharpening his skills day by day.',
      picture: GabrielPic,
      linkedin: 'https://www.linkedin.com/in/gabrielmaiaf',
    },
  ],
  values: [
    {
      key: 'brotherly',
      title: 'Brotherly',
      description:
        'Team - working with purpose.\nRaising together.\nWe are proud to respect the work life integration.',
    },
    {
      key: 'purpose',
      title: 'Purpose',
      description: "Clients - not just our clients,\nour team.\nWe're our clients biggests fans.",
    },
    {
      key: 'passion',
      title: 'Passion',
      description: 'Results - data obsessed\nand results driven.',
    },
    {
      key: 'innovation',
      title: 'Innovation',
      description:
        'Always learning and teaching\nNobody knows everything.\nWe can help each other.',
    },
  ],
};

export default (): ReactElement => <About i18n={i18n} />;
