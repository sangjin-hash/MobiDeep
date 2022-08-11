import React, {useCallback, useEffect, useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {NativeBaseProvider, Box, Flex, Center, Text} from 'native-base';
import {colors, font, height, width} from '../style/globalStyles';

export default function ButtonOptions(props) {
  const data = props.options;
  const indexList = [0];
  const [activeOption, setActiveOption] = useState(props.selected);

  const createButton = (option) => {
    let num = option.length;
    return (
      <Center
        style={{
          width: width * (41 + 14 * num),
          height: height * 44,
          borderWidth: 1,
          borderColor: colors.LightBlackGrey,
          backgroundColor: activeOption === option ? colors.Blue : colors.White,
          marginRight: 10,
          borderRadius: 5,
        }}>
        <Text
          fontSize="md"
          style={{
            color: activeOption === option ? colors.White : colors.Grey,
            fontFamily: font.Regular,
          }}>
          {option}
        </Text>
      </Center>
    );
  };

  const createRow = () => {
    var rowLength = 0;
    data.map((option, index) => {
      rowLength += 41 + 14 * option.length;
      if (rowLength > 295) {
        rowLength = 41 + 14 * option.length;
        indexList.push(index);
      }
    });
    indexList.push(data.length);
  };

  return (
    <NativeBaseProvider>
      <Flex h={'20'} mt="4">
        {createRow()}
        {indexList.slice(0, indexList.length - 1).map((value, index) => (
          <Box w="100%" flexDirection={'row'} mb="2">
            {props.options
              .slice(indexList[index], indexList[index + 1])
              .map((option) => (
                <TouchableOpacity
                  onPress={() => {
                    props.onChange(option);
                    setActiveOption(option);
                  }}>
                  {createButton(option)}
                </TouchableOpacity>
              ))}
          </Box>
        ))}
      </Flex>
    </NativeBaseProvider>
  );
}
