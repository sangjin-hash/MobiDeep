import {SET_USER_SIDO, SET_USER_SIGUNGU, SET_USER_DONG} from './action';

const initialState = {
  sido: '',
  sigungu: '',
  dong: '',
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
