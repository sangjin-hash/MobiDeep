import {
  SET_USER_SIDOCODE,
  SET_USER_SIGUNGUCODE,
  SET_USER_NX,
  SET_USER_NY,
  SET_USER_UTF8,
  SET_DEVICE_LOCATION,
  SET_DEVICE_NAME,
  SET_DEVICE_QUALITY,
  SET_DEVICE_ETC,
} from './action';

const initialState = {
  sidoCode: null,
  sigunguCode: null,
  nx: null,
  ny: null,
  utf8: '',
};

const initialDeviceState = {
  locaiton: '',
  name: '',
  quality: [],
  etcConfig: [],
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER_SIDOCODE:
      return {...state, sidoCode: action.payload};
    case SET_USER_SIGUNGUCODE:
      return {...state, sigunguCode: action.payload};
    case SET_USER_NX:
      return {...state, nx: action.payload};
    case SET_USER_NY:
      return {...state, ny: action.payload};
    case SET_USER_UTF8:
      return {...state, utf8: action.payload};
    default:
      return state;
  }
}

export function deviceReducer(state = initialDeviceState, action) {
  switch (action.type) {
    case SET_DEVICE_LOCATION:
      return {...state, location: action.payload};
    case SET_DEVICE_NAME:
      return {...state, name: action.payload};
    case SET_DEVICE_QUALITY:
      return {...state, quality: action.payload};
    case SET_DEVICE_ETC:
      return {...state, etcConfig: action.payload};
    default:
      return state;
  }
}
