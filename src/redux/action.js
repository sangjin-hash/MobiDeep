export const SET_USER_SIDOCODE = 'SET_USER_SIDOCODE';
export const SET_USER_SIGUNGUCODE = 'SET_USER_SIGUNGUCODE';
export const SET_USER_NX = 'SET_USER_NX';
export const SET_USER_NY = 'SET_USER_NY';
export const SET_USER_UTF8 = 'SET_USER_UTF8';

export const SET_DEVICE_LOCATION = 'SET_DEVICE_LOCATION';
export const SET_DEVICE_NAME = 'SET_DEVICE_NAME';
export const SET_DEVICE_QUALITY = 'SET_DEVICE_QUALITY';
export const SET_DEVICE_ETC = 'SET_DEVICE_ETC';

export const setSidoCode = (sidoCode) => (dispatch) => {
  dispatch({
    type: SET_USER_SIDOCODE,
    payload: sidoCode,
  });
};

export const setSigunguCode = (sigunguCode) => (dispatch) => {
  dispatch({
    type: SET_USER_SIGUNGUCODE,
    payload: sigunguCode,
  });
};

export const setNX = (nx) => (dispatch) => {
  dispatch({
    type: SET_USER_NX,
    payload: nx,
  });
};

export const setNY = (ny) => (dispatch) => {
  dispatch({
    type: SET_USER_NY,
    payload: ny,
  });
};

export const setUTF8 = (utf8) => (dispatch) => {
  dispatch({
    type: SET_USER_UTF8,
    payload: utf8,
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
