import React from 'react'
import styles from './index.module.css'
import { footerNav } from '../../../public/data/footer'

export default function Footer() {
    return (
        <div className={styles.pagefooter}>
            <div className={styles.nav}>
                {
                    footerNav.map(item => (
                        <section className={styles.navcol} key={item.name}>
                            <h1 className={styles.title}>{item.name}</h1>
                            {item.subNav.map(nav => (
                                <p className={styles.subnav} key={nav.key}>{nav.key}</p>
                            ))}
                        </section>
                    ))
                }
            </div>
            <p className={styles.copyright}>Copyright ©2021 安徽秋石药业股份有限公司. All rights reserved.</p>
        </div >
    )
}