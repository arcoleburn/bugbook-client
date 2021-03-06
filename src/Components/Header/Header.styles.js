import styled from 'styled-components';

const HeaderWrapper = styled.nav`
  background-color: var(--coffeeBrown);

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0px;
  padding: 20px;
  font-family: var(--fontSerif);
  font-weight: 800;
  align-items: center;
  border-radius: 14px;
  :hover {
    color: var(--blueInk);
  }

  h1 {
    font-size: var(--fontSuperBig);
    margin: 0;
  }
  a {
    text-decoration: none;
    color: var(--chocolateBrown);

    :hover {
      color: var(--blueInk);
    }
  }
`;

const LinkWrapper = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-family: var(--fontSerif);
  align-items: center;
`;
const BorderBar = styled.div`
  width: 100%;
  border-bottom: 10px;
  box-shadow: 12px, 12px, 2px, 4px, rgba(0, 0, 0, 1);
`;

export { HeaderWrapper, LinkWrapper, BorderBar };
