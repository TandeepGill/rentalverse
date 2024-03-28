import { Route, Routes } from "react-router-dom";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import { useAppDispatch } from "./app/hooks";
import { useEffect } from "react";
import { setUser } from "./features/authSlice";
import PrivateRoute from "./components/authentication/PrivateRoute";
import Landing from "./pages/Landing";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Error404 from "./components/error/Error404";

function App() {
  const dispatch = useAppDispatch();
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  useEffect(() => {
    dispatch(setUser(user));
  }, [dispatch, user]);

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/auth/login' element={<Auth />} />
        <Route path='/auth/signup' element={<Auth />} />
        <Route
          path='/dashboard'
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route path='*' element={<Error404 />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
