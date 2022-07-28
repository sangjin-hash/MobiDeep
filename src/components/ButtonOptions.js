import React, {Component} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {colors, height, width} from '../util/globalStyles';
import {RFValue} from 'react-native-responsive-fontsize';
import {VStack} from 'native-base';

class ButtonOptions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeOption: this.props.options[-1],
    };
  }
  updateActiveOption = (activeOption) => {
    this.setState({
      activeOption,
    });
  };

  createButton(option) {
    let num = option.length;
    switch (num) {
      case 1:
        return (
          <View
            style={{
              width: width * 55,
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
      case 2:
        return (
          <View
            style={{
              width: width * 70,
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
      case 3:
        return (
          <View
            style={{
              width: width * 84,
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
      case 4:
        return (
          <View
            style={{
              width: width * 98,
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
      default:
        break;
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <VStack space={2}>
          <View style={styles.firstRow}>
            {this.props.options.slice(0, 4).map((option, index) => (
              <TouchableOpacity
                onPress={() => {
                  this.props.onChange(option);
                  this.updateActiveOption(option);
                }}>
                {this.createButton(option)}
              </TouchableOpacity>
            ))}
          </View>
          <View style={styles.secondRow}>
            {this.props.options.slice(4, 7).map((option, index) => (
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
    width: width * 295,
    height: height * 98,
  },
  firstRow: {
    width: width * 295,
    height: height * 44,
    flexDirection: 'row',
  },
  secondRow: {
    width: width * 272,
    height: height * 44,
    flexDirection: 'row',
  },
});

export default ButtonOptions;
