import React from 'react';
import Head from 'next/head';
import Header from '../Header';
import Footer from '../Footer';

export default function Layout({ children }) {
  return (
    <div
      style={{ minHeight: '100vh', position: 'relative', paddingBottom: 200 }}
    >
      <Head>
        <title>秋石医药</title>
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1, user-scalable=no, viewport-fit=cover"
        ></meta>
        <meta name="description" content="安徽秋石医药科技有限公司"></meta>
        <meta name="keywords" content="安徽 秋石 医药 科技" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
