import React from 'react';
import Swiper from 'react-id-swiper';
import SwiperCore, { Autoplay } from 'swiper';
import 'swiper/swiper.less';
import './index.less';
import { slideList } from './data';

function renderSwiperSlide(slideList) {
  return slideList.map((item) => (
    <div
      key={item.img}
      className="slideimg"
      style={{ backgroundImage: `url(${item.img})` }}
    >
      {/* <img src={item.img} className={'slideimg'} /> */}
    </div>
  ));
}

function MainSwiper() {
  SwiperCore.use([Autoplay]);
  const params = {
    spaceBetween: 30,

    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    containerClass: 'containerClass',
  };
  return <Swiper {...params}>{renderSwiperSlide(slideList)}</Swiper>;
}

export default MainSwiper;
