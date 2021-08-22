import React from 'react'
import {View, Text, StyleSheet } from 'react-native'
const AboutScreen = () => {
    return (
       <View style={styles.Container}>
           <Text style={styles.text}>
              welcome to the About screen
           </Text>
       </View>
    )
}

export default AboutScreen;
const styles = StyleSheet.create({
    Container: {
        backgroundColor: '#f9fafd',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    },
    text: {
        fontSize: 20,
        color: '#333333'
    }
})