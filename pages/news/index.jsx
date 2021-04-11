import React from 'react';
import Layout from '../components/Layout';
import './index.less';

function News() {
  return (
    <Layout>
      <div className="p-news">
        <div className="new-item">
          <h2 className="new-title">公司与安徽大学举行产学研合作签约仪式</h2>
          <p className="content">
            2021年3月16日上午，公司总经理、公司研发及项目负责人一行至安徽大学化学化工学院洽商产学研合作事宜，安徽大学张磊想副教授及其团队、在读博士参与会谈。
          </p>
          <p className="content">
            双方就富马酸沃诺拉赞、马西替坦技术开发、项目合作等展开深入讨论，并就后续深入合作达成一致意见。会上，双方签订框架合作协议和项目合作协议。
          </p>
        </div>
      </div>
    </Layout>
  );
}

export default News;
