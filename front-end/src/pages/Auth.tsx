import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SignIn from '../components/authentication/SignIn';
import SignUp from '../components/authentication/SignUp';

const Auth = () => {
  const [signUpVisible, setSignUpVisible] = useState(false);

  const getFormData = (data) => {
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
