import type { GatsbyConfig } from 'gatsby';
import dotenv from 'dotenv';

dotenv.config();

const SITE_URL =
  'https://67f7dbfa0fd3db04f288d7c6--celebrated-kelpie-df1d77.netlify.app/';

const config: GatsbyConfig = {
  siteMetadata: {
    title: `여기에 원하는 제목을 추가해주세요!`,
    description: '여기에 원하는 설명을 추가해주세요!',
    siteUrl: SITE_URL,
  },
  jsxRuntime: 'automatic',
  graphqlTypegen: true,
  plugins: [
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: SITE_URL,
        stripQueryString: true,
      },
    },
    {
      resolve: 'gatsby-source-contentful',
      options: {
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        spaceId: process.env.CONTENTFUL_SPACE_ID,
      },
    },
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-vanilla-extract',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
  ],
};

export default config;
