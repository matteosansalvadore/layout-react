import React from "react";
import styled from "styled-components";
import { cities } from "../utils/mockdata.js";

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const CoverComponent = styled.div`
  background-image: linear-gradient(
      120deg,
      rgba(255, 255, 255, 0.35),
      rgba(255, 255, 255, 0)
    ),
    url("images/cover-Turin.jpeg");
  width: 100%;
  height: 450px;
  background-position: center;
  background-size: cover;
  border-radius: 25px;
  display: flex;
  align-items: center;
  padding-left: 150px;
  box-shadow: rgb(0 0 0 / 17%) 5px 10px 20px 0px;
`;

const SideWidget = styled.div`
  position: absolute;
  height: 300px;
  width: 130px;
  background: #577ce9;
  margin-left: -10px;
  border-radius: 0 25px 25px 0;
  opacity: 1;
  transition: opacity 0.2s ease 0s;
  box-shadow: rgb(0 0 0 / 17%) 5px 10px 20px 0px;
  display: flex;
  justify-content: center; /* Align child elements horizontally */
  align-items: center;
`;

const TempSideWideget = styled.p`
  font-size: 50px;
  color: white;
  text-align: center;
  font-weight: bold;
  margin: 0;
`;

const ContainerSideWidget = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImageWeather = styled.img`
  width: 140px;
`;

const MainText = styled.div`
  height: 300px;
  line-height: 22px;
  font-family: poppins;
  color: rgb(1, 23, 95);
`;

const CityName = styled.p`
  font-size: 32px;
  font-weight: bold;
`;

const Date = styled.p`
  font-size: 26px;
`;

const WeatherCondition = styled.p`
  font-size: 22px;
`;

const Cover = () => {
  return (
    <Wrapper>
      <CoverComponent>
        <MainText>
          <CityName>Turin</CityName>
          <Date>Thursday 2, February</Date>
          <WeatherCondition>Clear</WeatherCondition>
        </MainText>
      </CoverComponent>
      <SideWidget>
        {cities.slice(0, 1).map((city) => (
          <ContainerSideWidget>
            <TempSideWideget>{city.temperature}°</TempSideWideget>
            <ImageWeather src={city.image}></ImageWeather>
          </ContainerSideWidget>
        ))}
      </SideWidget>
    </Wrapper>
  );
};

export default Cover;
