import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BsPeopleFill} from 'react-icons/bs'
import {GiReceiveMoney} from 'react-icons/gi'
import {AiFillEdit} from 'react-icons/ai'

import {Container, ContInfo, ContImg, Info, Section, InfoComp1, InfoComp2, InfoComp3} from './style/header'


export default function ColorSchemesExample() {
  return (
    <Container>
        <Section>
            <ContInfo></ContInfo>
            <ContImg>
                <img src="https://images.unsplash.com/photo-1617526738882-1ea945ce3e56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=895&q=80" alt="" />
            </ContImg>
        </Section>
        <Info>
              <InfoComp1>
                  <BsPeopleFill></BsPeopleFill>
                  <h2>Alcance</h2>
                  <p>texto alternativo texto</p>
              </InfoComp1>
              <InfoComp2>
                  <GiReceiveMoney></GiReceiveMoney>
                  <h2>Rentabilidade</h2>
                  <p>texto alternativo texto</p>
              </InfoComp2>
              <InfoComp3>
                  <AiFillEdit></AiFillEdit>
                  <h2>Usabilidade</h2>
                  <p>texto alternativo texto</p>
              </InfoComp3>
        </Info>

    </Container>
  );
}