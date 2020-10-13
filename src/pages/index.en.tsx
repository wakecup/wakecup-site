import React, { ReactElement } from 'react';

import Home from '../components/pages/Home';

const i18n: i18nProps = {
  lang: 'en',
  sliderTitle: 'Engage your brand with a connected world',
  sliderSubTitle: 'A digital marketing TEAM which can take your business to the next level.',
  dna: 'Our DNA',
  dnaDescription: 'MORE PROPOSAL. LESS PROMISES',
  mission: 'Our Mission',
  missionDescription: `Founded since 2018, our mission has been to engage and connect brands to the right partners in order to deliver a customized and engineered approach to growing businesses that combines marketing strategy, social media, communications & PR and software development.\nFrom awareness to traffic generation to prospect education and finally closing the deal; our engagements are end-to-end solutions for growing businesses.`,
  services: 'Services',
  serviceTitle1: 'Expert Social Media Marketing',
  serviceDescription1: `There are nearly three billion social media users worldwide.  We give you access to these potential customers through top-notch social media marketing services. With our help, you can reach out, engage, motivate, and sway the masses to become your clients.\nAt WakeCup, we inspire people to become your brand ambassadors. As a result, this helps promote and recommend your products through powerful social media marketing campaigns. We customize each campaign, ensuring you reach your intended audience.`,
  serviceTitle2: 'Website Design and Development',
  serviceDescription2:
    'Meeting the expectations of today’s complex, hyper-connected digital natives is essential to your success. We prototype high converting Websites, Web Apps, Interfaces, and Digital products by designing elegant UI UX and building award-winning web properties that solve business and growth challenges. Our process involves more than just pretty pixels, instead we design intuitive digital interfaces based on human behavior. We bring complex Websites, e-Commerce, and Apps to life in HTML, CSS, and Javascript. And we’re experts in building large-scale ADA compliant websites in WordPress and all of our sites are fully responsive.',
  serviceTitle3: 'Digital Marketing',
  serviceDescription3: `GUESS WHAT? CUSTOMERS ARE EAGER FOR YOUR HELP \n \nBUILD TARGETED CAMPAIGNS THAT RESONATE WITH CUSTOMERS\n\nSearching is only part of the equation. A brands’ work isn’t finished once they show up in search results. The power of search is in the click. It’s critical that brands direct people to a destination that’s useful.`,
  serviceTitle4: 'SEO and Content Marketing',
  serviceDescription4: `Our Search Engine Optimization (SEO) campaigns stay current with the latest search engine algorithms and are tailored to your business needs.  As a result, we help you improve rankings and drive traffic you can convert, which directly translates into growth.\nPractical and affordable, our SEO services give you the highest Return on Investment (ROI).`,
  serviceTitle5: 'Database and Email Marketing',
  serviceDescription5: `With gorgeous design and content that engages, our emails get a response.\nStay in touch with existing customers or attract new prospects with our compelling email marketing campaigns.  Whether you need real-time updates on real-time metrics and conversion tracking or just an email campaign that drives your business.`,
  serviceTitle6: 'PR',
  serviceDescription6: `IGNITE YOUR BRAND\n\nDOES YOUR COMPANY NEED BUZZ? WE CAN GET YOU EXPOSURE FAST!\n\nOur team has the skills to efficiently communicate with the public, both through compelling digital and traditional public relations tactics. Our relationships with media, online influencers and bloggers drive visibility to you by featuring your brand on large social media sites, blogs and local and national publications, keeping you in the spotlight.`,
};

export default (): ReactElement => <Home i18n={i18n} />;
