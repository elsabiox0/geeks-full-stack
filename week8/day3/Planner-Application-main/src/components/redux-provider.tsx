"use client";

import { Provider } from 'react-redux';
import { store } from '@/lib/redux/store';
import type { Middleware } from '@reduxjs/toolkit';

// Middleware to save state to localStorage
const localStorageMiddleware: Middleware = storeAPI => next => action => {
  const result = next(action);
  try {
    const state = storeAPI.getState();
    window.localStorage.setItem('tasks', JSON.stringify(state.tasks));
  } catch (error) {
    console.error("Could not save state to localStorage", error);
  }
  return result;
};

// This is a bit of a workaround to add middleware after initial configuration
// In a real app, you might configure this in configureStore directly.
// But for this setup, we will monkey-patch the dispatch.
let patched = false;
if (typeof window !== 'undefined' && !patched) {
  const originalDispatch = store.dispatch;
  store.dispatch = localStorageMiddleware(store)(originalDispatch);
  patched = true;
}


export function ReduxProvider({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}
