import styled from "@emotion/styled";

export const Container = styled.div`
    height: 110vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Section = styled.section`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 80vh;
    background-color:#0D6EFD;

`

export const ContInfo = styled.div`
    width: 50%;
`

export const ContImg = styled.div`
    height: 80vh;
    width: 50%;
    img{
        height: 100%;
        width: 100%;
    }
`

export const Info = styled.div`
    margin-top: -50px;
    z-index: 2;
    background-color: #ffff;
    border-radius: 15px;
    box-shadow: rgba(17, 17, 26, 0.1) 0px 0px 16px;
    height: 25vh;
    width: 60%;
    display: flex;
    flex-direction: row;
    justify-content:space-between;
  
`
export const InfoComp1 = styled.div`
       width: 33.33%;
       height: 100%;
       background-color: #fff;
       border-radius:15px  0px 0px 15px;
       display: flex;
       flex-direction: column;
        align-items: center;
       *{
            font-size: 60px;  
            color: #0045f6;       
       }  h2{
        font-size: 18px;  
     }
     p{
        font-size: 12px;
     }

`

export const InfoComp2 = styled.div`
    width: 33.33%;
    height: 100%;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    *{
        font-size: 60px;  
        color: #0045f6;         
    } 
    h2{
        font-size: 18px;  
    }
    p{
        font-size: 12px;
     }
`

export const InfoComp3 = styled.div`
    width: 33.33%;
    height: 100%;
    background-color: #fff;
    border-radius: 0px 15px 15px 0px ;
    display: flex;
    flex-direction: column;
    align-items: center;
    *{
            font-size: 60px;         
     }
     h2{
        font-size: 18px;  
     }
     p{
        font-size: 12px;
     }
`