import { Link } from 'react-router-dom';
import TokenService from '../../services/token.service';
import userInfoService from '../../services/user-info-service';
import {Wrapper} from './Header.styles'
const Header = (props) => {
  const handleLogoutClick = () => {
    TokenService.clearAuthToken()
   // userInfoService.clearUserInfo();
    props.setUserId(null)
    props.setFirstName(null)
  };

  const renderLogoutLink = () => {
    return <Link onClick={handleLogoutClick} to="/"> Logout</Link>;
  };

  const renderLoginLink = () => {
    return (
      <>
        <Link to="/register">|Register|</Link>
        <Link to="/login">|Login|</Link>
      </>
    );
  };

  return (
    <Wrapper>
      <Link to="/">BugBook</Link>
      <h2>{props.children}</h2>
      {TokenService.hasAuthToken()
        ? renderLogoutLink()
        : renderLoginLink()}
    </Wrapper>
  );
};

export default Header;
