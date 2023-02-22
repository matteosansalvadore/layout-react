import React from 'react'
import styled from 'styled-components';
import {cities} from "../utils/mockdata.js"
import { PlusSquare } from 'react-feather';


const Wrapper = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: column;
  height: 450px;
`

const Aggiungi = styled.button`
  font-size: 20px;
  height: 140px;
  width: 100%;
  border-radius: 25px;
  background: none;
  border: none;
  color: rgb(1, 23, 95);
  font-weight: 600;
  font-family: 'Poppins', sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`

const Citta = styled.div`
  width: 100%;
  height: 140px;
  margin-top: 25px;
  background: radial-gradient(circle at left top, rgb(83, 116, 231) 0%, rgb(119, 185, 245) 100%);
  border-radius: 25px;
  color: white;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  overflow: hidden;
  box-shadow: rgb(0 0 0 / 17%) 5px 10px 20px 0px;
`
const NomeCitta = styled.h2`
  font-size: 30px;
  margin: 0;
`

const Date = styled.p`
  font-size: 15px;
  font-weight: 500;
  margin-top: 6px;
  margin-bottom: 6px;
  line-height: 17px;
`

const Hour = styled.p`
  font-size: 12px;
  font-weight: 400;
  margin: 0;
  margin-top: 4px;
`

const ImageWeather = styled.img`
  width: 100px;
  padding: 20px 0;
`

const DateCity = styled.div`


`

const DivNomeCitta = styled.div`
  display: flex;
  justify-content: center;
  overflow: hidden;
  flex-direction: column;
`

const Temperature = styled.div`
  font-size: 50px;
  font-weight: bold;
`

export default function AggiungiCitta () {
  return (
    <Wrapper>
      <Aggiungi><PlusSquare /> Aggiungi Città</Aggiungi>
      {cities.slice(0,2).map(city => (
      <Citta>
        <DivNomeCitta>
          <DateCity><NomeCitta>{city.name}</NomeCitta></DateCity>
          <DateCity><Date>Thursday 2,<br></br>February</Date></DateCity>
          <DateCity><Hour>8:06pm</Hour></DateCity>
        </DivNomeCitta>
        <DivNomeCitta>
          <NomeCitta><ImageWeather src={city.image}></ImageWeather></NomeCitta>
        </DivNomeCitta>
        <DivNomeCitta className='temperature'>
          <Temperature>{city.temperature}°</Temperature>
        </DivNomeCitta>
      </Citta>
      ))}
    </Wrapper>
  )
}
