import React from 'react';
import { Form } from '@unform/web';
import axios from 'axios';

import Input, { Textarea } from '../../input';

import { SEO } from '../../SEO';
import LayoutWrapper from '../../layoutWrapper';

import { ContactContainer } from './styles';

interface ContactProps {
  i18n: i18nProps;
}

interface ContactDataProps {
  nome: string;
  email: string;
  company: string;
  site: string;
  message: string;
  'bot-field': string;
}

const Contact: React.FC<ContactProps> = ({ i18n }) => {
  const encode = (data: Record<string, string>) => {
    return Object.keys(data)
      .map(key => `${key}=${data[key]}`)
      .join('&');
  };

  const handleSubmit = async (data: ContactDataProps) => {
    try {
      await axios('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        data: encode({
          'form-name': 'contact',
          nome: data.nome,
          email: data.email,
          company: data.company,
          site: data.site,
          message: data.message,
          'bot-field': data['bot-field'],
        }),
      });

      return alert('Success! Thank you for contacting us');
    } catch (err) {
      return alert(err);
    }
  };

  return (
    <>
      <SEO title="Contact" />
      <LayoutWrapper>
        <ContactContainer>
          <h1>{i18n.title}</h1>
          <Form
            onSubmit={handleSubmit}
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            name="contact"
            method="post"
          >
            <input type="hidden" name="form-name" value="contact" />
            <Input name="bot-field" placeholder={i18n.titleField} isBotField />
            <Input name="nome" placeholder={i18n.name} />
            <Input name="email" placeholder={i18n.email} />
            <Input name="company" placeholder={i18n.company} />
            <Input name="site" placeholder={i18n.url} />
            <Textarea name="message" placeholder={i18n.message} rows={5} />

            <button type="submit">{i18n.button}</button>
          </Form>
        </ContactContainer>
      </LayoutWrapper>
    </>
  );
};

export default Contact;
