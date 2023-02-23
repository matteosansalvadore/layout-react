import React from "react";
import styled from "styled-components";
import {hours} from "../utils/mockdata.js"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

const Title = styled.p`
  font-size: 28px;
  font-weight: bold;
  padding: 20px;
  color:rgb(1, 23, 95);
  margin: 0;
`

const Measurement = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(0deg, #77b9f5 0%, #6A88EB 100%);
  border-radius: 15px;
  overflow: hidden;
  color: white;
  position: relative;
  box-shadow: rgb(0 0 0 / 17%) 5px 10px 20px 0px;

  &::after {
    content: " ";
    background: linear-gradient(rgba(119, 185, 245, 0), rgb(119, 185, 245));
    z-index: 10;
    width: 100%;
    height: 50%;
    position: absolute;
    bottom: 0;
    pointer-events: none;
  }
`

const InnerMeasurement = styled.div`
  height: 100%;
  overflow-y: scroll;
  padding-top: 20px;
`
const Now = styled.p`
  font-size: 18px;
  font-weight: bold;
  text-align: center;
`

const Temperature = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  text-align: right;
`

const Degrees = styled.p`
  font-size: 40px;
  font-weight: bold;
  line-height: 28px;
  margin: 0;
`

const CircleWrapper = styled.div`
  height: 80px;
  width: 100%;
  flex-direction: column;
  display: flex;
  align-items: center;
`

const Line = styled.div`
  background-color: white;
  flex-grow: 1;
  width: 8px;
  margin: -2px;
`

const Circle = styled.div`
  width: 30px;
  height: 30px;
  margin: 0 auto;
  border-radius: 100%;
  background-color: white;
  position: relative;
  display: block;
`

const Time = styled.p`
  font-size: 20px;
  text-align: left;
  margin: 0;
`

export default function WidgetWeatherToday(){
  return(
    <Container>
      <Title>Today</Title>
      <Measurement>
        <InnerMeasurement>
          <Now>Now</Now>
          {hours.map((hour, index) => (
            <Temperature>
            <Degrees>{hour.temperature}°</Degrees>
            <CircleWrapper>
              <Circle/>
              <Line/>
            </CircleWrapper>
            {/* <Time>{index !== 0 ? hour.hour : ""}</Time> */}
            <Time>{index !== 0 && hour.hour}</Time>
          </Temperature>
          ))}

        </InnerMeasurement>
      </Measurement>
    </Container>
  )
}
