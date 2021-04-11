import React from 'react';
import { about, wechat } from '../data';
import styles from './index.less';

function About() {
  return (
    <section className={'about-container'}>
      <div className={'about'}>
        <section className="line">
          <p className="name">联系人：赵经理</p>
          <p className="name">电话：15005516438（微信同）</p>
          <p className="name">邮箱：sales1@qiushipharm.com</p>
        </section>
        <section className="line">
          <p className="name">Contact：Manager Zhao</p>
          <p className="name">Tel：+86-15005516438</p>
          <p className="name">E-mail：sales1@qiushipharm.com</p>
        </section>
      </div>
      <div className={'about'}>
        <section className="line">
          <p className="name">联系人：吴经理</p>
          <p className="name">电话：13675659542（微信同）</p>
          <p className="name">邮箱：rachel@qiushipharm.com</p>
        </section>
        <section className="line">
          <p className="name">Contact： Manager Wu</p>
          <p className="name">Tel：+86-13675659542</p>
          <p className="name">E-mail：rachel@qiushipharm.com</p>
        </section>
      </div>

      <div className={'about'}>
        <p className="addredd">地址：安徽省合肥市包河区花园大道17号</p>
        <p className="addredd">
          Address：No. 17, Huayuan Avenue, Baohe District, Hefei City, Anhui
          Province
        </p>
      </div>
      <div className={'about'}>
        <p className="addredd">
          微信/Wechat：
          <img src={wechat} className="wechatimg" />
        </p>
      </div>
    </section>
  );
}

export default About;
