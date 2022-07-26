import React, {useState, useRef} from 'react';
import {
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
  const animatedController = useRef(new Animated.Value(0)).current;
  const [bodySectionHeight, setBodySectionHeight] = useState();

  const bodyHeight = animatedController.interpolate({
    inputRange: [0, 1],
    outputRange: [0, bodySectionHeight],
  });

  const arrowAngle = animatedController.interpolate({
    inputRange: [0, 1],
    outputRange: ['0rad', `${Math.PI}rad`],
  });

  const toggleButtonItem = () => {
    if (open) {
      Animated.timing(animatedController, {
        duration: 300,
        toValue: 0,
        easing: Easing.bezier(0.4, 0.0, 0.2, 1),
      }).start();
    } else {
      Animated.timing(animatedController, {
        duration: 300,
        toValue: 1,
        easing: Easing.bezier(0.4, 0.0, 0.2, 1),
      }).start();
    }
    setOpen(!open);
  };

  return (
    <NativeBaseProvider>
      <TouchableWithoutFeedback onPress={() => toggleButtonItem()}>
        <Box style={styles.locationBox}>
          <VStack space={2} justifyContent="center">
            <Text style={styles.boxMainTitle}>기기 설치 위치 등록</Text>
            <Text style={styles.boxSubTitle}>등록된 정보 없음</Text>
          </VStack>
          <Animated.View>
            <ChevronDownIcon size={6}></ChevronDownIcon>
          </Animated.View>
        </Box>
      </TouchableWithoutFeedback>
      <Animated.View style={[styles.contentContainer]}>
        <Box styles={styles.locationExtendedBox}>
          <VStack space={2}>
            <HStack space={4}>
              <Box style={styles.firstRowBox}>
                <Text style={styles.boxSubTitle}>거실</Text>
              </Box>
              <Box style={styles.firstRowBox}>
                <Text style={styles.boxSubTitle}>주방</Text>
              </Box>
              <Box style={styles.firstRowBox}>
                <Text style={styles.boxSubTitle}>안방</Text>
              </Box>
              <Box style={styles.firstRowBox}>
                <Text style={styles.boxSubTitle}>방</Text>
              </Box>
            </HStack>
            <HStack space={3}>
              <Box style={styles.secondRowBox}>
                <Text style={styles.boxSubTitle}>드레스룸</Text>
              </Box>
              <Box style={styles.secondRowBox}>
                <Text style={styles.boxSubTitle}>화장실</Text>
              </Box>
              <Box style={styles.secondRowBox}>
                <Text style={styles.boxSubTitle}>그외</Text>
              </Box>
            </HStack>
          </VStack>
        </Box>
      </Animated.View>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  locationBox: {
    width: width * 319,
    height: height * 93,
    backgroundColor: colors.backgroundWhite,
    padding: 20,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    display: 'flex',
  },
  locationExtendedBox: {
    width: width * 350,
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
  contentContainer: {
    overflow: 'hidden',
  },
  firstRowBox: {
    width: width * 54,
    height: height * 44,
    backgroundColor: colors.backgroundColor,
    borderColor: colors.iconGrey,
    borderRadius: 10,
  },
  secondRowBox: {
    width: width * 108,
    height: height * 44,
    backgroundColor: colors.backgroundColor,
    borderColor: colors.iconGrey,
    borderRadius: 10,
  },
});
