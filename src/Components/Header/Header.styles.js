import styled from 'styled-components'

const HeaderWrapper = styled.nav`
background-color: #8a7968;

display:flex;
flex-direction: row;
justify-content: space-between;
margin: 0px;
padding: 20px;
font-family: var(--fontSerif);
font-weight:800;
align-items:center;

h1{
    font-size: var(--fontSuperBig);
    margin: 0;
}
a{
    text-decoration: none;
    color: var(--chocolateBrown)
}
`

const LinkWrapper=styled.nav`
display:flex;
flex-direction: row;
justify-content: space-between;
font-family: var(--fontSerif);
align-items: center;

`

export {HeaderWrapper, LinkWrapper}