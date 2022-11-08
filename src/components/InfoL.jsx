import React from "react";
import MediaCard from './card'


import {Container, Section, ContTitle} from './style/info'

export default function InfoLink(){
    return(
        <Container>
            <ContTitle>
                 <h1>Projetos</h1>
            </ContTitle>
            <Section>
                <MediaCard img='https://i.pinimg.com/564x/5d/50/54/5d5054ae6ddd2c4d0d7f1af06e330cd2.jpg'></MediaCard> 
                <MediaCard img='https://i.pinimg.com/564x/99/9e/27/999e27ea2f3c7ade8d8c1d8b55129228.jpg'></MediaCard> 
                <MediaCard img='https://i.pinimg.com/564x/b8/b8/31/b8b8314d1002d2436849c91df7239508.jpg'></MediaCard>
            </Section>
            <Section>
                <MediaCard img='https://i.pinimg.com/564x/42/87/08/42870846c041c3caf8e1ab4341e82f73.jpg'></MediaCard> 
                <MediaCard img='https://i.pinimg.com/564x/0a/c4/cc/0ac4cc61399a2e2b8a9f69988ac0c936.jpg'></MediaCard> 
                <MediaCard img='https://i.pinimg.com/564x/a4/04/8e/a4048eb6057809f309ca8f123ff20cd5.jpg'></MediaCard>
            </Section>
        </Container>
    )
}