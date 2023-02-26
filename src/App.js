import styled from "styled-components";
import AggiungiCitta from "./components/AggiungiCitta";
import Cover from "./components/Cover";
import Today from "./components/Today";
import WidgetSearch from "./components/WidgetSearch";

const MainComponent = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const LeftColumn = styled.div`
  background: rgb(229, 231, 235);
  width: 50%;
  flex: 2;
  padding: 10px;

  @media only screen and (max-width: 768px) {
    width: 100%;
    margin-right: 0;
    width: auto;
    border: 0;
  }
`;

const RightColumn = styled.div`
  background-color: rgb(229, 231, 235);
  flex: 1;
  padding: 10px;
`;

function App() {
  return (
    <MainComponent>
      <LeftColumn>
        <Cover />
        <Today />
      </LeftColumn>
      <RightColumn>
        <AggiungiCitta />
        <WidgetSearch />
      </RightColumn>
    </MainComponent>
  );
}

export default App;
