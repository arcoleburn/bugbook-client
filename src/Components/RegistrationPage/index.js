import RegistrationForm from '../RegistrationForm';

import { Wrapper } from '../NewEntryForm/NewEntryForm.styles';

const RegistrationPage = (props) => {
  const handleRegistrationSuccess = (user) => {
    console.log('reg success ran');
    const { history } = props;
    console.log('history', history);
    history.push('/login');
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
