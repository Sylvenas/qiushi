import Layout from './components/Layout';
import Swiper from './components/Swiper';
import './index.less';

export default function Home() {
  return (
    <Layout>
      <div className="p-home">
        <Swiper />
        <p className={'company-desc'}>
          淮南法，秋石最堪夸。
          <br />
          位应乾坤白露节，象移寅卯紫河车。
          <br />
          子午结朝霞。
          <br />
          <br />
          <b>安徽秋石医药科技有限公司</b>
          ，主营原料药和高端医药中间体的研发、生产和销售。致力于研发及生产原创性新药和仿制药，以及对应的高端医药中间体。
          <br />
          <br />
          秋石医药坚持以“以人为本，持续创新，服务客户”为目标。经过持续不断的研发和探索，成功开发了西那卡塞、氟呐普拉赞、伊曲茶碱、托匹司他、马西替坦、雷沙吉兰、非索罗定、培哚普利、伐尼克兰、托法替尼等系列仿制药和对应医药中间体。
          <br />
          <br />
          秋石医药的生产基地，质量体系通过美国FDA官方认证及国内新版GMP认证，以国际标准的药品质量管理规范和严格的药品生产质量管理体系保证药品质量。公司产品已经行销全球多个国家和地区，主要产品占据较大市场份额。
          <br />
          <br />
          秋石医药以研发为发展基石，以中国科学技术大学、安徽大学、中国药科大学等国内知名院校为依托，以及与国际接轨的生产工厂，将倾力打造集研发、生产、技术服务、销售为一体的更具竞争力的高科技医药企业，我们期待和业内伙伴开展更多合作，实现共赢，造福全球患者。
        </p>
      </div>
    </Layout>
  );
}
