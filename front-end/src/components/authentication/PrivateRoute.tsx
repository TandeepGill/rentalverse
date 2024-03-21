import { useSelector } from "react-redux";
import { selectAuth } from "../../features/authSlice";
import LoadingToRedirect from "./LoadingToRedirect";
import { ReactNode } from "react";

const PrivateRoute = ({ children }: { children: ReactNode }) => {
  const { token } = useSelector(selectAuth);

  return token ? children : <LoadingToRedirect />;
};

export default PrivateRoute;
