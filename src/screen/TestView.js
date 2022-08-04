import {StyleSheet, View, Text, Pressable} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {colors, height, width} from '../style/globalStyles';
import {RFValue} from 'react-native-responsive-fontsize';

export default function TestView({navigation, route}) {
  const {sidoCode, sigunguCode, nx, ny, utf8} = useSelector(
    (state) => state.userReducer,
  );

  const onPass = () => {
    navigation.navigate('AdditionalConfigurationView');
  };

  return (
    <View style={styles.body}>
      <Text style={styles.text}> 시도 = {sidoCode} </Text>
      <Text style={styles.text}> 시군구 = {sigunguCode} </Text>
      <Text style={styles.text}> nx = {nx} </Text>
      <Text style={styles.text}> ny = {ny} </Text>
      <Text style={styles.text}> utf8 = {utf8} </Text>
      <Pressable style={styles.button} onPress={onPass}>
        <Text style={styles.btn_text}>다음</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
  },
  text: {
    fontSize: 40,
    margin: 10,
  },
  button: {
    width: width * 70,
    height: height * 36,
    backgroundColor: colors.Blue,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn_text: {
    fontSize: RFValue(16),
    color: colors.backgroundWhite,
    textAlign: 'center',
  },
});
