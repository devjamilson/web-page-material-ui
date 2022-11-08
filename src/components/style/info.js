import styled from "@emotion/styled";

export const Container = styled.div`
    margin-top: 10vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    div{
        margin-left: 20px;
        div{
            margin-left: 0px;
        }
    }
`

export const Section = styled.section`
    display: flex;
    margin-top: 5vh;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    section{
        height: 15vh;
    }
`

export const ContTitle = styled.div`
    display: flex;
    flex-direction: row;
    height: 10vh;
    align-items: center;
    h1{
        color:#0D6EFD;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-weight: 700;
    }

`