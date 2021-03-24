import React from 'react';
import { graphql, PageProps } from 'gatsby';

import Home from '../components/pages/Home';

const i18n: i18nProps = {
  lang: 'pt',
  sliderTitle: 'Envolva sua marca no mundo digital',
  sliderSubTitle:
    'Uma equipe especialista em Marketing Digital, Comunicação e Desenvolvimento com o compromisso de fazer o seu negócio alcançar um novo patamar.',
  dna: 'Nosso DNA',
  dnaDescription: 'MAIS PROPÓSITO. MENOS PROMESSAS',
  mission: 'Nossa missão',
  missionDescription: `Fundada desde 2017, nossa missão é conectar marcas aos parceiros CERTOS a fim de fornecer uma abordagem customizada e projetada, combinando estratégia de marketing, gestão de mídias sociais, desenvolvimento de websites, comunicação e relações públicas.`,
  services: 'Serviços',
  serviceTitle1: 'Gestão de Mídias Sociais',
  serviceDescription1: `Existem quase três bilhões de usuários de mídia social em todo o mundo. Oferecemos acesso a esses clientes em potencial por meio de serviços de marketing de mídia social de primeira linha.\nNa WakeCup, inspiramos as pessoas a se tornarem os embaixadores de sua marca. Como resultado, isso ajuda a promover e recomendar seus produtos por meio de poderosas campanhas de marketing de mídia social. Nós personalizamos cada campanha, garantindo que você alcance seu público-alvo.`,
  serviceTitle2: 'Design e Desenvolvimento de Sites',
  serviceDescription2:
    'Atender às expectativas dos nativos digitais complexos e hiperconectados de hoje é essencial para o seu sucesso. Prototipamos sites, aplicativos da Web, interfaces e produtos digitais de alta conversão, projetando UI e UX elegante e construindo páginas da web que resolvem os desafios de negócios e crescimento. Nosso processo envolve mais do que apenas pixels bonitos, em vez disso, projetamos interfaces digitais intuitivas com base no comportamento humano. Damos vida a sites complexos, e-commerce e aplicativos em HTML, CSS e Javascript.',
  serviceTitle3: 'Marketing Digital ',
  serviceDescription3: `Crie campanhas específicas que engajam com sua audiência\nPesquisar é apenas parte da equação. O trabalho de uma marca não termina quando aparece nos resultados da pesquisa. É fundamental que as marcas direcionem as pessoas para um destino que seja útil. Podemos ajudar sua marca a:\n- Ser reconhecida (Branding);\n- Promover engajamento de qualidade e converter clientes.\nE TAMBÉM te ajudamos a identificar:\n- Quem são seus clientes;\n- O que eles estão procurando;\n- O que eles esperam de você e da sua marca`,
  serviceTitle4: 'SEO e Marketing de Conteúdo',
  serviceDescription4: `Nossas campanhas de Search Engine Optimization (SEO) se mantêm atualizadas com os algoritmos de mecanismo de pesquisa mais recentes e são adaptadas às suas necessidades de negócios. Como resultado, ajudamos você a melhorar as classificações e direcionar o tráfego que você pode converter, o que se traduz diretamente em crescimento.\nPráticos e acessíveis, nossos serviços de SEO oferecem o maior retorno sobre o investimento (ROI).`,
  serviceTitle5: 'Captação de Leads e E-mail Marketing',
  serviceDescription5: `Com um design lindo e conteúdo envolvente, nossos e-mails recebem uma resposta.\nAprofunde o relacionamento com os clientes existentes ou atraia novos clientes em potencial com nossas campanhas de e-mail marketing. Receba atualizações sobre métricas em tempo real e todo rastreamento de conversão que ampliará sua base de clientes.`,
  serviceTitle6: 'PR',
  serviceDescription6: `SUA MARCA PRECISA DE BUZZ?\n\nNossa equipe tem as habilidades para se comunicar de forma eficiente com o público, tanto por meio de táticas digitais atraentes quanto de relações públicas tradicionais. Relacionamento com a mídia, influenciadores online e blogueiros aumentam a visibilidade ao apresentar sua marca em grandes sites de mídia social, blogs e publicações locais e nacionais, mantendo sua marca no centro das atenções.`,
};

export const IndexPtQuery = graphql`
  fragment imageFormat on File {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
    }
  }

  query HomeQuery {
    image1: file(relativePath: { eq: "social-media.jpg" }) {
      ...imageFormat
    }
    image2: file(relativePath: { eq: "website-development.jpg" }) {
      ...imageFormat
    }
    image3: file(relativePath: { eq: "digital-marketing.jpg" }) {
      ...imageFormat
    }
    image4: file(relativePath: { eq: "seo-content.jpg" }) {
      ...imageFormat
    }
    image5: file(relativePath: { eq: "email-marketing.jpg" }) {
      ...imageFormat
    }
    image6: file(relativePath: { eq: "public-relations.jpg" }) {
      ...imageFormat
    }
  }
`;

const HomePt: React.FC<PageProps<HomeData>> = ({ data }) => <Home i18n={i18n} data={data} />;

export default HomePt;
