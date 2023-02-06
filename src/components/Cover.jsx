import React from 'react'
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  display: flex;
  /* justify-content: center; */
  align-items: center;
`;

const CoverComponent = styled.div`
  background-image: url("images/Torino.jpeg");
  width: 100%;
  height: 450px;
  background-position: center;
  background-size: cover;
  border-radius: 25px;
  display: flex;
  align-items: center;
  padding-left: 150px;
`;

const SideWidget = styled.div`
  position: absolute;
  height: 300px;
  width: 130px;
  background: #577CE9;
  margin-left: -10px;
  border-radius: 0 25px 25px 0;
`;

const MainText = styled.div`
  height: 300px;
  line-height: 22px;
  font-family: poppins;
  color:rgb(1, 23, 95);
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
    <SideWidget></SideWidget>
    </Wrapper>
  )
}

export default Cover
