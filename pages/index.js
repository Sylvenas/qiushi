import Head from 'next/head';
import Layout from './components/Layout';
import Swiper from './components/Swiper';
import styles from './index.module.css';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>秋石医药</title>
        <meta name="description" content="安徽秋石医药科技有限公司"></meta>
        <meta name="keywords" content="安徽 秋石 医药 科技" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Swiper />
        <p className={styles.about}>
          淮南法，秋石最堪夸。 位应乾坤白露节，象移寅卯紫河车。 子午结朝霞。
          <br />
          安徽秋石医药科技有限公司，主营原料药和高端医药中间体的研发、生产和销售。建设有原料药质量技术中心和CMO试验平台。致力于研发及生产原创性新药和仿制药，以及对应的高端医药中间体。
          <br />
          秋石医药坚持以“以人为本，持续创新，服务客户”为目标。经过持续不断的研发和探索，成功开发了西那卡塞、培哚普利、托匹司他、氟呐普拉赞、雷沙吉兰、伐尼克兰、伊曲茶碱、阿法替尼、非索罗定、马昔腾坦等系列仿制药和对应医药中间体。
          <br />
          秋石医药的生产基地，质量体系通过美国FDA、欧盟EUGMP的官方认证及国内新版GMP认证，以国际标准的药品质量管理规范和严格的药品生产质量管理体系保证药品质量。公司产品已经行销全球多个国家和地区，主要产品占据较大市场份额。
          <br />
          秋石医药以研发为发展基石，以中国科学技术大学、安徽大学、中国药科大学等国内知名院校为依托，以及与国际接轨的cGMP生产工厂，将倾力打造集研发、生产、技术服务、销售为一体的更具竞争力的高科技医药企业，我们期待和业内伙伴开展更多合作，实现共赢，造福全球患者。
        </p>
        <div className={styles.product}>
          <img
            className={styles.productimg}
            src="https://p6.music.126.net/obj/wo3DlcOGw6DClTvDisK1/5682346071/27d6/dd2b/1426/6237984d446a5cb88478d5b1c52177c5.jpg"
          />
          <img
            className={styles.productimg}
            src="https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/5682341035/5384/41dd/5710/8b44a8c92c18d27e7f4da422c019e00f.png"
          />
        </div>
      </Layout>
    </div>
  );
}
