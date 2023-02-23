import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: rgb(229, 231, 235);
  height: 100%;
  width: 100%;
  margin-top: 40px;
`

const SearchText = styled.p`
  font-size: 28px;
  font-weight: bold;
  padding: 20px;
  color:rgb(1, 23, 95);
  margin: 0;
`

const SearchField = styled.div`
  width: 100%;
  height: 140px;
  border-radius: 25px;
  position: relative;
  background-color: white;
  box-shadow: rgb(0 0 0 / 17%) 5px 10px 20px 0px;
`

const ButtonSearch = styled.button`
  position: absolute;
  right: 0px;
  height: 100%;
  width: 56px;
  color: blue;
  display: flex;
  background: radial-gradient(circle at left top, rgb(83, 116, 231) 0%, rgb(119, 185, 245) 100%);
  border-radius: 25px;
  border: none;
`

export default function Search(){
  return(
    <Wrapper>
      <SearchText>Search</SearchText>
      <SearchField>
        <ButtonSearch></ButtonSearch>
      </SearchField>
    </Wrapper>
  )
}
