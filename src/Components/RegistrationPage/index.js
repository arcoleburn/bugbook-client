import Header from '../Header'
import RegistrationForm from '../RegistrationForm'

const RegistrationPage = (props) => {
  const handleRegistrationSuccess = (user) => {
    const { history } = props;
    history.push('/login');
  };

  return (
    <>
    <Header/>
      <h2>Register</h2>
      <RegistrationForm
        onRegistrationSuccess={handleRegistrationSuccess}
      />
    </>
  );
};

RegistrationPage.defaultProps = {
  history: {
    push: () => {},
  },
};

export default RegistrationPage;
