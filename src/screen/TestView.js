import {StyleSheet, View, Text} from 'react-native';
import React from 'react';

export default function TestView({navigation, route}) {
  return (
    <View style={styles.body}>
      <Text style={styles.text}> TestView 입니다</Text>
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
