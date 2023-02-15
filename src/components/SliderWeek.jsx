import React from "react"
import styled from "styled-components"
// import Swiper styles
import { Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
// import {cities} from "../utils/mockdata.js"
import {days} from "../utils/mockdata.js"


const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;

  .swiper {
    width: 100%;
  }

  .swiper-wrapper{
    /* overflow-y: scroll; */
  }

  .swiper-slide {
    background: linear-gradient(0deg, #77b9f5 0%, #6A88EB 100%);
    height: 100%;
    width: auto;
    margin: 10px;
    border-radius: 15px;
    box-shadow: rgb(0 0 0 / 17%) 5px 10px 20px 0px;
    text-align: center;
    /* overflow: hidden; */
  }
`
const CityColumn = styled.div`
    overflow: scroll;
    padding: 15px;
`

const TopText = styled.p`
  color: white;
  font-size: 22px;
  font-weight: 600;
  margin-top: 4px;
`

const ImageWeather = styled.img`
  width: 80px;
`

const Temp = styled.p`
  color: white;
  font-size: 50px;
  font-weight: bold;
  margin-bottom: 4px;
`

export default function Slider () {
  return (

    // <!-- Slider main container -->
    <Wrapper>
    <Swiper
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={2}
        slidesPerGroup={2}
        grabCursor
        breakpoints={{
          620: {
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
        }}
        pagination={{
          clickable: true,
        }}
      >
      {/* <!-- Additional required wrapper --> */}
      {days.map(date => (
        <SwiperSlide>

          <CityColumn>
            <TopText>{date.day}</TopText>
            <Temp>{date.temperature}</Temp>
            {/* <ImageWeather><img src={date.image} alt="Weather Icon" /></ImageWeather> */}
          </CityColumn>

        </SwiperSlide>
        ))}
        {/* <SwiperSlide>
          <CityColumn>
            <TopText>Friday</TopText>
            <Temp>12</Temp>
            <ImageWeather></ImageWeather>
          </CityColumn>
        </SwiperSlide>
        <SwiperSlide>
          <CityColumn>
            <TopText>Friday</TopText>
            <Temp>12</Temp>
            <ImageWeather></ImageWeather>
          </CityColumn>
        </SwiperSlide>
        <SwiperSlide>
          <CityColumn>
            <TopText>Friday</TopText>
            <Temp>12</Temp>
            <ImageWeather></ImageWeather>
          </CityColumn>
        </SwiperSlide>
        <SwiperSlide>
          <CityColumn>
            <TopText>Friday</TopText>
            <Temp>12</Temp>
            <ImageWeather></ImageWeather>
          </CityColumn>
        </SwiperSlide>
        <SwiperSlide>
          <CityColumn>
            <TopText>Friday</TopText>
            <Temp>12</Temp>
            <ImageWeather></ImageWeather>
          </CityColumn>
        </SwiperSlide> */}
      {/* <!-- If we need pagination --> */}
      <div class="swiper-pagination"></div>

      {/* Scrollbar */}
      <div class="swiper-scrollbar"></div>
    </Swiper>
    </Wrapper>
  )
}
