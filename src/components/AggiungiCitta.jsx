import React from 'react'
import styled from 'styled-components';

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
  background-color: #577CE9;
  border-radius: 25px;
`

export default function AggiungiCitta () {
  return (
    <Wrapper>
      <Aggiungi><i class="fa-light fa-square-plus"></i>Aggiungi Città</Aggiungi>
      <Citta></Citta>
      <Citta></Citta>
    </Wrapper>
  )
}
