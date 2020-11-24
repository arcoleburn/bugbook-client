import styled from 'styled-components'
export const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
background-color: var(--ivoryPaper);

`
export const EntryForm = styled.form`
display:flex;
flex-direction:column;
background-color: var(--ivoryPaper);
margin: 30px;
padding-bottom: 0%;

    select, input, textarea{
        margin: 10px 0;
        border-radius: 10px; 
    }

    label{
        font-family: var(--fontSerif);
        font-size: var(--fontMed)
    }
    @media all and (min-width: 700px){
    max-width: 50%;
}
`