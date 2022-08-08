import {StyleSheet, Text, Pressable, Image} from 'react-native';
import {
  NativeBaseProvider,
  Select,
  Box,
  FormControl,
  WarningOutlineIcon,
  ScrollView,
} from 'native-base';
import React, {useState} from 'react';
import {RFValue} from 'react-native-responsive-fontsize';
import {colors, height, width} from '../style/globalStyles';
import {AreaPMCode} from '../Config/AreaPMCode';
import {AreaGridCode} from '../Config/AreaGridCode';
import {useSelector, useDispatch} from 'react-redux';
import {
  setSidoCode,
  setSigunguCode,
  setNX,
  setNY,
  setUTF8,
} from '../redux/action';

export default function AreaConfigurationView({navigation}) {
  const {sidoCode, sigunguCode, nx, ny, utf8} = useSelector(
    (state) => state.userReducer,
  );
  const dispatch = useDispatch();

  const [sido, setSido] = useState('');
  const [sigungu, setSigungu] = useState('');
  const [dong, setDong] = useState('');

  const [error1, setError1] = useState(false);
  const [error2, setError2] = useState(false);

  const onPass = () => {
    if (validate()) {
      if (sido == '이어도') {
        dispatch(setSidoCode(''));
        dispatch(setSigunguCode(1));
        dispatch(setUTF8(''));
        dispatch(setNX(28));
        dispatch(setNY(8));
        navigation.navigate('TestView');
      } else {
        let areaPMSidoCodes = AreaPMCode.AreaPMSidoCodes.filter(
          (k) => k.sido === sido,
        );
        dispatch(setSidoCode(areaPMSidoCodes[0].sidoCode));
        dispatch(setUTF8(areaPMSidoCodes[0].utf8));

        let areaPMSigunguCodes = AreaPMCode.AreaPMSigunguCodes.filter(
          (k) => k.sido === sido && sigungu.includes(k.sigungu),
        );
        dispatch(setSigunguCode(areaPMSigunguCodes[0].sigunguCode));

        let areaGrids = AreaGridCode.AreaGrids.filter(
          (k) => k.sido === sido && k.sigungu === sigungu && k.dong === dong,
        );
        dispatch(setNX(areaGrids[0].nx));
        dispatch(setNY(areaGrids[0].ny));
        navigation.navigate('TestView');
      }
    }
  };

  const validate = () => {
    if (sido == '') {
      setError1(true);
      if (sigungu == '') {
        setError2(true);
        return false;
      } else {
        return false;
      }
    } else if (sido == '이어도') {
      return true;
    } else {
      if (sigungu == '') {
        setError1(false);
        setError2(true);
        return false;
      } else {
        return true;
      }
    }
  };

  const filterSigungu = (k) => {
    var list = new Set(
      AreaGridCode.AreaGrids.filter((x) => x.sido === k).map(
        (x) => Object.values(x)[1],
      ),
    );
    list.delete('');
    return Array.from(list);
  };

  return (
    <NativeBaseProvider>
      <ScrollView showsVerticalScrollIndicator={false}>
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
              <Box style={styles.select}>
                <Text style={styles.selectTitle}>지역등록</Text>
              </Box>

              <Box style={styles.selectBoxRow}>
                <FormControl isRequired isInvalid={error1}>
                  <Select
                    style={styles.select}
                    accessibilityLabel="선택"
                    placeholder="선택"
                    _selectedItem={{
                      bg: colors.backgroundWhite,
                    }}
                    onValueChange={(value) => {
                      setSido(value);
                      setSigungu('');
                      setDong('');
                    }}
                    mt={1}>
                    {AreaPMCode.AreaPMSidoCodes.map((x) => (
                      <Select.Item label={x.sido} value={x.sido} />
                    ))}
                    <Select.Item label="이어도" value="이어도" />
                  </Select>
                  {!error1 ? (
                    <></>
                  ) : (
                    <FormControl.ErrorMessage
                      leftIcon={<WarningOutlineIcon size="xs" />}>
                      필수 기입 항목입니다.
                    </FormControl.ErrorMessage>
                  )}
                </FormControl>
              </Box>

              <Box style={styles.selectBoxRow}>
                <FormControl isRequired isInvalid={error2}>
                  <Select
                    style={styles.select}
                    accessibilityLabel="선택"
                    placeholder="선택"
                    _selectedItem={{
                      bg: colors.backgroundWhite,
                    }}
                    onValueChange={(value) => {
                      setSigungu(value);
                      setDong('');
                    }}
                    mt={1}>
                    {filterSigungu(sido).map((x) => (
                      <Select.Item label={x} value={x} />
                    ))}
                  </Select>
                  {!error2 ? (
                    <></>
                  ) : (
                    <FormControl.ErrorMessage
                      leftIcon={<WarningOutlineIcon size="xs" />}>
                      필수 기입 항목입니다.
                    </FormControl.ErrorMessage>
                  )}
                </FormControl>
              </Box>

              <Select
                style={styles.select}
                accessibilityLabel="선택"
                placeholder="선택"
                _selectedItem={{
                  bg: colors.backgroundWhite,
                }}
                onValueChange={(value) => {
                  setDong(value);
                }}
                mt={1}>
                {AreaGridCode.AreaGrids.filter(
                  (k) => k.sido === sido && k.sigungu === sigungu,
                ).map((x) => (
                  <Select.Item label={x.dong} value={x.dong} />
                ))}
              </Select>
            </Box>
            <Pressable style={styles.button} onPress={onPass}>
              <Text style={styles.text}>등록</Text>
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
    color: colors.Blue,
    textAlign: 'center',
    marginBottom: 20,
    fontFamily: 'NotoSansKR-Bold',
  },
  subTitle: {
    fontSize: RFValue(15),
    fontWeight: 'bold',
    color: colors.Grey,
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
    alignSelf: 'baseline',
    backgroundColor: colors.backgroundWhite,
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  selectTitle: {
    fontSize: RFValue(16),
    fontWeight: 'bold',
    color: colors.textBlack,
    marginBottom: 10,
  },
  selectBoxRow: {
    width: width * 310,
    alignSelf: 'baseline',
    marginBottom: 10,
  },
  select: {
    width: width * 310,
    height: height * 40,
  },
});
