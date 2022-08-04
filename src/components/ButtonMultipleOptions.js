import React, {Component} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {colors, height, width} from '../style/globalStyles';
import {RFValue} from 'react-native-responsive-fontsize';
import {VStack} from 'native-base';

class ButtonMultipleOptions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeOption: this.props.selected,
    };
  }

  updateActiveOption = (activeOption) => {
    this.setState({
      activeOption,
    });
  };

  createButton(option) {
    let num = option.length;
    return (
      <View
        style={{
          width: width * (41 + 14 * num),
          height: height * 44,
          borderWidth: 1,
          borderColor: colors.iconGrey,
          backgroundColor:
            this.state.activeOption === option
              ? colors.Blue
              : colors.backgroundWhite,
          alignItems: 'center',
          justifyContent: 'center',
          marginRight: 10,
          borderRadius: 5,
        }}>
        <Text
          style={{
            fontSize: RFValue(16),
            color:
              this.state.activeOption === option
                ? colors.backgroundWhite
                : colors.textGrey,
          }}>
          {option}
        </Text>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <VStack space={3}>
          <View style={styles.row}>
            {this.props.options.slice(0, 2).map((option, index) => (
              <TouchableOpacity
                onPress={() => {
                  this.props.onChange(option);
                  this.updateActiveOption(option);
                }}>
                {this.createButton(option)}
              </TouchableOpacity>
            ))}
          </View>
          <View style={styles.row}>
            {this.props.options.slice(2, 4).map((option, index) => (
              <TouchableOpacity
                onPress={() => {
                  this.props.onChange(option);
                  this.updateActiveOption(option);
                }}>
                {this.createButton(option)}
              </TouchableOpacity>
            ))}
          </View>
          <View style={styles.row}>
            {this.props.options.slice(4, 5).map((option, index) => (
              <TouchableOpacity
                onPress={() => {
                  this.props.onChange(option);
                  this.updateActiveOption(option);
                }}>
                {this.createButton(option)}
              </TouchableOpacity>
            ))}
          </View>
        </VStack>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: width * 310,
    height: height * 98,
  },
  row: {
    width: width * 310,
    height: height * 44,
    flexDirection: 'row',
  },
});

export default ButtonMultipleOptions;
