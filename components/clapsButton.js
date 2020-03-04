import React, {useState, useEffect, Component} from 'react';
import { 
  Animated,
  Easing,
  Dimensions,
  StyleSheet, 
  Image,
  Text, 
  View, 
  Animate,
  TouchableOpacity} from 'react-native';

  export default class clapsButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            claps: []
        }
        this.clap = this.clap.bind(this);
        this.renderBubbles = this.renderBubbles.bind(this);
    }

    clap() {
        let count = this.state.count;
        let claps = this.state.claps;
        count++;
        claps.push(count);
        this.setState({count});
        console.log(count);
    }

    renderBubbles() {
        return this.state.claps.map((countNum) => <ClapBubble key={countNum} count={countNum} animationComplete={this.animationComplete.bind(this)}/>)
    }

    animationComplete(countNum) {
        claps = this.state.claps;
        claps.splice(claps.indexOf(countNum), 1);
        this.setState({claps});
    }

    render() {
        return(
            <View style={{flex: 1}}>
                <TouchableOpacity 
                    activeOpacity={0.8} 
                    style={styles.clapButton}
                    onPress={this.clap}
                >
                    <Image source={require('../assets/medium_clap.jpeg')} style={{width: 40, height: 40}}/>
                </TouchableOpacity>
                {this.renderBubbles()}
            </View>
        );
    }
  }

  class ClapBubble extends Component {
    constructor() {
        super()
        this.state = {
            yPosition: new Animated.Value(0),
            opacity: new Animated.Value(0)
        }
    }
    
    componentDidMount() {
        Animated.parallel([
            Animated.timing(this.state.yPosition, {
                toValue: -150,
                duration: 600}),
            Animated.timing(this.state.opacity, {
                toValue: 1,
                duration: 800})
        ]).start(() => {
            setTimeout(() => {
                this.props.animationComplete(this.props.count);
            }, 500)
        });
    }

    render(){
        let animationStyle= {
            transform: [{translateY: this.state.yPosition}],
            opacity: this.state.opacity
        }
        return(
            <Animated.View style={[styles.clapBubble, animationStyle]}>
                <Text
                    style={styles.bubbleText}
                >{this.props.count}
                </Text> 
            </Animated.View>
        )
    }
  }

const styles = StyleSheet.create({
    clapButton: {
        position: 'absolute',
        height: 60,
        width: 60,
        borderRadius: 60,
        backgroundColor: '#ecf0f1',
        bottom: 40,
        right: 40,
        elevation: 3,
        justifyContent: 'center',
        alignItems: 'center'
    },
    clapBubble: {
        position: 'absolute',
        height: 60,
        width: 60,
        borderRadius: 60,
        backgroundColor: '#15a872',
        bottom: 60,
        right: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    bubbleText: {
        color: 'white',
        fontSize: 28,
        fontWeight: 'bold'
    }

});