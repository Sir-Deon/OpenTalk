export const SET_USER = 'SET_USER';
export const SET_USER_TOKEN = 'SET_USER_TOKEN';
export const REGISTER = 'REGISTER';

export const setUser = user => dispatch => {
  dispatch({
    type: SET_USER,
    payload: user,
  });
};

export const setUserToken = userToken => dispatch => {
  dispatch({
    type: SET_USER_TOKEN,
    payload: userToken,
  });
};

export const register = userToken => dispatch => {
  dispatch({
    type: REGISTER,
    payload: userToken,
  });
};
