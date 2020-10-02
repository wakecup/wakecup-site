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

interface Props {
  place: string;
}

const Contact: React.FC<Props> = ({ place }) => {
  const encode = (data: Record<string, string>) => {
    return Object.keys(data)
      .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
      .join('&');
  };

  const handleSubmit = useCallback(
    (data: ContactProps) => {
      return fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': `contact-${place}`,
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
    },
    [place]
  );

  return (
    <ContactContainer>
      <strong>Curious to level up your business? Just drop a message!</strong>
      <Form
        onSubmit={handleSubmit}
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        name={`contact-${place}`}
      >
        <Input name="bot-field" placeholder="Title" isBotField type="hidden" />
        <Input name="nome" placeholder="Name" />
        <Input name="email" placeholder="E-mail" />
        <Input name="company" placeholder="Company Name" />
        <Input name="site" placeholder="Site URL" />
        <Textarea name="message" placeholder="Message" rows={5} />

        <button type="submit">Submit</button>
      </Form>
    </ContactContainer>
  );
};

export default Contact;
