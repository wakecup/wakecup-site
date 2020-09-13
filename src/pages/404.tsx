import React, { ReactElement } from 'react';
import { Link } from 'gatsby';

import LayoutWrapper from '../components/layoutWrapper';
import { SEO } from '../components/SEO';

const NotFoundPage = (): ReactElement => (
  <LayoutWrapper>
    <SEO title="404 — Not found" />
    <h2>Not found</h2>
    <div>
      You just hit a route that doesn&#39;t exist... the sadness.
      <br />
      <Link to="/">Take me home.</Link>
    </div>
  </LayoutWrapper>
);

export default NotFoundPage;
