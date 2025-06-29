// src/components/UserData.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from '../features/userSlice';

const UserData = () => {
  const dispatch = useDispatch();
  const { userData, loading, error } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  return (
    <div>
      <h2>User Info</h2>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {userData && (
        <div>
          <p><strong>Name:</strong> {userData.name}</p>
          <p><strong>Email:</strong> {userData.email}</p>
          <p><strong>Phone:</strong> {userData.phone}</p>
        </div>
      )}
    </div>
  );
};

export default UserData;
