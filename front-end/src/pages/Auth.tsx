import SignIn from "../components/authentication/SignIn";
import SignUp from "../components/authentication/SignUp";

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
  const { pathname } = location;

  const getFormData = (data: newUser | existingUser) => {
    console.log("Form Data: ", data);
  };

  return (
    <>
      <div className='flex h-screen items-center justify-center bg-[url(/src/assets/auth-page-background.png)] bg-cover bg-center'>
        {pathname === "/auth/signup" ? <SignUp onSubmit={getFormData} /> : null}
        {pathname === "/auth/login" ? <SignIn onSubmit={getFormData} /> : null}
      </div>
    </>
  );
};

export default Auth;
