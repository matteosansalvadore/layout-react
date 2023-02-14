import React from "react";
import styled from "styled-components";

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
`

export default function WidgetWeatherToday(){
  return(
    <Container>
      <Title>Today</Title>
      <Measurement></Measurement>
    </Container>
  )
}
