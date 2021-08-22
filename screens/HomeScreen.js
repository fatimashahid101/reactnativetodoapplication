import React, {useState, useContext} from 'react'
import {View, Text, StyleSheet } from 'react-native'
import FormButton from '../components/FormButton';
import {AuthContext} from '../navigation/AuthProvider';
const HomeScreen = () => {
    const {logout, user} = useContext(AuthContext);
    return (
       <View style={styles.Container}>
           <Text style={styles.text}>
              welcome {user.uid}
           </Text>
         <FormButton buttonTitle='Logout' onPress={() => logout()}/>
       </View>
    )
}

export default HomeScreen;
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