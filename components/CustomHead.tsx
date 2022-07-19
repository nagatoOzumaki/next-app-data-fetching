/* eslint-disable react/require-default-props */
import NextHead from 'next/head';
import { FC } from 'react';

const SERVER_URL = 'http://localhost:4000';
const defaultDescription = 'learn next js framework';
const defaultTitle = 'next js + seo';
const titleSuffix = ' | Next';
const defaultOGImage = `${SERVER_URL}/images/`;
const defaultKeywords = 'NextJS, react, seo';
type Props = {
  title?: string;
  description?: string;
  ogImage?: string;
  keywords?: string;
};

const CustomHead: FC<Props> = ({ title, description, ogImage, keywords }) => {
  return (
    <NextHead>
      <meta name='title' content={title || defaultTitle} />
      <meta name='keywords' content={keywords || defaultKeywords} />
      <meta name='og-image' content={ogImage || defaultOGImage} />
      <meta name='description' content={description || defaultDescription} />
    </NextHead>
  );
};

export default CustomHead;
