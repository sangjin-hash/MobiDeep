import {Dimensions} from 'react-native';

export const colors = {
  Blue: '#057BDE',
  textGrey: '#666666',
  textBlack: '#000000',
  textBlackGrey: '#444444',
  backgroundGrey: '#EDEDED',
  backgroundWhite: '#ffffff',
  iconGrey: '#BBBBBB',
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
export const AreaPMDongCodes = [
  {key: '1', sigungu: '강릉시', dong: '강남동'},
  {key: '2', sigungu: '강릉시', dong: '강동면'},
  {key: '3', sigungu: '고성군', dong: '간성읍'},
  {key: '4', sigungu: '고성군', dong: '거진읍'},
  {key: '5', sigungu: '동해시', dong: '동호동'},
  {key: '6', sigungu: '동해시', dong: '망상동'},
  {key: '7', sigungu: '삼척시', dong: '가곡면'},
  {key: '8', sigungu: '삼척시', dong: '교동'},
  {key: '9', sigungu: '가평군', dong: '가평읍'},
  {key: '10', sigungu: '가평군', dong: '북면'},
  {key: '11', sigungu: '고양시 덕양구', dong: '고양동'},
  {key: '12', sigungu: '고양시 덕양구', dong: '관산동'},
  {key: '13', sigungu: '고양시 일산동구', dong: '고봉동'},
  {key: '14', sigungu: '고양시 일산동구', dong: '마두1동'},
  {key: '15', sigungu: '고양시 일산서구', dong: '대화동'},
  {key: '16', sigungu: '고양시 일산서구', dong: '송산동'},
  {key: '17', sigungu: '거제시', dong: '거제면'},
  {key: '18', sigungu: '거제시', dong: '고현동'},
  {key: '19', sigungu: '거창군', dong: '가북면'},
  {key: '20', sigungu: '거창군', dong: '가조면'},
  {key: '21', sigungu: '고성군', dong: '개천면'},
  {key: '22', sigungu: '고성군', dong: '거류면'},
  {key: '23', sigungu: '김해시', dong: '내외동'},
  {key: '24', sigungu: '김해시', dong: '대동면'},
];
