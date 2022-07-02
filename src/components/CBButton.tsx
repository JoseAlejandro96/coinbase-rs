import React, { FC } from 'react';
import {
  Text,
  View,
  TouchableHighlight,
  Animated,
  StyleSheet,
} from 'react-native';
import * as Haptics from 'expo-haptics';
import Colors from '../constants/Colors';

export interface CBButtonProps {
  title: string
}

const CBButton: FC<CBButtonProps> = ({title}) => {

  const animatedValue = new Animated.Value(1);

  const onPressIn = () => {
    Animated.spring(animatedValue, {
      toValue: 0.9,
      useNativeDriver: true
    }).start();
  }

  const onPressOut = () => {
    Animated.spring(animatedValue, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  const animatyedStyle = {
    transform: [{scale: animatedValue}]
  }

  return (
    <Animated.View style={[styles.container, animatyedStyle]}>
      <TouchableHighlight
        style={{borderRadius: 10}}
        onPressIn={onPressIn}
        onPressOut={onPressOut}
        onPress={() => {
          Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy)
        }}
      >
        <View style={styles.button}>
          <Text style={styles.text}>{title}</Text>
        </View>
      </TouchableHighlight>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '85%',
    borderRadius: 8
  },
  button:{
    width: '100%',
    height: 57,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.cbBlue,
    borderRadius: 10
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16
  }
})


export default CBButton;