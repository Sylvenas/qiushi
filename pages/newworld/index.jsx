import React from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';
import styles from './index.module.css';

function NewWord() {
  return (
    <div className="container">
      <Head>
        <title>秋石医药-创新</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <div className={styles.img} />
        <h1>这里是创新</h1>
      </Layout>
    </div>
  );
}

export default NewWord;
