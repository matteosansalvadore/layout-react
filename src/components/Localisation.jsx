import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
`

const LocalizationText = styled.p`
  font-size: 28px;
  font-weight: bold;
  padding: 20px;
  color:rgb(1, 23, 95);
  margin: 0;
`

const LocalizationField = styled.button`
  width: 100%;
  height: 140px;
  border-radius: 25px;
  background: radial-gradient(circle at left top, rgb(83, 116, 231) 0%, rgb(119, 185, 245) 100%);
  box-shadow: rgb(0 0 0 / 17%) 5px 10px 20px 0px;
  border: none;
`

const FieldText = styled.p`
  color: white;
  text-align: center;
  font-size: 28px;
  font-weight: bold;
`

export default function Search(){
  return(
    <Wrapper>
      <LocalizationText>Localization</LocalizationText>
      <LocalizationField>
        <FieldText>Add Localization</FieldText>
      </LocalizationField>
    </Wrapper>
  )
}
