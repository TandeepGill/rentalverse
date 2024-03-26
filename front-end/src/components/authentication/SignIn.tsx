import { useEffect, useState } from "react";
import { useLoginUserMutation } from "../../api/authApi";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../app/hooks";
import { setUser } from "../../features/authSlice";

const initialState = { username: "", password: "" };

const SignIn = () => {
  const [formValue, setFormValue] = useState(initialState);
  const [authUser, setAuthUser] = useState(initialState);
  const { username, password } = formValue;
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  const [
    loginUser,
    {
      data: loginData,
      isSuccess: isLoginSuccess,
      isError: isLoginError,
      error: loginError,
    },
  ] = useLoginUserMutation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    setAuthUser(formValue);
    setFormValue(initialState);
  };

  const loginHandler = async () => {
    if (username && password) {
      await loginUser({ username, password });
    } else {
      console.log("Email and password are required.");
    }
  };

  useEffect(() => {
    if (user.token) {
      navigate("/dashboard");
    }
  }, [user.token, navigate]);

  useEffect(() => {
    if (isLoginSuccess) {
      dispatch(setUser({ token: loginData?.token }));
      console.log(authUser);
      navigate("/dashboard");
    }
  }, [dispatch, isLoginSuccess, authUser, loginData?.token, navigate]);

  useEffect(() => {
    if (isLoginError) {
      console.log("Please enter valid Email and Password and try again!");
    }
  }, [isLoginError]);

  return (
    <>
      <div className='mx-3 flex w-full flex-col items-center rounded-md bg-white px-6 py-6 lg:mx-0 lg:w-1/5 lg:px-8'>
        <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
          <h2 className='mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900'>
            Log in to your account
          </h2>
        </div>

        <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
          <form
            className='space-y-6'
            action='#'
            method='POST'
            onSubmit={submitHandler}
          >
            <div>
              <label
                htmlFor='username'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                Email address
              </label>
              <div className='mt-2'>
                <input
                  id='username'
                  name='username'
                  type='email'
                  value={username}
                  onChange={handleChange}
                  autoComplete='username'
                  required
                  className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <div>
              <div className='flex items-center justify-between'>
                <label
                  htmlFor='password'
                  className='block text-sm font-medium leading-6 text-gray-900'
                >
                  Password
                </label>
              </div>
              <div className='mt-2'>
                <input
                  id='password'
                  name='password'
                  type='password'
                  value={password}
                  onChange={handleChange}
                  autoComplete='current-password'
                  required
                  className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <div>
              <button
                type='submit'
                className='flex w-full justify-center rounded-md bg-orange-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600'
                onClick={() => loginHandler()}
              >
                Log in
              </button>
            </div>
          </form>

          <p className='mt-10 text-center text-sm text-gray-500'>
            Not a member?{" "}
            <Link to='/auth/signup'>
              <span className='font-semibold leading-6 text-orange-600 hover:text-orange-500'>
                Sign up
              </span>
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default SignIn;
