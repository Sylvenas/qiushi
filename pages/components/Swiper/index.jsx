import React from 'react'
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.min.css';
import styles from './index.module.css'
import { slideList } from '../../../public/data/swiper'

function renderSwiperSlide(slideList) {
    return slideList.map(item => (
        <div key={item.img}>
            <img src={item.img} className={styles.slideimg} />
        </div>
    ))
}


function MainSwiper() {
    const params = {
        spaceBetween: 30,
        centeredSlides: true,
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        containerClass: styles.containerClass,
    }
    return (
        <Swiper {...params}>
            {renderSwiperSlide(slideList)}
        </Swiper>
    )
}

export default MainSwiper