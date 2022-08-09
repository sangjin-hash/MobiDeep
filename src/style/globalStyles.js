import {Dimensions} from 'react-native';

export const colors = {
  Blue: '#057BDE',
  Black: '#000000',
  White: '#ffffff',
  LightGrey: '#EDEDED',
  LightGrey2: '#DDDDDD',
  LightBlackGrey: '#BBBBBB',
  Grey: '#666666',
  BlackGrey: '#444444',
  MediumGrey: '#888888',
};

export const font = {
  Black: 'NotoSansKR-Black',
  Bold: 'NotoSansKR-Bold',
  Light: 'NotoSansKR-Light',
  Medium: 'NotoSansKR-Medium',
  Regular: 'NotoSansKR-Regular',
  Thin: 'NotoSansKR-Thin',
};

export const text = {
  // AreaConfigurationView
  text1: '기기가 추가되었습니다.\n지역설정을 해주시기 바랍니다.',
  text2:
    '보다 정확한 서비스를 위해\n기계가 설치된 지역 정보를 등록해주시기 바랍니다.',
  text3: '지역등록',
  text4: '필수 기입 항목입니다.',
  text5: '등록',

  // Stage Component
  text6: '1단계 WiFi 설정',
  text7: '2단계',
  text8: '1단계',
  text9: '2단계 추가설정',
};

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
