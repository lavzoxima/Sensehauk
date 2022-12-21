import { createSlice, unwrapResult } from '@reduxjs/toolkit';

// Files
import { login, getStarWarChar, getStarWarMovie } from '../../api/auth';
import { strings } from '../../constants';
import { checkEmail, checkPassword } from '../../utils/domUtils';
import { setLoading, updatedShowModal } from '../common';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    auth: false,
    user_data: null,
    tokens: null,
    starChar: [],
    setCharMovie: []
  },
  reducers: {
    updatedAuthState(state, action) {
      state.auth = true;
      state.user_data = action.payload;
    },
    signOut(state) {
      state.auth = false;
      state.tokens = null;
      state.user_data = null;
    },
    setTokens(state, action) {
      state.tokens = action.payload;
    },
    setCharData(state, action) {
      state.starChar = action.payload;
    },
    setCharMovieData(state, action) {

      state.setCharMovie = action.payload
    }
  },
});

export const loginManager = (apiCall: any, data: any) => {
  return async (dispatch: any) => {
    if (!data.email.trim() || !data.password.trim()) {
      return dispatch(
        updatedShowModal({
          show: true,
          message: strings.common.fill_all_fields,
          type: 'error',
        }),
      );
    }
    if (!checkEmail(data.email)) {
      return dispatch(
        updatedShowModal({
          show: true,
          message: strings.common.valid_email,
          type: 'error',
        }),
      );
    }
    if (!checkPassword(data.password)) {
      return dispatch(
        updatedShowModal({
          show: true,
          message: strings.common.valid_password,
          type: 'error',
        }),
      );
    }

    try {
      dispatch(setLoading(true));
      const res = await login(apiCall, data);
      if (res.responseCode === 200) {
        dispatch(updatedAuthState(res.data));
        dispatch(setTokens(res.data.jwtToken));
      } else {
        return dispatch(
          updatedShowModal({
            show: true,
            message: res?.failureMsg ? res.failureMsg : res.successMsg,
            type: 'error',
          }),
        );
      }
    } catch (error: any) {
      dispatch(
        updatedShowModal({
          show: true,
          message: error.message,
          type: 'error',
        }),
      );
    } finally {
      dispatch(setLoading(false));
    }
  };
};



export const getStarWar = (apiCall: any, data: any) => {

  return async (dispatch: any) => {

    try {

      dispatch(setLoading(true));

      const res = await getStarWarChar(apiCall);

      if (res.results && res.results.length) {

        dispatch(setCharData(res.results));

      } else {
        return dispatch(
          updatedShowModal({
            show: true,
            message: res?.failureMsg ? res.failureMsg : res.successMsg,
            type: 'error',
          }),
        );
      }
    } catch (error: any) {

      dispatch(
        updatedShowModal({
          show: true,
          message: error.message,
          type: 'error',
        }),
      );
    } finally {
      dispatch(setLoading(false));
    }
  };
};


export const getStarMovie = (apiCall: any, url: any) => {

  return async (dispatch: any) => {

    try {

      dispatch(setLoading(true));

      const res = await getStarWarMovie(apiCall, url);
      console.log('JKL', res)
      if (res) {

        dispatch(setCharMovieData(res));

      } else {
        return dispatch(
          updatedShowModal({
            show: true,
            message: res?.failureMsg ? res.failureMsg : res.successMsg,
            type: 'error',
          }),
        );
      }
    } catch (error: any) {
      console.log(error)
      dispatch(
        updatedShowModal({
          show: true,
          message: error.message,
          type: 'error',
        }),
      );
    } finally {
      dispatch(setLoading(false));
    }
  };
};

export const { updatedAuthState, signOut, setTokens, setCharData, setCharMovieData } = authSlice.actions;

export default authSlice.reducer;
