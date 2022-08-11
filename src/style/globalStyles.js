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
  text5: '    등록    ',

  // Stage Component
  text6: '1단계 WiFi 설정',
  text7: '2단계',
  text8: '1단계',
  text9: '2단계 추가설정',

  // AdditionalConfigurationView
  text10: '추가 설정',
  text11:
    'AirDeep의 설치 위치, 기기 이름, 세부 설정 등의\n정보를 설정하거나 변경할 수 있습니다',
  text12: '기기 설치 위치 등록',
  text13: '기기 이름 설정',
  text14: '나의 공기질에 대한 관심사',
  text15: '기타 설정',
  text16: '등록된 정보 없음',
  text17: '기기이름을 입력해주세요',
  text18: '(예시: 수원집, 서울본가 거실,마이하우스 등)',
  text19: '다중선택 가능',
  text20: '  확인  ',
  text21: '화재와 같은 이상 공기질 경우 알림 받기',
  text22: '이상공기질 일 경우 알림받기',
  text23: '심야(오후 10시 ~ 오전 6시)에 알림\n울리지 않기',
  text24: '화면 밝기 낮추기',
  text25: '심야(오후 10시 ~ 오전 6시)에 낮추기',
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
