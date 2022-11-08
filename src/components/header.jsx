import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import {Container, ContInfo, ContImg} from './style/header'


export default function ColorSchemesExample() {
  return (
    <Container>
        <ContInfo></ContInfo>
        <ContImg>
            <img src="https://images.unsplash.com/photo-1617526738882-1ea945ce3e56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=895&q=80" alt="" />
        </ContImg>
    </Container>
  );
}