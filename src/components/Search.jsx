import React from "react";
import styled from "styled-components";

const SearchText = styled.p`
  font-size: 28px;
  font-weight: bold;
`

const SearchField = styled.div`
  width: 100%;
  height: 140px;
  border-radius: 25px;
  position: relative;
  background-color: white;
`

export default function Search(){
  return(
    <SearchText></SearchText>
    <SearchField></SearchField>
  )
}
