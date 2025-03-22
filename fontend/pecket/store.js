import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice'; // Example reducer

// Create the Redux store
const store = configureStore({
  reducer: {
    user: userReducer, // Add your reducers here
  },
});

export default store; // Export the store