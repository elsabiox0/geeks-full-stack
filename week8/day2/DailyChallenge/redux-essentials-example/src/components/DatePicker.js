// src/components/DatePicker.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { selectDay } from '../features/planner/plannerSlice';

export default function DatePicker() {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(selectDay(e.target.value));
  };

  return <input type="date" onChange={handleChange} />;
}
