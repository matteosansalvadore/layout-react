import React from 'react'
import styled from 'styled-components';
import {cities} from "../utils/mockdata.js"

const Wrapper = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: column;
`

const Aggiungi = styled.button`
  font-size: 20px;
  height: 140px;
  width: 100%;
  border-radius: 25px;
  background: none;
  border: none;
  margin-bottom: 15px;
`

const Citta = styled.div`
  width: 100%;
  height: 140px;
  margin-top: 15px;
  margin-bottom: 15px;
  background: radial-gradient(circle at left top, rgb(83, 116, 231) 0%, rgb(119, 185, 245) 100%);
  border-radius: 25px;
  color: white;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
`
const NomeCitta = styled.h2`
  font-size: 26px;
`

const DivNomeCitta = styled.div`
  height: 140px;
`

export default function AggiungiCitta () {
  return (
    <Wrapper>
      <Aggiungi><i class="fa-light fa-square-plus"></i>Aggiungi Città</Aggiungi>
      {cities.map(city => (
      <Citta>
        <DivNomeCitta>
          <NomeCitta>{city.name}</NomeCitta>
        </DivNomeCitta>
        <DivNomeCitta>
          <NomeCitta>Torino</NomeCitta>
        </DivNomeCitta>
        <DivNomeCitta>
          <NomeCitta>{city.temperature}</NomeCitta>
        </DivNomeCitta>
      </Citta>
      ))}
    </Wrapper>
  )
}
