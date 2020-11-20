import styled from 'styled-components'

export const Wrapper = styled.div`
background-color: var(--ivoryPaper);

    h2{
        margin:0;
        padding: 10px 0;
    }
    padding: 0 1em;
    padding-bottom: 100%;
     h3{
         text-align: center;
     }
`
export const ControlButtons = styled.div`
width:100%;
display: flex;
flex-direction: row-reverse;
justify-content: center;

    button{
        margin: 5px 5px;
    }
`

export const LabelBar = styled.div`
display:flex;
flex-direction: row;
justify-content: space-between;
font-weight: 600;
div:first-child{
      width:36%;
  }
  div:nth-child(even) {
      width: 15%;
      text-align: left;
      justify-self:center;
  }
`