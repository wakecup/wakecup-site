import React, { ReactElement } from 'react';

import Home from '../components/pages/Home';

const i18n: i18nProps = {
  lang: 'pt',
  sliderTitle: 'Envolva sua marca no mundo digital',
  sliderSubTitle:
    'Uma equipe especialista em Marketing Digital, Comunicação e Desenvolvimento com o compromisso de fazer o seu negócio alcançar um novo patamar.',
  dna: 'Nosso DNA',
  dnaDescription: 'MAIS PROPÓSITO. MENOS PROMESSAS',
  mission: 'Nossa missão',
  missionDescription: `Fundada desde 2017, nossa missão é conectar marcas aos parceiros CERTOS a fim de fornecer uma abordagem customizada e projetada, combinando estratégia de marketing, gestão de mídias sociais, desenvolvimento de software, comunicação e relações públicas.`,
  services: 'Serviços',
  serviceTitle1: 'Marketing especializado em mídia social',
  serviceDescription1: `Existem quase três bilhões de usuários de mídia social em todo o mundo. Oferecemos acesso a esses clientes em potencial por meio de serviços de marketing de mídia social de primeira linha. Com nossa ajuda, você pode alcançar, envolver, motivar e influenciar as massas para que se tornem seus clientes.
  Na WakeCup, inspiramos as pessoas a se tornarem os embaixadores de sua marca. Como resultado, isso ajuda a promover e recomendar seus produtos por meio de poderosas campanhas de marketing de mídia social. Nós personalizamos cada campanha, garantindo que você alcance seu público-alvo.`,
  serviceTitle2: 'Design e desenvolvimento de sites',
  serviceDescription2:
    'Atender às expectativas dos nativos digitais complexos e hiperconectados de hoje é essencial para o seu sucesso. Prototipamos sites, aplicativos da Web, interfaces e produtos digitais de alta conversão, projetando UI e UX elegante e construindo propriedades da web premiadas que resolvem os desafios de negócios e crescimento. Nosso processo envolve mais do que apenas pixels bonitos, em vez disso, projetamos interfaces digitais intuitivas com base no comportamento humano. Damos vida a sites complexos, e-commerce e aplicativos em HTML, CSS e Javascript.',
  serviceTitle3: 'Marketing digital',
  serviceDescription3: `ADIVINHE, OS CLIENTES ESTÃO ANSIOSOS PARA TE CONHECER\nCRIE CAMPANHAS ESPECÍFICAS QUE ENGAJAM COM SUA AUDIÊNCIA\nPesquisar é apenas parte da equação. O trabalho de uma marca não termina quando aparecem nos resultados da pesquisa. O poder da pesquisa está no clique. É fundamental que as marcas direcionem as pessoas para um destino que seja útil. Podemos ajudar sua marca a:\n- Ser reconhecida (Branding);\n- Promover engajamento de qualidade e converter clientes.\nE TAMBÉM te ajudamos a identificar:\n- Quem são seus clientes;\n- O que eles estão procurando;\n- Que perguntas eles têm;\n- O que eles esperam de você e da sua marca`,
  serviceTitle4: 'SEO e marketing de conteúdo',
  serviceDescription4: `Nossas campanhas de Search Engine Optimization (SEO) se mantêm atualizadas com os algoritmos de mecanismo de pesquisa mais recentes e são adaptadas às suas necessidades de negócios. Como resultado, ajudamos você a melhorar as classificações e direcionar o tráfego que você pode converter, o que se traduz diretamente em crescimento.\nPráticos e acessíveis, nossos serviços de SEO oferecem o maior retorno sobre o investimento (ROI).`,
  serviceTitle5: 'Banco de dados e marketing por email',
  serviceDescription5: `Com um design lindo e conteúdo envolvente, nossos e-mails recebem uma resposta.\nFique em contato com os clientes existentes ou atraia novos clientes em potencial com nossas atraentes campanhas de marketing por e-mail. Se você precisa de atualizações em tempo real sobre métricas em tempo real e rastreamento de conversão ou apenas uma campanha de e-mail que impulsiona seus negócios.`,
  serviceTitle6: 'PR',
  serviceDescription6: `PROMOVA A SUA MARCA\n\nSUA EMPRESA PRECISA DE BUZZ? PODEMOS OBTER SUA EXPOSIÇÃO RÁPIDA!\n\nNossa equipe tem as habilidades para se comunicar de forma eficiente com o público, tanto por meio de táticas digitais atraentes quanto de relações públicas tradicionais. Relacionamento com a mídia, influenciadores online e blogueiros aumentam a visibilidade para você ao apresentar sua marca em grandes sites de mídia social, blogs e publicações locais e nacionais, mantendo você no centro das atenções.`,
};

export default (): ReactElement => <Home i18n={i18n} />;
