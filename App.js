import React, {useState, useEffect, Component} from 'react';
import { 
  Animated,
  Easing,
  Dimensions,
  StyleSheet, 
  Image,
  Text, 
  View } from 'react-native';

  import ClapsButton from './components/clapsButton' 

// const { width, height } = Dimensions.get('window');
// const cloudImage = require('./assets/cloud.png');
// const imageHeight = 200;
// const imageWidth = 300;

export default class App extends Component{
  // const [animatedValue, setAnimatedValue] = React.useState(new Animated.Value(0))

  // React.useEffect(() => {
  //   setAnimatedValue(width);
  //   Animated.timing(
  //     animatedValue, {
  //       toValue: -imageWidth,
  //       duration: 6000,
  //       easing: Easing.linear,
  //       useNativeDriver: true,
  //     }
  //   ).start();
  // }, [])
  render() {
      return (
    // <View style={styles.background}>
    //     <Animated.View
    //       style={{
    //         transform: [
    //           {
    //             translateY: animatedValue.interpolate({
    //               inputRange: [0, 1],
    //               outputRange: [-600, 0]
    //             })
    //           }
    //         ],
    //       source={cloudImage}
    //     />
    // </View>
    <View style={styles.container}>
      <ClapsButton />
    </View>
  );
  }
}

const styles = StyleSheet.create({
  // background: {
  //   flex: 1,
  //   backgroundColor: 'cyan',
  // },
  // image: {
  //   height: imageHeight,
  //   position: 'absolute',
  //   top: height / 3,
  //   width: imageWidth,
  // },
  container: {
    flex: 1,
    backgroundColor: '#FDE3A7'
  }
});
