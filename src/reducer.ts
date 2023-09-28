import { createSlice } from '@reduxjs/toolkit';
import { generatePasswordAlgorithm } from './generatePasswordFunction';

export interface IPasswordState {
	includeUppercase: boolean;
	includeLowercase: boolean;
	includeNumbers: boolean;
	includeSpecialChars: boolean;
	password: string;
	length: number;
}

const initialState: IPasswordState = {
  password: 'Generate',
  length: 10,
  includeUppercase: false,
  includeLowercase: false,
  includeNumbers: false,
  includeSpecialChars: false,
};

// Create a password generator slice
const passwordGeneratorSlice = createSlice({
  name: 'passwordGenerator',
  initialState,
  reducers: {
    setPasswordLength: (state, action) => {
      state.length = action.payload;
    },
    toggleUppercase: (state) => {
      state.includeUppercase = !state.includeUppercase;
    },
    toggleLowercase: (state) => {
      state.includeLowercase = !state.includeLowercase;
    },
    toggleNumbers: (state) => {
      state.includeNumbers = !state.includeNumbers;
    },
    toggleSpecialChars: (state) => {
      state.includeSpecialChars = !state.includeSpecialChars;
    },
    generatePassword: (state) => {
      state.password = generatePasswordAlgorithm(state);
    },
  },
});
export const {
  setPasswordLength,
  toggleUppercase,
  toggleLowercase,
  toggleNumbers,
  toggleSpecialChars,
  generatePassword,
} = passwordGeneratorSlice.actions;

export default passwordGeneratorSlice.reducer;
