import React from "react";
import styled from "styled-components";
import Search from "./Search";
import Localization from "./Localization";

const Wrapper = styled.div`
  height: 540px;
  justify-content: space-between;
  flex-direction: column;
  display: flex;
`;

export default function WidgetSearch() {
  return (
    <Wrapper>
      <Search />
      <Localization />
    </Wrapper>
  );
}
