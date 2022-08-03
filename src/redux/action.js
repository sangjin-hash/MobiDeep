export const SET_USER_SIDO = 'SET_USER_SIDO';
export const SET_USER_SIGUNGU = 'SET_USER_SIGUNGU';
export const SET_USER_DONG = 'SET_USER_DONG';

export const SET_DEVICE_LOCATION = 'SET_DEVICE_LOCATION';
export const SET_DEVICE_NAME = 'SET_DEVICE_NAME';
export const SET_DEVICE_QUALITY = 'SET_DEVICE_QUALITY';
export const SET_DEVICE_ETC = 'SET_DEVICE_ETC';

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

export const setDeviceLocation = (location) => (dispatch) => {
  dispatch({
    type: SET_DEVICE_LOCATION,
    payload: location,
  });
};

export const setDeviceName = (name) => (dispatch) => {
  dispatch({
    type: SET_DEVICE_NAME,
    payload: name,
  });
};

export const setDeviceQuality = (quality) => (dispatch) => {
  dispatch({
    type: SET_DEVICE_QUALITY,
    payload: quality,
  });
};

export const setDeviceEtc = (etc) => (dispatch) => {
  dispatch({
    type: SET_DEVICE_ETC,
    payload: etc,
  });
};
