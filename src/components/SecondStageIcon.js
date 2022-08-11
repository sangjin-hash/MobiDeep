import React from 'react';
import {StyleSheet} from 'react-native';
import {Text, Image, HStack, Center, Flex} from 'native-base';
import {colors, font, text} from '../style/globalStyles';

const SecondStageIcon = () => {
  return (
    <HStack space={2} marginBottom={5}>
      <Center style={styles.firstStage} p="2" mb="1.5">
        <Text fontSize="md" style={styles.stageText}>
          {text.text8}
        </Text>
      </Center>
      <Center style={styles.secondStage} p="2" mb="1.5">
        <Flex direction="row" alignItems="center">
          <Image source={require('../../assets/ic_write.png')} mr="1"></Image>
          <Text fontSize="md" style={styles.stageText}>
            {text.text9}
          </Text>
        </Flex>
      </Center>
    </HStack>
  );
};

const styles = StyleSheet.create({
  firstStage: {
    width: '30%',
    backgroundColor: colors.MediumGrey,
    borderRadius: 20,
  },
  stageText: {
    fontFamily: font.Medium,
    color: colors.White,
  },
  secondStage: {
    width: '70%',
    backgroundColor: colors.Blue,
    borderRadius: 20,
  },
});

export default SecondStageIcon;
