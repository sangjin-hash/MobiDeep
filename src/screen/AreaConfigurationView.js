import {StyleSheet, View, Text, Pressable, Image} from 'react-native';
import {NativeBaseProvider, Select, Box} from 'native-base';
import React from 'react';
import {
  colors,
  height,
  width,
  AreaPMCodes,
  AreaPMSigunguCodes,
} from '../util/globalStyles';

export default function AreaConfigurationView({navigation}) {
  const onPass = () => {
    navigation.navigate('TestView');
  };

  return (
    <NativeBaseProvider>
      <Box style={styles.container}>
        <Box style={styles.body}>
          <Image
            style={styles.image}
            source={require('../../assets/top_tap.png')}
            resizeMode="stretch"
          />
          <Text style={styles.mainTitle} numberOfLines={2}>
            {'기기가 추가되었습니다.\n지역설정을 해주시기 바랍니다.'}
          </Text>
          <Text style={styles.subTitle} numberOfLines={2}>
            {
              '보다 정확한 서비스를 위해\n기계가 설치된 지역 정보를 등록해주시기 바랍니다.'
            }
          </Text>

          <Pressable style={styles.button} onPress={onPass}>
            <Text style={styles.subTitle}>버튼</Text>
          </Pressable>
        </Box>
      </Box>
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
    height: height * 790,
    padding: width * 20,
  },
  image: {
    width: width * 350,
    height: height * 41,
    marginBottom: width * 29,
  },
  mainTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    color: colors.textBlue,
    textAlign: 'center',
    marginBottom: width * 20,
  },
  subTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: colors.textGrey,
    textAlign: 'center',
    marginBottom: width * 25,
  },
  button: {
    width: 100,
    height: 50,
    backgroundColor: colors.textBlue,
    alignItems: 'center',
  },
});
