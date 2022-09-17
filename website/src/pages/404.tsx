import React from 'react';
import type {HeadFC} from 'gatsby';
import Layout from '../components/Layout';

const NotFoundPage = () => {
  return (
    <>
      <Layout SelectedPage={'NOT_FOUND'}></Layout>
    </>
  );
};

export default NotFoundPage;

export const Head: HeadFC = () => <title>RXN Input - Documentation</title>;
