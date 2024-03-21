import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../app/hooks";
import { logout } from "../features/authSlice";

const Dashboard = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const logoutHandler = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <div className='flex h-screen items-center justify-center text-orange-600'>
      <h1 className='text-6xl'>Dashboard</h1>
      <button
        type='button'
        className='flex justify-center rounded-md bg-orange-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600'
        onClick={() => logoutHandler()}
      >
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
