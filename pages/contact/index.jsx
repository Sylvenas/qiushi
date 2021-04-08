import React from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';
import About from './components/About';
import styles from './index.module.css';

function Contact() {
  return (
    <div className="container">
      <Head>
        <title>秋石医药-联系我们</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <div className={styles.img} />
        <About />
      </Layout>
    </div>
  );
}

export default Contact;
