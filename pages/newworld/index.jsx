import React from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';
import styles from './index.module.css';

function NewWord() {
  return (
    <div className="container">
      <Head>
        <title>秋石医药</title>
        <meta name="description" content="安徽秋石医药科技有限公司"></meta>
        <meta name="keywords" content="安徽 秋石 医药 科技" />
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
