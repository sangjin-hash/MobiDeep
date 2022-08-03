import {
  SET_USER_SIDO,
  SET_USER_SIGUNGU,
  SET_USER_DONG,
  SET_DEVICE_LOCATION,
  SET_DEVICE_NAME,
  SET_DEVICE_QUALITY,
  SET_DEVICE_ETC,
} from './action';

const initialState = {
  sido: '',
  sigungu: '',
  dong: '',
};

const initialDeviceState = {
  locaiton: '',
  name: '',
  quality: [],
  etcConfig: [],
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER_SIDO:
      return {...state, sido: action.payload};
    case SET_USER_SIGUNGU:
      return {...state, sigungu: action.payload};
    case SET_USER_DONG:
      return {...state, dong: action.payload};
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
