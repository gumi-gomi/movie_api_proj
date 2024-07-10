import React from 'react'
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Allwrap4 = styled.div`
width: 100%;
height: 500px;
position: relative;
outline: 1px dotted red;
background-color: royalblue;

.inner{
  outline: 1px dotted red;
  width: 1200px;
  height: 100%;
  margin: 0 auto;
  position: relative;

}
`

const Fourthlayer = () => {
  return (
    <>
      <Allwrap4>
        <div className='inner'>
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
          </Swiper>
        </div>
      </Allwrap4>
    </>
  )
}

export default Fourthlayer;