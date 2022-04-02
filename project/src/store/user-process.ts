import { createSlice } from '@reduxjs/toolkit';
import { UserProcess } from '../types/state';
import { AuthorizationStatus, INITIAL_USER, NameSpace } from '../utils/const';

const initialState: UserProcess = {
  authorizationStatus: AuthorizationStatus.Unknown,
  user: INITIAL_USER,
};

export const userProcess = createSlice({
  name: NameSpace.user,
  initialState,
  reducers: {
    requireAuthorization: (state, action) => {
      state.authorizationStatus = action.payload;
    },
    setUserData: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const {requireAuthorization, setUserData} = userProcess.actions;
