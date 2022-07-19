import { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import styles from '../styles/Home.module.css';

const Button = (name: string) => (
  <small>this a functinal component {name}</small>
);

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <NextSeo title="next-seo" description="this is a next seo demo" />
      <div className="riad">
        <h1>ooops</h1>
        {Button('riad')}
      </div>
    </div>
  );
};

export default Home;
