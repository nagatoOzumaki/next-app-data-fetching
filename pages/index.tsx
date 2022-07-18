import { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

const Button = (name: string) => (
  <small>this a functinal component {name}</small>
);

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="riad">
        <h1>ooops</h1>
        {Button('riad')}
      </div>
    </div>
  );
};

export default Home;
