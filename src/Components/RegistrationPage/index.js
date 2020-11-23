import Header from '../Header'
import RegistrationForm from '../RegistrationForm'

const RegistrationPage = (props) => {
  const handleRegistrationSuccess = (user) => {
    console.log('reg success ran')
    const { history } = props;
    history.push('/login');
  };

  return (
    <>
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
