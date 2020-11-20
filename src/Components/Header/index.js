import { Link } from 'react-router-dom';
import TokenService from '../../services/token.service';
import userInfoService from '../../services/user-info-service';
import {
  BorderBar,
  HeaderWrapper,
  LinkWrapper,
  
} from './Header.styles';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBug,
  faSearch,
  
} from '@fortawesome/free-solid-svg-icons';


const Header = (props) => {
  const handleLogoutClick = () => {
    TokenService.clearAuthToken();
    // userInfoService.clearUserInfo();
    props.setUserId(null);
    props.setFirstName(null);
    props.setEntries([]);
  };

  const renderLogoutLink = () => {
    return (
      <LinkWrapper>
        <Link onClick={handleLogoutClick} to="/">
          {' '}
          Logout
        </Link>
      </LinkWrapper>
    );
  };

  const renderLoginLink = () => {
    return (
      <LinkWrapper>
        <Link to="/register">|Register|</Link>
        <Link to="/login">|Login|</Link>
      </LinkWrapper>
    );
  };
  return (
    <>
    <HeaderWrapper>
      <LinkWrapper>
        <span
          style={{ marginRight: '35px' }}
          className="fa-layers fa-fw"
        >
          <FontAwesomeIcon
            // className='fa-rotate-180'
            transform="rotate--30"
            icon={faBug}
            style={{ marginLeft: '11px', marginBottom: '5px' }}
          />
          <FontAwesomeIcon icon={faSearch} size="3x" />
        </span>

        <Link to="/">
          <h1>BugBook</h1>
        </Link>
      </LinkWrapper>

      {TokenService.hasAuthToken()
        ? renderLogoutLink()
        : renderLoginLink()}
      
    </HeaderWrapper>
    <BorderBar></BorderBar>
    </>
  );
};

export default Header;
