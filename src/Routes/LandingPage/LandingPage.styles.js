import styled from 'styled-components'

export const IconTripTyc = styled.section`
display: flex;
flex-direction: column;
align-items: center;


@media all and (min-width: 700px){
    width: 100%;
    flex-direction: row;
    justify-content: space-around;
}
`

export const IconSet = styled.div`
display: flex; 
flex-direction: column;
justify-items: center;
text-align: center;
width: 130px;

    p{
        font-family: var(--fontSerif);
        font-weight: 600;
    }
`

export const HowItWorks = styled.section`
display: flex;
flex-direction: column;
align-items: center;
margin: 30px 0;

`
export const ItemSet = styled(IconSet)`
width: 100%;
flex-direction:column;
align-items: center;
p{
    font-weight: 200;
}

img{
    max-width: 75vw;
}
`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;


    button{
        width: 250px;
        height: 100px;
        background-color: var(--seaBlue);
        border-radius: 10px;
        font-size: var(--fontBig);
        margin: 30px 0;
        font-weight: 600;


        @media all and (min-width:700px){
            width: 350px;

            :hover{
                background-color: var(--blueInk);
                color: white;
            }
        }
    }




@media all and (min-width: 700px){
  margin: 0 20vw;
}
`

