import React from "react"
import styled from "styled-components"
// import Swiper styles
import 'swiper/css';
// core version + navigation, pagination modules:

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  border-radius: 15px;
  box-shadow: rgb(0 0 0 / 17%) 5px 10px 20px 0px;

  .swiper-wrapper {
    background: linear-gradient(0deg, #77b9f5 0%, #6A88EB 100%);
    height: 100%;
    overflow: scroll;
    padding: 15px;
  }

  .swiper-slide {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 20px;
  }
`

const LeftText = styled.p`
  color: white;
  font-size: 22px;
  font-weight: 600;
  margin-top: 4px;
  margin-bottom: 4px;
`

const RightText = styled.p`
  color: white;
  font-size: 22px;
`
const Temp = styled.p`
  color: white;
  font-size: 50px;
  font-weight: bold;
  margin-top: 4px;
  margin-bottom: 4px;
`

const LeftColumn = styled.div`
  width: 100%;
`

const RightColumn = styled.div`
  width: 100%;
  display: block;
`

export default function Slider () {
  return (
    // <!-- Slider main container -->
    <Wrapper class="swiper">
      {/* <!-- Additional required wrapper --> */}
      <div class="swiper-wrapper">
        {/* <!-- Slides --> */}
        <div class="swiper-slide">
          <LeftColumn>
            <LeftText>Thursday 8</LeftText>
          </LeftColumn>
          <RightColumn>
            <Temp>12</Temp>
            <RightText>Clear Sky</RightText>
            <RightText>Clear Sky</RightText>
            <RightText>Clear Sky</RightText>
          </RightColumn>
        </div>
        <div class="swiper-slide">
          <LeftColumn>
            <LeftText>Thursday 8</LeftText>
          </LeftColumn>
          <RightColumn>
            <Temp>12</Temp>
            <RightText>Clear Sky</RightText>
            <RightText>Clear Sky</RightText>
            <RightText>Clear Sky</RightText>
          </RightColumn>
        </div>
        <div class="swiper-slide">
          <LeftColumn>
            <LeftText>Thursday 8</LeftText>
          </LeftColumn>
          <RightColumn>
            <Temp>12</Temp>
            <RightText>Clear Sky</RightText>
            <RightText>Clear Sky</RightText>
            <RightText>Clear Sky</RightText>
          </RightColumn>
        </div>
      </div>
      {/* <!-- If we need pagination --> */}
      <div class="swiper-pagination"></div>

      {/* Scrollbar */}
      <div class="swiper-scrollbar"></div>
    </Wrapper>
  )
}
