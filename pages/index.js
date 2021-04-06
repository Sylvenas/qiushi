import Head from 'next/head'
import Layout from './components/Layout'
import Swiper from './components/Swiper'
import styles from './index.module.css'

export default function Home() {
    return (
        <div className="container">
            <Head>
                <title>秋石药业</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Layout>
                <Swiper />
                <div className={styles.product}>
                    <img className={styles.productimg} src='https://p6.music.126.net/obj/wo3DlcOGw6DClTvDisK1/5682346071/27d6/dd2b/1426/6237984d446a5cb88478d5b1c52177c5.jpg' />
                    <img className={styles.productimg} src='https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/5682341035/5384/41dd/5710/8b44a8c92c18d27e7f4da422c019e00f.png' />
                </div>
            </Layout>
        </div>
    )
}
