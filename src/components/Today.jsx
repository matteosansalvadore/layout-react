import React, {useEffect} from "react"
import styled from "styled-components"
import { tabs } from "../utils/mockdata"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
// import Slider from "./SliderMonth"
import SliderWeek from "./SliderWeek"
import WidgetWeatherToday from "./WidgetWeatherToday";



const Wrapper2 = styled.div`
  display: flex;
  margin-top: 40px;
  background-color: rgb(229, 231, 235);
`

const NowTempWidget = styled.div`
  width: 40%;
  height: 500px;
  margin-right: 30px;
`

const WeekWidget = styled.div`
  width: 60%;
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
    border: none;
    font-size: 28px;
    font-weight: bold;
    width: 100%;

      .react-tabs__tab {
      border-radius: 15px 15px 0 0;
      border: none;
      font-weight: bold;
      border: none;
      padding: 20px;
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
    }
`

const StyledTabPanel = styled(TabPanel)`
  width: 100%;
  max-width: 100%;
  height: 100%;
`

const PanelWrapper = styled.div`
  background: linear-gradient(0deg, #77b9f5 0%, #5374E7 100%);
  overflow: hidden;
  flex-grow: 1;
  width: 100%;
  max-width: 650px;
  height: 427px;
  border-radius: 0 15px 15px 15px;
  position: relative;
`

export default function Today (){
  return (
    <Wrapper2>
      <NowTempWidget>
        <WidgetWeatherToday></WidgetWeatherToday>
      </NowTempWidget>
      <WeekWidget>
      <StyledTabs>
        <TabList>
          <Tab>This Week</Tab>
          <Tab>This Month</Tab>
        </TabList>

        <PanelWrapper>
          <StyledTabPanel>
            <SliderWeek />
          </StyledTabPanel>
          <StyledTabPanel>
            <SliderWeek />
          </StyledTabPanel>
        </PanelWrapper>

      </StyledTabs>
      </WeekWidget>
    </Wrapper2>
  )
}
