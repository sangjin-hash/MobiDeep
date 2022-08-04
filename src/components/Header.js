import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {colors, height} from '../style/globalStyles';

const Header = () => {
  return (
    <View style={styles.view}>
      <Text style={styles.text}>Header</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    width: '100%',
    height: height * 101.12,
    backgroundColor: colors.backgroundWhite,
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    fontSize: 25,
    fontWeights: 'bold',
    color: colors.textBlack,
  },
});

export default Header;
