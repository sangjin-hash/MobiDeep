import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  StyleSheet,
  Animated,
  Easing,
  TextInput,
} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {ChevronDownIcon, HStack, Switch} from 'native-base';
import {colors, height, width} from '../util/globalStyles';
import ButtonOptions from './ButtonOptions';
import ButtonMultipleOptions from './ButtonMultipleOptions';
import {useSelector, useDispatch} from 'react-redux';
import {
  setDeviceLocation,
  setDeviceName,
  setDeviceQuality,
  setDeviceEtc,
} from '../redux/action';

export default function ExtendedView(props) {
  //const location = useSelector((state) => state.deviceReducer);
  //const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const [location, setLocation] = useState(null);
  const [name, setName] = useState(null);
  const [quality, setQuality] = useState([]);

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
        easing: Easing.bezier(0.4, 0.0, 0.2, 1),
        useNativeDriver: true,
      }).start();
      setParentHeight(initial_height);
    } else {
      Animated.timing(animatedController, {
        duration: 500,
        toValue: 1,
        easing: Easing.bezier(0.4, 0.0, 0.2, 1),
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
        return <Text style={styles.boxSubTitle}>등록된 정보 없음</Text>;
      } else {
        return <Text style={styles.boxSubTitle}>{location}</Text>;
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
            onChange={(option) => setLocation(option)}></ButtonOptions>
        </View>
      );
    }
  };

  const NameInput = () => {
    if (!open) {
      if (name == null) {
        return <Text style={styles.boxSubTitle}>등록된 정보 없음</Text>;
      } else {
        return <Text style={styles.boxSubTitle}>{name}</Text>;
      }
    } else {
      return (
        <View style={styles.nameContainer}>
          <TextInput
            style={styles.nameTextInput}
            onChangeText={setName}
            value={name}
            placeholder="기기이름을 입력해주세요"
            maxLength={15}></TextInput>
          <Text style={styles.nameTextExample}>
            (예시: 수원집, 서울본가 거실,마이하우스 등)
          </Text>
        </View>
      );
    }
  };

  const QualityInput = () => {
    if (open) {
      return (
        <View>
          <Text style={styles.boxSubTitle}>다중선택 가능</Text>
          <ButtonMultipleOptions
            options={[
              '쾌적한 실내생활',
              '편안한 수면',
              '미세먼지로 인한 알레르기',
              '천식',
              '학습에 도움',
            ]}
            onChange={(option) =>
              setQuality(...quality, option)
            }></ButtonMultipleOptions>
        </View>
      );
    }
  };

  const EtcInput = () => {
    if (open) {
      return (
        <View>
          <View style={styles.etcSubContainer}>
            <HStack style={styles.etcBox}>
              <Text style={styles.etcText}>
                화재와 같은 이상 공기질 경우 알림 받기
              </Text>
              <Switch size="lg" />
            </HStack>
          </View>
          <View style={styles.etcSubContainer}>
            <HStack style={styles.etcBox}>
              <Text style={styles.etcText}>이상공기질 일 경우 알림받기</Text>
              <Switch size="lg" />
            </HStack>
          </View>
          <View style={styles.etcSubMultiContainer}>
            <HStack style={styles.etcMultiBox}>
              <Text style={styles.etcText}>
                7 심야(오후 10시 ~ 오전 6시)에 알림{'\n'}울리지 않기
              </Text>
              <Switch size="lg" />
            </HStack>
          </View>

          <View style={styles.etcSubContainer}>
            <HStack style={styles.etcBox}>
              <Text style={styles.etcText}>화면 밝기 낮추기</Text>
              <Switch size="lg" />
            </HStack>
          </View>
          <View style={styles.etcSubEndContainer}>
            <HStack style={styles.etcBox}>
              <Text style={styles.etcText}>
                심야(오후 10시 ~ 오전 6시)에 낮추기
              </Text>
              <Switch size="lg" />
            </HStack>
          </View>
        </View>
      );
    }
  };

  return (
    <View style={styles.mainContainer}>
      <TouchableWithoutFeedback onPress={() => toggleAnimation()}>
        <View style={[styles.box, {width: width * 350, height: parentHeight}]}>
          <View style={styles.subContainer}>
            <Text style={styles.boxMainTitle}>{props.title}</Text>
            <Animated.View
              style={{
                transform: [{rotateZ: arrowAngle}],
              }}>
              <ChevronDownIcon size={6}></ChevronDownIcon>
            </Animated.View>
          </View>
          {SetUpChildren(props.num)}
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  subContainer: {
    width: width * 310,
    height: height * 31,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
  },
  box: {
    width: width * 350,
    height: height * 93,
    backgroundColor: colors.backgroundWhite,
    padding: 20,
    borderRadius: 10,
    alignContent: 'center',
  },
  boxMainTitle: {
    fontSize: RFValue(16),
    color: colors.textBlackGrey,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  boxSubTitle: {
    fontSize: RFValue(16),
    color: colors.textGrey,
    marginBottom: 5,
  },
  nameContainer: {
    width: width * 310,
    height: height * 74,
    justifyContent: 'center',
  },
  nameTextInput: {
    width: width * 310,
    height: height * 40,
    marginBottom: 5,
    borderWidth: 1,
    borderColor: colors.iconGrey,
    padding: 10,
  },
  nameTextExample: {
    fontSize: RFValue(16),
    color: colors.textGrey,
  },
  etcSubContainer: {
    width: width * 310,
    height: height * 51,
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGrey,
    justifyContent: 'center',
  },
  etcSubMultiContainer: {
    width: width * 310,
    height: height * 68,
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGrey,
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
    color: colors.textGrey,
  },
});
