import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  border-radius: 10px;
  background-color: #ffffea;
  justify-content: space-between;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  a {
    font-family: var(--fontHandwritten);
    font-size: var(--fontBig);
    text-decoration: none;
    color: var(--chocolateBrown);
    border: 1px solid black;
    border-radius: 15px;
    margin: 10px;
    padding: 30px;
  }
`;
