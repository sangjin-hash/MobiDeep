import {StyleSheet} from 'react-native';
import {
  NativeBaseProvider,
  Select,
  Box,
  FormControl,
  WarningOutlineIcon,
  ScrollView,
  Text,
  Button,
} from 'native-base';
import React, {useState} from 'react';
import {colors, font, text} from '../style/globalStyles';
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
import FirstStageIcon from '../components/FirstStageIcon';

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
        navigation.navigate('AdditionalConfigurationView');
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
        navigation.navigate('AdditionalConfigurationView');
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
            <FirstStageIcon></FirstStageIcon>
            <Text fontSize="2xl" style={styles.mainTitle}>
              {text.text1}
            </Text>
            <Text fontSize="md" style={styles.subTitle}>
              {text.text2}
            </Text>
            <Box style={styles.selectBox}>
              <Text fontSize="md" style={styles.selectTitle}>
                {text.text3}
              </Text>

              <FormControl isRequired isInvalid={error1}>
                <Select
                  accessibilityLabel="선택"
                  placeholder="선택"
                  _selectedItem={{
                    bg: colors.White,
                  }}
                  onValueChange={(value) => {
                    setSido(value);
                    setSigungu('');
                    setDong('');
                  }}
                  mt="1.0"
                  p="1">
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
                    {text.text4}
                  </FormControl.ErrorMessage>
                )}
              </FormControl>

              <FormControl isRequired isInvalid={error2}>
                <Select
                  accessibilityLabel="선택"
                  placeholder="선택"
                  _selectedItem={{
                    bg: colors.White,
                  }}
                  onValueChange={(value) => {
                    setSigungu(value);
                    setDong('');
                  }}
                  mt="2.5"
                  p="1">
                  {filterSigungu(sido).map((x) => (
                    <Select.Item label={x} value={x} />
                  ))}
                </Select>
                {!error2 ? (
                  <></>
                ) : (
                  <FormControl.ErrorMessage
                    leftIcon={<WarningOutlineIcon size="xs" />}>
                    {text.text4}
                  </FormControl.ErrorMessage>
                )}
              </FormControl>

              <Select
                accessibilityLabel="선택"
                placeholder="선택"
                _selectedItem={{
                  bg: colors.White,
                }}
                onValueChange={(value) => {
                  setDong(value);
                }}
                mt="2.5"
                p="1">
                {AreaGridCode.AreaGrids.filter(
                  (k) => k.sido === sido && k.sigungu === sigungu,
                ).map((x) => (
                  <Select.Item label={x.dong} value={x.dong} />
                ))}
              </Select>
            </Box>
            <Button style={styles.button} onPress={onPass} size="md">
              {text.text5}
            </Button>
          </Box>
        </Box>
      </ScrollView>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.LightGrey,
    alignItems: 'center',
  },
  body: {
    width: '100%',
    height: '100%',
    padding: 20,
    alignItems: 'center',
  },
  mainTitle: {
    color: colors.Blue,
    textAlign: 'center',
    marginBottom: 20,
    fontFamily: font.Bold,
  },
  subTitle: {
    fontFamily: font.Medium,
    color: colors.Grey,
    textAlign: 'center',
    marginBottom: 25,
  },
  text: {
    fontFamily: font.Medium,
    color: colors.White,
    textAlign: 'center',
  },
  selectBox: {
    width: '100%',
    backgroundColor: colors.White,
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  selectTitle: {
    fontFamily: font.Bold,
    color: colors.Black,
    marginBottom: 10,
  },
  button: {
    backgroundColor: colors.Blue,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
