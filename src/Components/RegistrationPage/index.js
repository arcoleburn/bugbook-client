import Header from '../Header'
import { Wrapper } from '../NewEntryForm/NewEntryForm.styles';
import RegistrationForm from '../RegistrationForm'

const RegistrationPage = (props) => {
  const handleRegistrationSuccess = (user) => {
    console.log('reg success ran')
    const { history } = props;
    history.push('./login');
  };

  return (
    <Wrapper>
      <h2>Register</h2>
      <RegistrationForm
        onRegistrationSuccess={handleRegistrationSuccess}
      />
    </Wrapper>
  );
};

RegistrationPage.defaultProps = {
  history: {
    push: () => {},
  },
};

export default RegistrationPage;
