import React from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';
import About from './components/About';
import styles from './index.less';

function Contact() {
  return (
    <Layout>
      <div className="p-contact">
        <div className={'img'} />
        <About />
      </div>
    </Layout>
  );
}

export default Contact;
