import React, {useEffect} from "react"
import styled from "styled-components"
import { tabs } from "../utils/mockdata"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Wrapper2 = styled.div`
  display: flex;
  margin-top: 40px;
`

const NowTempWidget = styled.div`
  width: 50%;
  height: 50px;
  background-color: white;
`

const WeekWidget = styled.div`
  width: 50%;
  background-color: purple;
  height: 50px;
`

const TabWidget = styled.div`
  width: 50px;
  height: 50px;
  background-color: #5374E7;
  display: flex;
  flex-direction: column;
`




export default function Today (){
  return (
    <Wrapper2>
      <NowTempWidget></NowTempWidget>
      <WeekWidget>
        <TabWidget>
          This Week
        </TabWidget>
        <TabWidget>
          This Month
        </TabWidget>
      </WeekWidget>
    </Wrapper2>
  )
}
