import React from "react";
import styled from "styled-components";
import { ZoomIn } from "react-feather";

const Wrapper = styled.div`
  background-color: rgb(229, 231, 235);
  height: 100%;
  width: 100%;
  margin-top: 40px;
`;

const SearchText = styled.p`
  font-size: 28px;
  font-weight: bold;
  padding: 20px;
  color: rgb(1, 23, 95);
  margin: 0;
`;

const SearchField = styled.div`
  width: 100%;
  position: relative;
`;

const Input = styled.input`
  height: 140px;
  border-radius: 25px;
  background-color: white;
  box-shadow: rgb(0 0 0 / 17%) 5px 10px 20px 0px;
  width: calc(100% - 22px);
  border: none;
  font-size: 28px;
  font-weight: bold;
  color: #01175f;
  padding-left: 20px;
`;

const ButtonSearch = styled.button`
  position: absolute;
  right: 0px;
  top: 0;
  height: 100%;
  width: 56px;
  color: blue;
  display: flex;
  background: radial-gradient(
    circle at left top,
    rgb(83, 116, 231) 0%,
    rgb(119, 185, 245) 100%
  );
  border-radius: 25px;
  border: none;
  .ZoomIn {
    margin: auto;
    color: white;
  }
`;

export default function Search() {
  return (
    <Wrapper>
      <SearchText>Search</SearchText>
      <SearchField>
        <Input type="text" placeholder="ex: Miami" />
        <ButtonSearch>
          <ZoomIn class="ZoomIn" />
        </ButtonSearch>
      </SearchField>
    </Wrapper>
  );
}
