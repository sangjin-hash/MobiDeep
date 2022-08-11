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

export default function ExtendedView(props) {
  //const location = useSelector((state) => state.deviceReducer);
  //const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const [location, setLocation] = useState(null);
  const [name, setName] = useState(null);
  const [quality, setQuality] = useState([]);
  const [etcConfig, setEtcConfig] = useState([]);

  const initial_height = height * props.in_height;
  const extended_height = height * props.ex_height;
  const [parentHeight, setParentHeight] = useState(initial_height);

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
      setParentHeight(initial_height);
    } else {
      Animated.timing(animatedController, {
        duration: 500,
        toValue: 1,
        useNativeDriver: true,
      }).start();
      setParentHeight(extended_height);
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
      if (location == null) {
        return (
          <Text fontSize="md" style={styles.boxSubTitle}>
            {text.text16}
          </Text>
        );
      } else {
        return (
          <Text fontSize="md" style={styles.boxSubTitle}>
            {location}
          </Text>
        );
      }
    } else {
      return (
        <View>
          <ButtonOptions
            options={[
              '거실',
              '주방',
              '안방',
              '방',
              '드레스룸',
              '화장실',
              '그외',
            ]}
            selected={location}
            onChange={(option) => setLocation(option)}></ButtonOptions>
        </View>
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
            options={[
              '쾌적한 실내생활',
              '편안한 수면',
              '미세먼지로 인한 알레르기',
              '천식',
              '학습에 도움',
            ]}
            selected={quality}
            onChange={(option) => {
              setQuality(...quality, option);
            }}></ButtonOptions>
        </View>
      );
    } else {
      if (quality.length > 0) {
        console.log(quality.length);
        () => {
          setParentHeight(height * 110);
          // 이 안으로 안들어옴
          // logic : null이 아닌 경우, 이 안으로 들어와서 parentHeight를 늘려줌으로써 View를 확장시킨다.
        };
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
                height: parentHeight,
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
  nameTextInput: {
    width: '100%',
    height: height * 45,
    marginBottom: 5,
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
