import {StyleSheet} from 'react-native';
import {NativeBaseProvider, Box, ScrollView, Button, Text} from 'native-base';
import React, {useState} from 'react';
import {colors, text, font} from '../style/globalStyles';
import ExtendedView from '../components/ExtendedView';
import SecondStageIcon from '../components/SecondStageIcon';

export default function AdditionalConfiguraionView({navigation, route}) {
  const onPass = () => {
    navigation.navigate('AreaConfigurationView');
  };

  return (
    <NativeBaseProvider>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Box style={styles.container}>
          <Box style={styles.body}>
            <SecondStageIcon></SecondStageIcon>
            <Text fontSize="2xl" style={styles.mainTitle} mb="1.5">
              {text.text10}
            </Text>
            <Text fontSize="md" style={styles.subTitle} mb="6.0">
              {text.text11}
            </Text>

            <ExtendedView title={text.text12} num={1}></ExtendedView>
            <ExtendedView title={text.text13} num={2}></ExtendedView>
            <ExtendedView title={text.text14} num={3}></ExtendedView>
            <ExtendedView title={text.text15} num={4}></ExtendedView>
            <Button style={styles.button} onPress={onPass} size="md">
              {text.text20}
            </Button>
          </Box>
        </Box>
      </ScrollView>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.LightGrey,
    alignItems: 'center',
  },

  body: {
    width: '100%',
    height: '100%',
    padding: 20,
    alignItems: 'center',
  },
  mainTitle: {
    color: colors.Blue,
    textAlign: 'center',
    fontFamily: font.Bold,
  },
  subTitle: {
    fontFamily: font.Medium,
    color: colors.Grey,
    textAlign: 'center',
  },
  button: {
    backgroundColor: colors.Blue,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
