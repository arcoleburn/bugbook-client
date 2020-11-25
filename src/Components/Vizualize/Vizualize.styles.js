import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: var(--ivoryPaper);
  display: flex;
  flex-direction: column;

  font-family: var(--fontSerif);
  h2 {
    margin: 5px;
    padding: 10px 0;
  }
  padding: 0 1em;
  h3 {
    text-align: center;
  }

  p {
    font-family: var(--fontSerif);
  }
  button {
    margin-top: 5px;
    align-self: center;
    max-width: 200px;
  }
  #home {
    justify-self: flex-end;
  }

  #chartdiv {
    min-height: 400px;
  }
`;

export const ControlButtons = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;

  button {
    margin: 5px 5px;
  }
`;
