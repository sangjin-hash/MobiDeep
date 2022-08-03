import {StyleSheet, Text, Pressable, Image} from 'react-native';
import {NativeBaseProvider, Select, Box} from 'native-base';
import React from 'react';
import {RFValue} from 'react-native-responsive-fontsize';
import {
  colors,
  height,
  width,
  AreaPMCodes,
  AreaPMSigunguCodes,
  AreaPMDongCodes,
} from '../util/globalStyles';
import {useSelector, useDispatch} from 'react-redux';
import {setSido, setSigungu, setDong} from '../redux/action';

export default function AreaConfigurationView({navigation}) {
  const {sido, sigungu, dong} = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  const onPass = () => {
    navigation.navigate('TestView');
  };

  return (
    <NativeBaseProvider>
      <Box style={styles.container}>
        <Box style={styles.body}>
          <Image
            style={styles.image}
            source={require('../../assets/top_tab.png')}
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
          <Box style={styles.selectBox}>
            <Text style={styles.selectTitle}>지역등록</Text>
            <Select
              style={styles.select}
              accessibilityLabel="선택"
              placeholder="선택"
              _selectedItem={{
                bg: colors.backgroundWhite,
              }}
              onValueChange={(value) => {
                dispatch(setSido(value));
                dispatch(setSigungu(''));
                dispatch(setDong(''));
              }}
              selectedValue={sido}
              mt={1}>
              {AreaPMCodes.map((x) => (
                <Select.Item label={x.sido} value={x.sido} />
              ))}
            </Select>
            <Select
              style={styles.select}
              accessibilityLabel="선택"
              placeholder="선택"
              _selectedItem={{
                bg: colors.backgroundWhite,
              }}
              onValueChange={(value) => dispatch(setSigungu(value))}
              selectedValue={sigungu}
              mt={1}>
              {AreaPMSigunguCodes.filter((k) => k.sido === sido).map((x) => (
                <Select.Item label={x.sigungu} value={x.sigungu} />
              ))}
            </Select>
            <Select
              style={styles.select}
              accessibilityLabel="선택"
              placeholder="선택"
              _selectedItem={{
                bg: colors.backgroundWhite,
              }}
              onValueChange={(value) => dispatch(setDong(value))}
              selectedValue={dong}
              mt={1}>
              {AreaPMDongCodes.filter((k) => k.sigungu === sigungu).map((x) => (
                <Select.Item label={x.dong} value={x.dong} />
              ))}
            </Select>
          </Box>
          <Pressable style={styles.button} onPress={onPass}>
            <Text style={styles.text}>등록</Text>
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
    marginBottom: 20,
  },
  subTitle: {
    fontSize: RFValue(15),
    fontWeight: 'bold',
    color: colors.textGrey,
    textAlign: 'center',
    marginBottom: 25,
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
  selectBox: {
    width: width * 350,
    height: height * 240,
    backgroundColor: colors.backgroundWhite,
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  selectTitle: {
    fontSize: RFValue(16),
    fontWeight: 'bold',
    color: colors.textBlack,
  },
  select: {
    width: width * 310,
    height: height * 40,
  },
});
