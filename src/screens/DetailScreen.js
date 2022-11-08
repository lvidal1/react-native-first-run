import React, { useEffect, useState } from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';

const API_KEY = 'apikey=f8691e86'

const DetailScreen = ({ navigation, route }) => {
    console.log(route)

    const { movie } = route.params;
    const [details, setDetails] = useState(null)

    useEffect(() => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', `http://www.omdbapi.com/?${API_KEY}&t=marvel&y=2008`)
        xhr.send();

        xhr.onload = () => {
            if (xhr.status == 200 && xhr.readyState == xhr.DONE) {
                setDetails(JSON.parse(xhr.response))
            }
        }
    }, [])

    return (
        <View style={styles.mainView}>
            {details && (
                <>
                    <Text style={{ fontSize: 40 }}>{details.Title} ({details.Released})</Text>
                    <Text style={{ fontSize: 20 }} >{details.Plot}</Text>
                </>
            )}

            <Button
                title="Go to Image"
                onPress={() => { navigation.navigate("Details_to_Image") }} />
            <Button
                title="More Details"
                onPress={() => {
                    movie.screenNumber = movie.screenNumber + 1;
                    console.log(movie);
                    navigation.push("Details_to_Details",
                        { movie: movie })
                }} />
            <Button
                title="Go Back to Home"
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


export default DetailScreen;