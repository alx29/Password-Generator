import { configureStore } from '@reduxjs/toolkit';
import passwordGeneratorReducer from './reducer';

const store = configureStore({
  reducer: {
    passwordGenerator: passwordGeneratorReducer,
  },
});

export default store;
