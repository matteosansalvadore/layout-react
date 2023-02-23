import styled from "styled-components";
import AggiungiCitta from "./components/AggiungiCitta";
import Cover from "./components/Cover";
import Search from "./components/Search";
import Today from "./components/Today";
import Localization from "./components/Localisation";


const MainComponent = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  @media (min-width:768px){
    flex-direction: row;
  }
`;

const LeftColumn = styled.div`
  background: rgb(229, 231, 235);
  flex: 2;
  padding: 10px;
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
      <Search />
      <Localization />
    </RightColumn>
  </MainComponent>
  )
}

export default App;
