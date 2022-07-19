import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';
import SEO from '../config/seo-config';
import GolobalLayout from '../components/Layout';
import PostLayout from '../components/layouts/PostLayout';

const EmptyLayout = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => <div>{children}</div>;

function MyApp({ Component, pageProps }: AppProps) {
  const Layout = Component.Layout === PostLayout ? EmptyLayout : GolobalLayout;
  return (
    <PostLayout>
      {' '}
      <Layout>
        <DefaultSeo {...SEO} />
        <Component {...pageProps} />
      </Layout>
    </PostLayout>
  );
}

export default MyApp;
