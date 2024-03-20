import { useState } from 'react';
import SignIn from '../components/authentication/SignIn';
import SignUp from '../components/authentication/SignUp';

interface newUser {
  firstName: string;
  lastName: string;
  username: string;
  password: string;
}

interface existingUser {
  username: string;
  password: string;
}

const Auth = () => {
  const [signUpVisible, setSignUpVisible] = useState(false);

  const getFormData = (data: newUser | existingUser) => {
    console.log('Form Data: ', data);
  };

  const signUpHandler = () => {
    signUpVisible ? setSignUpVisible(false) : setSignUpVisible(true);
  };

  return (
    <>
      <div className='h-screen flex items-center justify-center'>
        {signUpVisible ? (
          <SignUp signUpVisibleCheck={signUpHandler} onSubmit={getFormData} />
        ) : (
          <SignIn signUpVisibleCheck={signUpHandler} onSubmit={getFormData} />
        )}
      </div>
    </>
  );
};

export default Auth;
