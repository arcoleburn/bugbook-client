import React from 'react';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
    font-family:var(--fontSerif);
    font-weight: 600;
  border: 1px solid black;
    border-radius: 10px;
    margin: 5px 0;
  :hover, :active {
    background-color: var(--blueInk);
    color:var(--white);
  }
  
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  /* text-align: center; */
  margin: 10px;

  div:first-child{
      width:36%;
      min-width: 130px;
  }
  div:nth-child(even) {
      width: 15%;
      text-align: left;
      justify-self:center;
  }
  div:active{
      background-color: var(--blueInk);
  }
`;
