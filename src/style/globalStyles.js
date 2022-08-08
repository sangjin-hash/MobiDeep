import {Dimensions} from 'react-native';

export const colors = {
  Blue: '#057BDE',
  Grey: '#666666',
  textBlack: '#000000',
  textBlackGrey: '#444444',
  backgroundGrey: '#EDEDED',
  backgroundWhite: '#ffffff',
  iconGrey: '#BBBBBB',
  lightGrey: '#DDDDDD',
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
