import React, { useCallback } from 'react';
import { Form } from '@unform/web';

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

const Contact: React.FC = () => {
  const encode = (data: Record<string, string>) => {
    return Object.keys(data)
      .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
      .join('&');
  };

  const handleSubmit = useCallback((data: ContactProps) => {
    return fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': 'contact',
        name: data.nome,
        email: data.email,
        company: data.company,
        site: data.site,
        message: data.message,
        'bot-field': data['bot-field'],
      }),
    })
      .then(() => alert('Success!'))
      .catch(err => alert(err));
  }, []);

  return (
    <ContactContainer>
      <strong>Curious to level up your business? Just drop a message!</strong>
      <Form onSubmit={handleSubmit} data-netlify="true" netlify-honeypot="bot-field">
        <Input name="bot-field" placeholder="Title" isBotField />
        <Input name="nome" placeholder="Name" />
        <Input name="email" placeholder="E-mail" />
        <Input name="company" placeholder="Company Name" />
        <Input name="site" placeholder="Site URL" />
        <Textarea name="message" placeholder="Message" />

        <button type="submit">Submit</button>
      </Form>
    </ContactContainer>
  );
};

export default Contact;
