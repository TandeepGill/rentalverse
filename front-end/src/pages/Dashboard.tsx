import { useGetUserByTokenQuery } from "../api/userApi";
import { useEffect } from "react";
import { setUser } from "../features/userSlice";
import { useAppDispatch } from "../app/hooks";

const Dashboard = () => {
  const token = JSON.parse(localStorage.getItem("user") || "{}").token;
  const { data: user, error, isLoading } = useGetUserByTokenQuery(token);
  const dispatch = useAppDispatch();

  useEffect(() => {
    console.log(user);
    if (user) {
      dispatch(setUser(user));
    }
  }, [dispatch, user]);

  return (
    <div className='flex h-screen items-center justify-center text-orange-600'>
      <h1 className='text-6xl'>Dashboard</h1>
      <div>
        <h2>User Details</h2>
        {user && (
          <>
            <h2>First Name: {user.firstName}</h2>
            <h2>Last Name: {user.lastName}</h2>
            <h2>Username: {user.username}</h2>
          </>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
