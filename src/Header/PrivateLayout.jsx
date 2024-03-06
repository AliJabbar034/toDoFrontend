
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';
import Login from '../component/Login';
import { useQuery } from 'react-query';
import { getProfile } from '../store/api';
import { userActions } from '../store/reducer';

function PrivateLayout() {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [token, setToken] = useState(localStorage.getItem('token'));

  const { data, isFetched } = useQuery(['user'], () => getProfile(token), {
    enabled: !!token, 
  });

  useEffect(() => {
    const tok = localStorage.getItem('token');
    setToken(tok);
  }, []);

  useEffect(() => {
    if (isFetched && data) {
      console.log(data);
      dispatch(userActions.setUser(data)); // Dispatch fetched user data
    }
  }, [data, isFetched, dispatch]);

  useEffect(() => {
    if (!token) {
      navigate('/login'); 
    }
  }, [token, navigate]);

  useEffect(() => {
    if (!user) {
      navigate('/login'); 
    }
  }, [user, navigate]);

  return (
    <div>
      {user ? (
        <Outlet />
      ) : (
        <div>Loading...</div>
        // Render loading indicator while user data is being fetched
      )}
    </div>
  );
}

export default PrivateLayout;
