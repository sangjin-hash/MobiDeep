import {
  SET_USER_SIDO,
  SET_USER_SIGUNGU,
  SET_USER_DONG,
  SET_DEVICE_LOCATION,
} from './action';

const initialState = {
  sido: '',
  sigungu: '',
  dong: '',
};

const initialDeviceState = {
  locaiton: '',
};

function userReducer(state = initialState, action) {
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

export default userReducer;

function deviceReducer(state = initialDeviceState, action) {
  switch (action.type) {
    case SET_DEVICE_LOCATION:
      return {...state, location: action.payload};
    default:
      return state;
  }
}
