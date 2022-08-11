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
import {RFValue} from 'react-native-responsive-fontsize';
import {colors, font, height, text, width} from '../style/globalStyles';
import ButtonOptions from './ButtonOptions';
import {AdditionalCode} from '../Config/AdditionalCode';

export default function ExtendedView(props) {
  const [open, setOpen] = useState(false);
  const [location, setLocation] = useState(
    new Array(AdditionalCode.InstallLocation.length).fill(false),
  );
  const [etcLocation, setEtcLocation] = useState('');

  const [name, setName] = useState(null);
  const [quality, setQuality] = useState(
    new Array(AdditionalCode.AirQuality.length).fill(false),
  );
  const [etcConfig, setEtcConfig] = useState([]);

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
      location.map((value, index) => {
        value ? (temp = AdditionalCode.InstallLocation[index]) : temp;
      });

      if (location[AdditionalCode.InstallLocation.length - 1]) {
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
            selected={location}
            onChange={(index) =>
              setLocation(
                location.map((value, i) =>
                  i === index ? (location[i] = !value) : (location[i] = false),
                ),
              )
            }></ButtonOptions>
          {location[AdditionalCode.InstallLocation.length - 1] ? (
            <TextInput
              style={styles.locationTextInput}
              onChangeText={setEtcLocation}
              value={etcLocation}
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
      if (name == null) {
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
            onChangeText={setName}
            value={name}
            placeholder={text.text17}
            maxLength={15}
            marginTop={10}></TextInput>
          <Text fontSize="md" style={styles.nameTextExample}>
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
            selected={quality}
            onChange={(index) => {
              setQuality(
                quality.map((value, i) =>
                  i === index ? (quality[i] = !value) : value,
                ),
              );
            }}></ButtonOptions>
        </View>
      );
    } else {
      let temp = [];
      quality.map((value, index) => {
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
        <View>
          <View style={styles.etcSubContainer}>
            <HStack style={styles.etcBox}>
              <Text style={styles.etcText}>{text.text21}</Text>
              <Switch size="lg" />
            </HStack>
          </View>
          <View style={styles.etcSubContainer}>
            <HStack style={styles.etcBox}>
              <Text style={styles.etcText}>{text.text22}</Text>
              <Switch size="lg" />
            </HStack>
          </View>
          <View style={styles.etcSubMultiContainer}>
            <HStack style={styles.etcMultiBox}>
              <Text style={styles.etcText}>{text.text23}</Text>
              <Switch size="lg" />
            </HStack>
          </View>

          <View style={styles.etcSubContainer}>
            <HStack style={styles.etcBox}>
              <Text style={styles.etcText}>{text.text24}</Text>
              <Switch size="lg" />
            </HStack>
          </View>
          <View style={styles.etcSubEndContainer}>
            <HStack style={styles.etcBox}>
              <Text style={styles.etcText}>{text.text25}</Text>
              <Switch size="lg" />
            </HStack>
          </View>
        </View>
      );
    }
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
  nameTextExample: {
    fontFamily: font.Regular,
    color: colors.Grey,
  },
  etcSubContainer: {
    width: width * 310,
    height: height * 51,
    borderBottomWidth: 1,
    borderBottomColor: colors.LightGrey2,
    justifyContent: 'center',
  },
  etcSubMultiContainer: {
    width: width * 310,
    height: height * 68,
    borderBottomWidth: 1,
    borderBottomColor: colors.LightGrey2,
    justifyContent: 'center',
  },
  etcSubEndContainer: {
    width: width * 310,
    height: height * 51,
    justifyContent: 'center',
  },
  etcBox: {
    width: width * 310,
    height: height * 31,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  etcMultiBox: {
    width: width * 310,
    height: height * 48,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  etcText: {
    fontSize: RFValue(16),
    color: colors.Grey,
  },
});
