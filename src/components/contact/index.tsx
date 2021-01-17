import React, { useCallback } from 'react';
import { Form } from '@unform/web';
import axios from 'axios';

import Input, { Textarea } from '../input';

import { ContactContainer } from './styles';

interface ContactProps {
  nome: string;
  email: string;
  company: string;
  site: string;
  message: string;
  'bot-field': string;
}

interface Props {
  place: string;
  lang: 'pt' | 'en';
}

const texts = {
  en: {
    title: 'Curious to level up your business? Just drop a message!',
    titleField: 'Title',
    name: 'Name',
    email: 'E-mail',
    company: 'Company Name',
    url: 'Site URL',
    message: 'Message',
    button: 'Submit',
  },
  pt: {
    title: 'Quer elevar seu negócio para o próximo nível? Mande uma mensagem!',
    titleField: 'Título',
    name: 'Nome',
    email: 'E-mail',
    company: 'Nome da empresa',
    url: 'Site',
    message: 'Mensagem',
    button: 'Enviar',
  },
};

const Contact: React.FC<Props> = ({ place, lang }) => {
  const encode = (data: Record<string, string>) => {
    return Object.keys(data)
      .map(key => `${key}=${data[key]}`)
      .join('&');
  };

  const handleSubmit = useCallback(
    (data: ContactProps) => {
      return axios('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        data: encode({
          'form-name': `contact-${place}`,
          nome: data.nome,
          email: data.email,
          company: data.company,
          site: data.site,
          message: data.message,
          'bot-field': data['bot-field'],
        }),
      })
        .then(() => alert('Success! Thank you for contacting us'))
        .catch(err => alert(err));
    },
    [place]
  );

  return (
    <ContactContainer id="contact">
      <strong>{texts[lang].title}</strong>
      <Form
        onSubmit={handleSubmit}
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        name={`contact-${place}`}
        method="POST"
      >
        <Input name="bot-field" placeholder={texts[lang].titleField} isBotField type="hidden" />
        <Input name="nome" placeholder={texts[lang].name} />
        <Input name="email" placeholder={texts[lang].email} />
        <Input name="company" placeholder={texts[lang].company} />
        <Input name="site" placeholder={texts[lang].url} />
        <Textarea name="message" placeholder={texts[lang].message} rows={5} />

        <button type="submit">{texts[lang].button}</button>
      </Form>
    </ContactContainer>
  );
};

export default Contact;
