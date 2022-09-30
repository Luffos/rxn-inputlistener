import {GetStaticPaths, GetStaticProps} from 'next';
import React from 'react';
import Layout, {LayoutContent} from '../../components/Layout';

export default function DocPage({post}: any) {
  return (
    <Layout>
      <LayoutContent style={{marginTop: `8rem`}}>
        <h1>{post}</h1>
      </LayoutContent>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({params}) => {
  return {
    props: {
      post: params?.slug + '####'
    }
  };
};

export const getStaticPaths: GetStaticPaths<{
  slug: string;
}> = async () => {
  return {
    paths: [
      {params: {slug: `false`}},
      {params: {slug: 'getting-started'}},
      {params: {slug: 'a'}},
      {params: {slug: 'b'}}
    ],
    fallback: 'blocking'
  };
};
