import React from 'react'
import { about, wechat } from '../../../public/data/contact'
import styles from './index.module.css'

function About() {
    return (
        <section className={styles.container}>
            <div className={styles.about}>
                {about.map(item => (
                    <div className={styles.item} key={item.key}>
                        <span>{item.key}：</span>
                        <span>{item.value}</span>
                    </div>
                ))}
            </div>
            <img src={wechat} className={styles.wechatimg} />
        </section>
    )
}

export default About