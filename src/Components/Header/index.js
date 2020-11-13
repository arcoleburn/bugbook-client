import { Link } from 'react-router-dom';
import TokenService from '../../services/token.service';

const Header = (props) => {
  const handleLogoutClick = () => {
    TokenService.clearAuthToken();
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
    <>
      <Link to="/">BugBook</Link>
      <h2>{props.children}</h2>
      {TokenService.hasAuthToken()
        ? renderLogoutLink()
        : renderLoginLink()}
    </>
  );
};

export default Header;
