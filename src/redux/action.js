export const SET_USER_SIDO = 'SET_USER_SIDO';
export const SET_USER_SIGUNGU = 'SET_USER_SIGUNGU';
export const SET_USER_DONG = 'SET_USER_DONG';

export const SET_DEVICE_LOCATION = 'SET_DEVICE_LOCATION';

export const setSido = (sido) => (dispatch) => {
  dispatch({
    type: SET_USER_SIDO,
    payload: sido,
  });
};

export const setSigungu = (sigungu) => (dispatch) => {
  dispatch({
    type: SET_USER_SIGUNGU,
    payload: sigungu,
  });
};

export const setDong = (dong) => (dispatch) => {
  dispatch({
    type: SET_USER_DONG,
    payload: dong,
  });
};

export const setDeviceLocaiton = (location) => (dispatch) => {
  dispatch({
    type: SET_DEVICE_LOCATION,
    payload: location,
  });
};
