import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';

const GestureScreen = ({ navigation, route }) => {

    return (
        <PanGestureHandler
            onGestureEvent={(gestureEvent) => {
                const { translationX: tranX } = gestureEvent.nativeEvent
                const { translationY: tranY } = gestureEvent.nativeEvent
                console.log(tranX, tranY)
            }}
        >
            <View style={styles.mainView}>

            </View>
        </PanGestureHandler>
    )
}

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
    }
})


export default GestureScreen;