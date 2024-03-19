import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SignIn from '../components/authentication/SignIn';
import SignUp from '../components/authentication/SignUp';

interface newUser {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

interface existingUser {
  email: string;
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
