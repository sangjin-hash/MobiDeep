import {
  StyleSheet,
  Text,
  Pressable,
  Image,
  TouchableOpacity,
} from 'react-native';
import {
  NativeBaseProvider,
  Box,
  ChevronDownIcon,
  VStack,
  HStack,
} from 'native-base';
import React, {useState} from 'react';
import {RFValue} from 'react-native-responsive-fontsize';
import {colors, height, width} from '../util/globalStyles';
import LocationCollapsible from '../components/LocationCollapsible';

export default function AdditionalConfiguraionView({navigation, route}) {
  return (
    <NativeBaseProvider>
      <Box style={styles.container}>
        <Box style={styles.body}>
          <Image
            style={styles.image}
            source={require('../../assets/top_tab2.png')}
            resizeMode="stretch"
          />
          <Text style={styles.mainTitle}>추가 설정</Text>
          <Text style={styles.subTitle} numberOfLines={2}>
            {
              'AirDeep의 설치 위치, 기기 이름, 세부 설정 등의\n정보를 설정하거나 변경할 수 있습니다'
            }
          </Text>
          <LocationCollapsible></LocationCollapsible>
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
    height: height * 800,
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
    color: colors.textGrey,
    textAlign: 'center',
    marginBottom: 25,
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
  locationBox: {
    width: width * 319,
    height: height * 93,
    backgroundColor: colors.backgroundWhite,
    padding: 20,
    borderRadius: 10,
    marginBotton: 20,
  },
  locationExtendedBox: {
    width: width * 350,
    height: height * 172,
    backgroundColor: colors.backgroundWhite,
    padding: 20,
    borderRadius: 10,
    marginBotton: 20,
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
