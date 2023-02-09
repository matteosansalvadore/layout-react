import React, {useEffect} from "react"
import styled from "styled-components"
import { tabs } from "../utils/mockdata"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Slider from "./SliderMonth"
import SliderWeek from "./SliderWeek"


const Wrapper2 = styled.div`
  display: flex;
  margin-top: 40px;
  background-color: rgb(229, 231, 235);
`

const NowTempWidget = styled.div`
  width: 50%;
  height: 500px;

`

const WeekWidget = styled.div`
  width: 50%;
  height: 500px;
`

const StyledTabs = styled(Tabs)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  .react-tabs__tab-list {
    background: white;
    display: inline-flex;
    border-radius: 15px 15px 0 0;
    margin: 0;
    height: 100%;
    overflow: hidden;
    border: none;
    font-size: 21px;
    font-weight: bold;

      .react-tabs__tab {
      border-radius: 15px 15px 0 0;
      border: none;
      font-weight: bold;
      border: none;
    }

    .react-tabs__tab--selected {
      background-color: #5374E7;
      border-radius: 15px 15px 0 0;
      margin: 0;
      color: white;

    }
  }

  .react-tabs__tab-panel--selected {
      height: 100%;
      padding: 25px;

    }

`

const PanelWrapper = styled.div`
  background: linear-gradient(0deg, #77b9f5 0%, #5374E7 100%);
  /* height: 400px; */
  display: block;
  width: 100%;
  border-radius: 0 15px 15px 15px;

`




export default function Today (){
  return (
    <Wrapper2>
      <NowTempWidget></NowTempWidget>
      <WeekWidget>
      <StyledTabs>
        <TabList>
          <Tab>This Week</Tab>
          <Tab>This Month</Tab>
        </TabList>

        <PanelWrapper>
          <TabPanel>
            <SliderWeek />
          </TabPanel>
          <TabPanel>
            <Slider />
          </TabPanel>
        </PanelWrapper>

      </StyledTabs>
      </WeekWidget>
    </Wrapper2>
  )
}
