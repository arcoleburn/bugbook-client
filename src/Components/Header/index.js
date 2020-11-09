import {Link} from 'react-router-dom'

const Header = (props) => {
  return (
    <>
    <Link to='/'>BugBook</Link>
    <h2>
      {props.children}
    </h2>
    </>
  );
};

export default Header;
