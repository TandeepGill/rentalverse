import { Navigate, Route, Routes } from 'react-router-dom';
import Auth from './pages/Auth';
import Dashboard from './pages/Dashboard';
import { useAppDispatch } from './app/hooks';
import { useEffect } from 'react';
import { setUser } from './features/authSlice';
import PrivateRoute from './components/authentication/PrivateRoute';

function App() {
  const dispatch = useAppDispatch();
  const user = JSON.parse(localStorage.getItem('user') || '{}');
  useEffect(() => {
    dispatch(setUser(user));
  }, [dispatch, user]);

  return (
    <Routes>
      <Route path='/' element={<Navigate to='/auth' replace />} />
      <Route path='/auth' element={<Auth />} />
      <Route
        path='/dashboard'
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}

export default App;
