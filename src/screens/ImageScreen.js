import React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';

const ImageScreen = ({ navigation, route }) => {
    console.log(route)
    return (
        <View style={styles.mainView}>
            <Text>Image Screen</Text>
            <Button
                title='Go to Home'
                onPress={() => { navigation.navigate("App_to_Home") }} />
            <Button
                title='Go Back a Screen'
                onPress={() => { navigation.goBack() }} />
            <Button
                title="Go Back Home"
                onPress={() => { navigation.popToTop() }} />
        </View>
    )
}

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
})


export default ImageScreen;