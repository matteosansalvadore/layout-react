import React from "react"
import styled from "styled-components"
// import Swiper styles
import 'swiper/css';
// core version + navigation, pagination modules:
import Swiper, { Pagination } from 'swiper';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {cities} from "../utils/mockdata.js"

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: visible;


  .swiper-wrapper{
    /* overflow-y: scroll; */
  }

  .swiper-slide {
    background: linear-gradient(0deg, #77b9f5 0%, #6A88EB 100%);
    height: 100%;
    width: 120px;
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
    <Wrapper class="swiper">
      {/* <!-- Additional required wrapper --> */}
      <div class="swiper-wrapper">
        {/* <!-- Slides --> */}
        <div class="swiper-slide">
        {/* {cities.map(city => ( */}
          <CityColumn>
            <TopText>Friday</TopText>
            <Temp>12</Temp>
            <ImageWeather src="./cloud.png"></ImageWeather>
          </CityColumn>
          {/*  ))} */}
        </div>
        <div class="swiper-slide">
          <CityColumn>
            <TopText>Friday</TopText>
            <Temp>12</Temp>
            <ImageWeather></ImageWeather>
          </CityColumn>
        </div>
        <div class="swiper-slide">
          <CityColumn>
            <TopText>Friday</TopText>
            <Temp>12</Temp>
            <ImageWeather></ImageWeather>
          </CityColumn>
        </div>
        <div class="swiper-slide">
          <CityColumn>
            <TopText>Friday</TopText>
            <Temp>12</Temp>
            <ImageWeather></ImageWeather>
          </CityColumn>
        </div>
        <div class="swiper-slide">
          <CityColumn>
            <TopText>Friday</TopText>
            <Temp>12</Temp>
            <ImageWeather></ImageWeather>
          </CityColumn>
        </div>
        <div class="swiper-slide">
          <CityColumn>
            <TopText>Friday</TopText>
            <Temp>12</Temp>
            <ImageWeather></ImageWeather>
          </CityColumn>
        </div>

      </div>
      {/* <!-- If we need pagination --> */}
      <div class="swiper-pagination"></div>

      {/* Scrollbar */}
      <div class="swiper-scrollbar"></div>
    </Wrapper>
  )
}
