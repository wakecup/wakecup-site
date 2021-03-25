import React from 'react';

import Contact from '../components/pages/Contact';

const i18n: i18nProps = {
  lang: 'en',
  title: 'Curious to level up your business? Just drop a message!',
  titleField: 'Title',
  name: 'Name',
  email: 'E-mail',
  company: 'Company Name',
  url: 'Site URL',
  message: 'Message',
  button: 'Submit',
};

const ContactEn: React.FC = () => <Contact i18n={i18n} />;

export default ContactEn;
