import Header from '../Header'
import { Wrapper } from '../NewEntryForm/NewEntryForm.styles';
import RegistrationForm from '../RegistrationForm'

const RegistrationPage = (props) => {
  const handleRegistrationSuccess = (user) => {
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
