import React, { ReactElement } from 'react';

import About from '../components/pages/About';

import AmandaPic from '../assets/images/amandamachado.jpeg';
import GabrielPic from '../assets/images/gabrielmaia.jpeg';

const i18n: i18nAboutProps = {
  lang: 'pt',
  title: 'Sobre nós',
  ourdna: 'Nosso DNA',
  proposal: 'Mais propósito.\nMenos promessas.',
  ourMission: 'Nossa missão',
  missionText:
    'Fundada desde 2017, nossa missão é conectar marcas aos parceiros CERTOS a fim de fornecer uma abordagem customizada e projetada, combinando estratégia de marketing, gestão de mídias sociais, desenvolvimento de software, comunicação e relações públicas.',
  missionText2:
    'Nosso compromisso é oferecer soluções de ponta a ponta para negócios que buscam crescimento.',
  coreTeam: 'Nosso time',
  team: [
    {
      key: 'amanda',
      name: 'Amanda Machado',
      title: 'Co-founder & CEO',
      quote:
        'Todos os dias passo quase 10 horas do meu dia pensando em Marketing Digital e não é nenhum sacrifício, eu amo o que faço',
      about:
        'Amanda é especialista em comunicação e marketing com 10 anos de experiência. Com passagens em multinacionais do setor editorial, de tecnologia e petrolífero, uniu sua paixão pelo marketing digital à sua sólida experiência no mercado e criou a WakeCup Digital Marketing com o objetivo de alavancar pequenos e médios negócios no mundo digital.\n\nOrientada por uma veia comunicativa e criativa, possui cases e o título de Expert na gestão mídias sociais e comunicação.',
      picture: AmandaPic,
      linkedin: 'https://www.linkedin.com/in/amandamachadomaia',
    },
    {
      key: 'gabriel',
      name: 'Gabriel Maia',
      title: 'Co-founder & CTO',
      quote:
        'Quando descobri que para ser um desenvolvedor deveria aprender constantemente, percebi que estava no caminho certo.',
      about:
        'Gabriel é um desenvolvedor autodidata com habilidades em React e React Native, usando Redux, Gatsby, SASS, Expo, Node, TypeScript e Python.\n\nSua busca por desafios sempre o impulsionou a aprender algo novo, o que contribuiu positivamente para o seu crescimento profissional na área de TI.\nTem em seu portfólio o desenvolvimento e a criação de sites e de aplicativos para grandes marcas do setor de eventos e de streaming.',
      picture: GabrielPic,
      linkedin: 'https://www.linkedin.com/in/gabrielmaiaf',
    },
  ],
  values: [
    {
      key: 'brotherly',
      title: 'Irmandade',
      description:
        'Somos um time - trabalhando com propósito.\nCrescendo juntos.\nTemos orgulho de respoeitar a integração da vida ao trabalho.',
    },
    {
      key: 'proposal',
      title: 'Objetivo',
      description:
        'Clientes - não são apenas clientes,\nsão parte da nossa equipe.\nSomos seus maiores fãs.',
    },
    {
      key: 'passion',
      title: 'Paixão',
      description:
        'Por resultados - proporcionar crescimento\npor meio do nosso trabalho.\nDesenvolver ações que agreguem valor.\nGerar bons negócios aos nossos clientes.',
    },
    {
      key: 'innovation',
      title: 'Inovação',
      description:
        'Sempre aprendendo e ensinando\nninguém sabe tudo.\nPodemos ajudar uns aos outros.',
    },
  ],
};

export default (): ReactElement => <About i18n={i18n} />;
