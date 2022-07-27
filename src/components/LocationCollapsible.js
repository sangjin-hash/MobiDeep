import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  StyleSheet,
  Animated,
  Easing,
} from 'react-native';
import {
  NativeBaseProvider,
  Box,
  VStack,
  ChevronDownIcon,
  HStack,
} from 'native-base';
import {RFValue} from 'react-native-responsive-fontsize';
import {colors, height, width} from '../util/globalStyles';

export default function LocationCollapsible() {
  const [open, setOpen] = useState(false);
  const [location, setLocation] = useState(null);

  const initial_height = height * 93;
  const extended_height = height * 172;
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
      }).start();
      setParentHeight(initial_height);
    } else {
      Animated.timing(animatedController, {
        duration: 500,
        toValue: 1,
        easing: Easing.bezier(0.4, 0.0, 0.2, 1),
      }).start();
      setParentHeight(extended_height);
    }
    setOpen(!open);
  };

  const locationInput = () => {
    if (!open) {
      if (location == null) {
        return <Text style={styles.boxSubTitle}>등록된 정보 없음</Text>;
      } else {
        return <Text style={styles.boxSubTitle}>{location}</Text>;
      }
    } else {
      return <View></View>;
    }
  };

  return (
    <View style={styles.mainContainer}>
      <TouchableWithoutFeedback onPress={() => toggleAnimation()}>
        <Animated.View
          style={[
            styles.locationBox,
            {width: width * 319, height: parentHeight},
          ]}>
          <View>
            <Text style={styles.boxMainTitle}>기기 설치 위치 등록</Text>
            {locationInput()}
          </View>
          <Animated.View
            style={{
              transform: [{rotateZ: arrowAngle}],
            }}>
            <ChevronDownIcon size={6}></ChevronDownIcon>
          </Animated.View>
        </Animated.View>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  locationBox: {
    width: width * 319,
    height: height * 93,
    backgroundColor: colors.backgroundWhite,
    padding: 20,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
  },
  locationExtendedBox: {
    width: width * 319,
    height: height * 172,
    backgroundColor: colors.backgroundWhite,
    padding: 20,
    borderRadius: 10,
    marginBotton: 20,
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
});
