import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './index.module.css';
import { companyLogo, navList } from '../../../public/data/header';

const renderNav = (list, pathname) => {
  return list.map((item) => (
    <Link href={item.subNav} key={item.subNav}>
      <li
        className={
          styles.navitem +
          ' ' +
          (pathname == item.subNav ? styles.navitemactive : '')
        }
      >
        {item.name}
      </li>
    </Link>
  ));
};

function Header() {
  const { pathname } = useRouter();
  return (
    <header className={styles.pageheader}>
      <div className={styles.header}>
        <img className={styles.companylogo} src={companyLogo} />
        <h1 className={styles.companyname}>秋石医药</h1>
      </div>
      <nav className={styles.navigation}>
        <ul className={styles.navlist}>{renderNav(navList, pathname)}</ul>
      </nav>
    </header>
  );
}

export default Header;
