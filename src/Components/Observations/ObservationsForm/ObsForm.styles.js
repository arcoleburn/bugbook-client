import styled from 'styled-components'

export const ObsFormWrapper = styled.form`
margin: 3em 3em;
display: flex; 
flex-direction: row;
justify-content: space-evenly;

font-family: var(--fontSerif);
font-weight: 500;
font-size: var(--fontBig)

label{
    max-width: 100%;
}

button{
    margin: 0 5px;
}
`