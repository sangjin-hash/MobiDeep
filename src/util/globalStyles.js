import {Dimensions} from 'react-native';

export const colors = {
  textBlue: '#057BDE',
  textGrey: '#666666',
  textBlack: '#000000',
  backgroundGrey: '#EDEDED',
  backgroundWhite: '#ffffff',
};

export const font = {};

export const basicDimensions = {
  height: 844,
  width: 390,
};

export const height = (
  Dimensions.get('screen').height *
  (1 / basicDimensions.height)
).toFixed(2);

export const width = (
  Dimensions.get('screen').width *
  (1 / basicDimensions.width)
).toFixed(2);

export const AreaPMCodes = [
  {key: '1', sido: '강원도'},
  {key: '2', sido: '경기도'},
  {key: '3', sido: '경상남도'},
];
export const AreaPMSigunguCodes = [
  {key: '1', sido: '강원도', sigungu: '강릉시'},
  {key: '2', sido: '강원도', sigungu: '고성군'},
  {key: '3', sido: '강원도', sigungu: '동해시'},
  {key: '4', sido: '강원도', sigungu: '삼척시'},
  {key: '5', sido: '경기도', sigungu: '가평군'},
  {key: '6', sido: '경기도', sigungu: '고양시 덕양구'},
  {key: '7', sido: '경기도', sigungu: '고양시 일산동구'},
  {key: '8', sido: '경기도', sigungu: '고양시 일산서구'},
  {key: '9', sido: '경상남도', sigungu: '거제시'},
  {key: '10', sido: '경상남도', sigungu: '거창군'},
  {key: '11', sido: '경상남도', sigungu: '고성군'},
  {key: '12', sido: '경상남도', sigungu: '김해시'},
];
