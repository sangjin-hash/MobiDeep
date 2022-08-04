import {
  StyleSheet,
  Text,
  Pressable,
  Image,
  TouchableOpacity,
} from 'react-native';
import {
  NativeBaseProvider,
  Box,
  ChevronDownIcon,
  VStack,
  HStack,
  ScrollView,
} from 'native-base';
import React, {useState} from 'react';
import {RFValue} from 'react-native-responsive-fontsize';
import {colors, height, width} from '../style/globalStyles';
import ExtendedView from '../components/ExtendedView';

export default function AdditionalConfiguraionView({navigation, route}) {
  const onPass = () => {
    navigation.navigate('AreaConfigurationView');
  };

  return (
    <NativeBaseProvider>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Box style={styles.container}>
          <Box style={styles.body}>
            <Image
              style={styles.image}
              source={require('../../assets/top_tab2.png')}
              resizeMode="stretch"
            />
            <Text style={styles.mainTitle}>추가 설정</Text>
            <Text style={styles.subTitle} numberOfLines={2}>
              {
                'AirDeep의 설치 위치, 기기 이름, 세부 설정 등의\n정보를 설정하거나 변경할 수 있습니다'
              }
            </Text>
            <ExtendedView
              in_height="93"
              ex_height="172"
              title="기기 설치 위치 등록"
              num={1}></ExtendedView>
            <ExtendedView
              in_height="93"
              ex_height="148"
              title="기기 이름 설정"
              num={2}></ExtendedView>
            <ExtendedView
              in_height="64"
              ex_height="260"
              title="나의 공기질에 대한 관심사"
              num={3}></ExtendedView>
            <ExtendedView
              in_height="64"
              ex_height="342"
              title="기타 설정"
              num={4}></ExtendedView>
            <Pressable style={styles.button} onPress={onPass}>
              <Text style={styles.text}>확인</Text>
            </Pressable>
          </Box>
        </Box>
      </ScrollView>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundGrey,
    alignItems: 'center',
  },

  body: {
    width: '100%',
    height: '100%',
    padding: 20,
    alignItems: 'center',
  },
  image: {
    width: width * 350,
    height: height * 41,
    marginBottom: 29,
  },
  mainTitle: {
    fontSize: RFValue(25),
    fontWeight: 'bold',
    color: colors.Blue,
    textAlign: 'center',
    marginBottom: 5,
  },
  subTitle: {
    fontSize: RFValue(15),
    color: colors.textGrey,
    textAlign: 'center',
    marginBottom: 33,
  },
  button: {
    width: width * 70,
    height: height * 36,
    backgroundColor: colors.Blue,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: RFValue(16),
    color: colors.backgroundWhite,
    textAlign: 'center',
  },
});
