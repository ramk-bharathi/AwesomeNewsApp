/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    ToastAndroid
} from 'react-native';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
    showToasts = () => {
        ToastAndroid.showWithGravity('You clicked your name', ToastAndroid.SHORT, ToastAndroid.BOTTOM);
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.profileImageContainer}>
                    <View style={styles.profileImage}/>
                </View>
                <View style={styles.profileNameContainer}>
                    <Text onPress={this.showToasts} style={styles.profileNameText}>Hello Ram K</Text>
                </View>
                <View style={styles.profileBottomContainer}>
                    <View style={styles.bottomItem}>
                        <View style={styles.bottomItemInner}/>
                    </View>
                    <View style={styles.bottomItem}>
                        <View style={styles.bottomItemInner}/>
                    </View>
                    <View style={styles.bottomItem}>
                        <View style={styles.bottomItemInner}/>
                    </View>
                    <View style={styles.bottomItem}>
                        <View style={styles.bottomItemInner}/>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    profileImageContainer: {
        height: "45%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#b3e5fc"
    },
    profileImage: {
        height: 140,
        width: 140,
        borderWidth: 5,
        borderRadius: 100,
        borderColor: "#c8e6c9",
        backgroundColor: "#a5d6a7"
    },
    profileNameContainer: {
        height: "10%",
        backgroundColor: "#ffe0b2",
        justifyContent: "center",
        alignItems: "center"
    },
    profileBottomContainer: {
        height: "45%",
        backgroundColor: "#b39ddb",
        flexDirection: "row",
        flexWrap: "wrap",
        padding: 5
    },
    bottomItem: {
        height: "50%",
        width: "50%",
        padding: 5
    },
    bottomItemInner: {
        flex: 1,
        backgroundColor: "#b0bec5"
    },
    profileNameText: {
        fontSize: 30
    }
});
