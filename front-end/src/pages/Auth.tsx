import { useState } from 'react';
import SignIn from '../components/authentication/SignIn';
import SignUp from '../components/authentication/SignUp';

const Auth = () => {
  const [signUpVisible, setSignUpVisible] = useState(false);

  const signUpHandler = () => {
    signUpVisible ? setSignUpVisible(false) : setSignUpVisible(true);
  };

  return (
    <>
      <div className='h-screen flex items-center justify-center'>
        {signUpVisible ? (
          <SignUp signUpVisibleCheck={signUpHandler} />
        ) : (
          <SignIn signUpVisibleCheck={signUpHandler} />
        )}
      </div>
    </>
  );
};

export default Auth;
