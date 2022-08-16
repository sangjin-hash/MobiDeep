import React, {useState, useRef} from 'react';
import {
  View,
  TouchableWithoutFeedback,
  StyleSheet,
  Animated,
  TextInput,
} from 'react-native';
import {
  ChevronDownIcon,
  HStack,
  Switch,
  Box,
  Text,
  Flex,
  Center,
  NativeBaseProvider,
} from 'native-base';
import {colors, font, text, width} from '../style/globalStyles';
import ButtonOptions from './ButtonOptions';
import {AdditionalCode} from '../Config/AdditionalCode';
import {
  setDeviceLocation,
  setDeviceName,
  setDeviceQuality,
  setDeviceEtc,
} from '../redux/action';
import {useSelector, useDispatch} from 'react-redux';

export default function ExtendedView(props) {
  const {location, name, quality, etcConfig} = useSelector(
    (state) => state.deviceReducer,
  );
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const [locationArr, setLocation] = useState(
    new Array(AdditionalCode.InstallLocation.length).fill(false),
  );
  const [etcLocation, setEtcLocation] = useState('');

  const [deviceName, setName] = useState('');
  const [qualityArr, setQuality] = useState(
    new Array(AdditionalCode.AirQuality.length).fill(false),
  );
  const [etcConfiguration, setEtcConfiguration] = useState(
    new Array(AdditionalCode.EtcConfiguration.length).fill(false),
  );

  const animatedController = useRef(new Animated.Value(0)).current;

  const arrowAngle = animatedController.interpolate({
    inputRange: [0, 1],
    outputRange: ['0rad', `${Math.PI}rad`],
  });

  const toggleAnimation = () => {
    if (open) {
      Animated.timing(animatedController, {
        duration: 500,
        toValue: 0,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(animatedController, {
        duration: 500,
        toValue: 1,
        useNativeDriver: true,
      }).start();
    }
    setOpen(!open);
  };

  const SetUpChildren = (num) => {
    switch (num) {
      case 1:
        return LocationInput();
      case 2:
        return NameInput();
      case 3:
        return QualityInput();
      case 4:
        return EtcInput();
      default:
        break;
    }
  };

  const LocationInput = () => {
    if (!open) {
      let temp = text.text16;
      locationArr.map((value, index) => {
        value ? (temp = AdditionalCode.InstallLocation[index]) : temp;
      });

      if (locationArr[AdditionalCode.InstallLocation.length - 1]) {
        etcLocation === '' ? (temp = text.text16) : (temp = etcLocation);
      }
      return (
        <Text fontSize="md" style={styles.boxSubTitle}>
          {temp}
        </Text>
      );
    } else {
      return (
        <Box>
          <ButtonOptions
            options={AdditionalCode.InstallLocation}
            selected={locationArr}
            onChange={(index) => {
              setLocation(
                locationArr.map((value, i) =>
                  i === index
                    ? (locationArr[i] = !value)
                    : (locationArr[i] = false),
                ),
              );
              index != AdditionalCode.InstallLocation.length - 1
                ? dispatch(
                    setDeviceLocation(AdditionalCode.InstallLocation[index]),
                  )
                : dispatch(setDeviceLocation(''));
            }}></ButtonOptions>
          {locationArr[AdditionalCode.InstallLocation.length - 1] ? (
            <TextInput
              style={styles.locationTextInput}
              onChangeText={(value) => setEtcLocation(value)}
              onEndEditing={() => dispatch(setDeviceLocation(etcLocation))}
              defaultValue={etcLocation}
              placeholder={text.text26}
              maxLength={15}></TextInput>
          ) : (
            <></>
          )}
        </Box>
      );
    }
  };

  const NameInput = () => {
    if (!open) {
      if (name == '') {
        return (
          <Text fontSize="md" style={styles.boxSubTitle}>
            {text.text16}
          </Text>
        );
      } else {
        return (
          <Text fontSize="md" style={styles.boxSubTitle}>
            {name}
          </Text>
        );
      }
    } else {
      return (
        <Box>
          <TextInput
            style={styles.nameTextInput}
            onChangeText={(value) => setName(value)}
            onEndEditing={() => dispatch(setDeviceName(deviceName))}
            defaultValue={deviceName}
            placeholder={text.text17}
            maxLength={15}
            marginTop={10}></TextInput>
          <Text fontSize="md" style={styles.text}>
            {text.text18}
          </Text>
        </Box>
      );
    }
  };

  const QualityInput = () => {
    if (open) {
      return (
        <View>
          <Text fontSize="md" style={styles.boxSubTitle} mt="2" mb="2">
            {text.text19}
          </Text>
          <ButtonOptions
            options={AdditionalCode.AirQuality}
            selected={qualityArr}
            onChange={(index) => {
              setQuality(
                qualityArr.map((value, i) =>
                  i === index ? (qualityArr[i] = !value) : value,
                ),
              );
              let temp = [];
              qualityArr.map((value, index) => {
                value ? temp.push(index) : temp;
              });
              dispatch(setDeviceQuality(temp));
            }}></ButtonOptions>
        </View>
      );
    } else {
      let temp = [];
      qualityArr.map((value, index) => {
        value ? temp.push(AdditionalCode.AirQuality[index]) : temp;
      });
      temp.map((value, index) =>
        index != temp.length - 1 ? (temp[index] = value + ', ') : value,
      );

      if (temp.length > 0) {
        return (
          <Text fontSize="md" style={styles.boxSubTitle}>
            {temp}
          </Text>
        );
      }
    }
  };

  const EtcInput = () => {
    if (open) {
      return (
        <Box>
          {AdditionalCode.EtcConfiguration.map((value, index) =>
            index != AdditionalCode.EtcConfiguration.length - 1 ? (
              <Box style={styles.etcSubContainer} mt={2}>
                <HStack style={styles.etcBox}>
                  <Text fontSize="md" style={styles.text}>
                    {value}
                  </Text>
                  <Switch
                    size="lg"
                    isChecked={etcConfiguration[index]}
                    onToggle={() => {
                      etcInputCheck(index);
                    }}
                  />
                </HStack>
              </Box>
            ) : (
              <Box style={styles.etcSubEndContainer} mt={2}>
                <HStack style={styles.etcBox}>
                  <Text fontSize="md" style={styles.text}>
                    {value}
                  </Text>
                  <Switch
                    size="lg"
                    isChecked={etcConfiguration[index]}
                    onToggle={() => {
                      etcInputCheck(index);
                    }}
                  />
                </HStack>
              </Box>
            ),
          )}
        </Box>
      );
    }
  };

  const etcInputCheck = (index) => {
    setEtcConfiguration(
      etcConfiguration.map((value, i) =>
        i === index ? (etcConfiguration[i] = !value) : value,
      ),
    );

    let temp = [];
    etcConfiguration.map((value, i) => (value ? temp.push(i) : value));
    dispatch(setDeviceEtc(temp));
  };

  return (
    <NativeBaseProvider>
      <Center mb="5">
        <TouchableWithoutFeedback onPress={() => toggleAnimation()}>
          <Box
            style={[
              styles.box,
              {
                width: width * 350,
                alignSelf: 'baseline',
              },
            ]}
            shadow={2}>
            <Flex
              direction="row"
              justifyContent={'space-between'}
              alignItems="center">
              <Text fontSize="md" style={styles.boxMainTitle}>
                {props.title}
              </Text>
              <Animated.View
                style={{
                  transform: [{rotateZ: arrowAngle}],
                }}>
                <ChevronDownIcon size={6}></ChevronDownIcon>
              </Animated.View>
            </Flex>
            {SetUpChildren(props.num)}
          </Box>
        </TouchableWithoutFeedback>
      </Center>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: colors.White,
    padding: 20,
    borderRadius: 10,
  },
  boxMainTitle: {
    color: colors.BlackGrey,
    fontFamily: font.Bold,
    marginBottom: 5,
  },
  boxSubTitle: {
    color: colors.Grey,
    fontFamily: font.Regular,
    marginBottom: 5,
  },
  locationTextInput: {
    width: '100%',
    height: '25%',
    borderWidth: 1,
    borderColor: colors.LightBlackGrey,
    padding: 10,
  },
  nameTextInput: {
    width: '100%',
    height: '45%',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: colors.LightBlackGrey,
    padding: 10,
  },
  etcSubContainer: {
    width: '100%',
    alignSelf: 'baseline',
    borderBottomWidth: 1,
    borderBottomColor: colors.LightGrey2,
    marginBottom: 5,
  },
  etcSubEndContainer: {
    width: '100%',
    alignSelf: 'baseline',
  },
  etcBox: {
    width: '100%',
    alignSelf: 'baseline',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    fontFamily: font.Regular,
    color: colors.Grey,
  },
});
