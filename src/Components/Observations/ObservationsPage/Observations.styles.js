import styled from 'styled-components'

export const Wrapper = styled.div`
display: flex;
flex-direction: column;
h2{
    font-family:var(--fontSerif);
    text-align: center;
    margin-bottom: 2px;
}
ul{
    align-self: center;
    list-style-type: none;
    padding: 0;
    margin: 0;
    max-width: 85%;
}
li{
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    font-family: var(--fontHandwritten);
    font-size: var(--fontSmall);
    border: 1px solid black;
    border-radius: 10px;
    padding: 5px 5px;
    margin: 5px 0;

    button{
        max-height: 2em;
        margin-left: 2em;
    }
}

`