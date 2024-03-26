import SignIn from "../components/authentication/SignIn";
import SignUp from "../components/authentication/SignUp";

const Auth = () => {
  const { pathname } = location;

  return (
    <>
      <div className='flex h-screen items-center justify-center bg-[url(/src/assets/auth-page-background.png)] bg-cover bg-center'>
        {pathname === "/auth/signup" ? <SignUp /> : null}
        {pathname === "/auth/login" ? <SignIn /> : null}
      </div>
    </>
  );
};

export default Auth;
