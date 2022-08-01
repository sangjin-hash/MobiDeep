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
import {ChevronDownIcon} from 'native-base';
import {colors, height, width} from '../util/globalStyles';
import ButtonOptions from './ButtonOptions';

export default function ExtendedView(props) {
  const [open, setOpen] = useState(false);
  const [location, setLocation] = useState(null);

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
    if (open) {
      return (
        <View style={styles.nameContainer}>
          <TextInput style={styles.nameTextInput}>
            기기이름을 입력해주세요.
          </TextInput>
          <Text style={styles.nameTextExample}>
            (예시: 수원집, 서울본가 거실,마이하우스 등)
          </Text>
        </View>
      );
    }
  };

  const QualityInput = () => {
    return <View></View>;
  };

  const EtcInput = () => {
    return <View></View>;
  };

  return (
    <View style={styles.mainContainer}>
      <TouchableWithoutFeedback onPress={() => toggleAnimation()}>
        <View
          style={[
            styles.locationBox,
            {width: width * 350, height: parentHeight},
          ]}>
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
  locationBox: {
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
  },
  nameTextExample: {
    fontSize: RFValue(16),
    color: colors.textGrey,
  },
});
