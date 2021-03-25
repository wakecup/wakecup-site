import React from 'react';

import Contact from '../components/pages/Contact';

const i18n: i18nProps = {
  lang: 'pt',
  title: 'Quer elevar seu negócio para o próximo nível? Mande uma mensagem!',
  titleField: 'Título',
  name: 'Nome',
  email: 'E-mail',
  company: 'Nome da empresa',
  url: 'Site',
  message: 'Mensagem',
  button: 'Enviar',
};

const ContactPt: React.FC = () => <Contact i18n={i18n} />;

export default ContactPt;
