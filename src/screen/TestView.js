import {StyleSheet, View, Text} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';

export default function TestView({navigation, route}) {
  const {sido, sigungu, dong} = useSelector((state) => state.userReducer);

  return (
    <View style={styles.body}>
      <Text style={styles.text}> 시도 = {sido} </Text>
      <Text style={styles.text}> 시군구 = {sigungu} </Text>
      <Text style={styles.text}> 동 = {dong} </Text>
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
});
