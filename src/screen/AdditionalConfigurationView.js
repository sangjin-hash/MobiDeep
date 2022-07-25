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
import Collapsible from 'react-native-collapsible';

export default function AdditionalConfiguraionView({navigation, route}) {
  const [collapsed, setCollapsed] = useState(true);

  const locationBoxExpanded = () => {
    setCollapsed(!collapsed);
  };

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

          <TouchableOpacity onPress={locationBoxExpanded} activeOpacity={1}>
            <Box style={styles.locationBox}>
              <HStack
                space={2}
                justifyContent="space-between"
                alignItems="center">
                <VStack space={2} justifyContent="center">
                  <Text style={styles.boxMainTitle}>기기 설치 위치 등록</Text>
                  <Text style={styles.boxSubTitle}>등록된 정보 없음</Text>
                </VStack>
                <ChevronDownIcon
                  size="5"
                  mt="0.5"
                  color={colors.iconGrey}></ChevronDownIcon>
              </HStack>
            </Box>
            <Collapsible collapsed={collapsed}>
              <Box styles={styles.locationExtendedBox}>
                <Text style={styles.boxMainTitle}>기기 설치 위치 등록</Text>
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
            </Collapsible>
          </TouchableOpacity>
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
