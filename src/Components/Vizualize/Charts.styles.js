import styled from 'styled-components'

export const ChartWrapper = styled.div`
 display: flex;
 flex-direction: column;

    padding: 1em;

     h3{
         text-align: center;
         margin-bottom: 0;
     }

     p{ 
         font-family: var(--fontSerif);
     }
     svg{
         border: 1px solid var(--blueInk);
         border-radius: 10px;
         min-height: 365px;
         max-height: 500px;
         
     }
     button{
         margin-top:20px;
        
     }

`