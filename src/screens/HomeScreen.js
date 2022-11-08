import React from 'react';
import { Button, View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation, route }) => {
    console.log(route)
    return (
        <View style={styles.mainView}>
            <Text>Home Screen</Text>
            {/* Button Component */}
            <Button
                title='Star Wars'
                onPress={() => {
                    navigation.navigate("Home_to_Details", {
                        movie: {
                            title: "Star Wars",
                            release: 1977,
                            screenNumber: 1
                        }
                    })
                }} />
            <Button
                title="Black Panther"
                onPress={() => {
                    navigation.navigate("Home_to_Details", {
                        movie: {
                            title: "Black Panther",
                            release: 2018,
                            screenNumber: 1
                        }
                    })
                }} />
            <Button
                title="The Matrix"
                onPress={() => {
                    navigation.navigate("Home_to_Details", {
                        movie: {
                            title: "The Matrix",
                            release: 1999,
                            screenNumber: 1
                        }
                    })
                }} />
            <TouchableOpacity
                style={styles.touchableView}
                onPress={() => {
                    navigation.navigate("Home_to_Details", {
                        movie: {
                            title: "Star Wars",
                            release: 1977,
                            screenNumber: 1
                        }
                    })
                }}>
                <View><Text style={styles.touchableText}>Star Wars</Text></View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.touchableView}

                onPress={() => {
                    navigation.navigate("App_to_Gesture")
                }}>
                <View><Text style={styles.touchableText}>Gesture Time</Text></View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    touchableView: {
        marginBottom: 30,
        width: 150,
        height: 50,
        alignItems: 'center',
        backgroundColor: 'orange',
        borderWidth: 5,
        borderRadius: 10
    },
    touchableText: {
        textAlign: 'center',
        paddingTop: 5,
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
    }
})


export default HomeScreen;