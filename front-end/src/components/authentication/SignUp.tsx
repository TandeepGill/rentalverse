import { useEffect, useState } from "react";
import { useRegisterUserMutation } from "../../api/authApi";
import { useDispatch } from "react-redux";
import { useAppDispatch } from "../../app/hooks";
import { Link, useNavigate } from "react-router-dom";
import { setUser } from "../../features/authSlice";

interface formData {
  firstName: string;
  lastName: string;
  username: string;
  password: string;
}

const initialState = {
  firstName: "",
  lastName: "",
  username: "",
  password: "",
};

const SignUp = (props: { onSubmit: (data: formData) => void }) => {
  const { onSubmit } = props;
  const [formValue, setFormValue] = useState(initialState);
  const { firstName, lastName, username, password } = formValue;
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formValue);
    setFormValue(initialState);
  };

  const [
    registerUser,
    {
      data: registerData,
      isSuccess: isRegisterSuccess,
      isError: isRegisterError,
      error: registerError,
    },
  ] = useRegisterUserMutation();

  const registerHandler = async () => {
    if (firstName && lastName && username && password) {
      await registerUser({
        firstName,
        lastName,
        username,
        password,
        role: "USER",
      });
    }
  };

  useEffect(() => {
    if (isRegisterSuccess) {
      useDispatch;
      dispatch(setUser({ token: registerData?.token }));
      navigate("/dashboard");
    }
  }, [dispatch, isRegisterSuccess, navigate, registerData?.token]);

  useEffect(() => {
    if (isRegisterError) {
      console.log("That Email already exists, please login to continue!");
    }
  }, [isRegisterError]);

  return (
    <>
      <div className='flex w-full flex-col items-center rounded-md bg-white px-6 py-6 lg:w-1/5 lg:px-8'>
        <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
          <h2 className='mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900'>
            Sign up for your account
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
                htmlFor='firstName'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                First name
              </label>
              <div className='mt-2'>
                <input
                  id='firstName'
                  name='firstName'
                  type='text'
                  value={firstName}
                  onChange={handleChange}
                  autoComplete='given-name'
                  required
                  className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <div>
              <label
                htmlFor='lastName'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                Last name
              </label>
              <div className='mt-2'>
                <input
                  id='lastName'
                  name='lastName'
                  type='text'
                  value={lastName}
                  onChange={handleChange}
                  autoComplete='family-name'
                  required
                  className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>

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
                onClick={() => registerHandler()}
              >
                Sign up
              </button>
            </div>
          </form>

          <p className='mt-10 text-center text-sm text-gray-500'>
            Already a member?{" "}
            <Link to='/auth/login'>
              <span className='font-semibold leading-6 text-orange-600 hover:text-orange-500'>
                Log in
              </span>
            </Link>
          </p>
        </div>
        {/* </div> */}
      </div>
    </>
  );
};

export default SignUp;
