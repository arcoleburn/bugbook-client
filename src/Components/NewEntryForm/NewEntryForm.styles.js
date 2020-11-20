import styled from 'styled-components'
export const Wrapper = styled.form`
background-color: var(--ivoryPaper)
`
export const EntryForm = styled.form`
display:flex;
flex-direction:column;
background-color: var(--ivoryPaper);
margin: 30px;
padding-bottom: 100%;

    select, input, textarea{
        margin: 10px 0;
    }

    label{
        font-family: var(--fontSerif);
        font-size: var(--fontMed)
    }
`