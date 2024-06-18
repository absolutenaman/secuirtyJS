import { View, Text, TextInput, Button, Alert } from 'react-native'
import React, { useState } from 'react'
import EncryptedStorage from 'react-native-encrypted-storage';
// in transit and in rest

const [userData,setUserData]=useState(null);

async function storeUserSession() {
    try {
        await EncryptedStorage.setItem(
            "user_session",
            JSON.stringify({
                age : 21,
                token : "ACCESS_TOKEN",
                userData:userData
            })
        );
        Alert("Data stored successfully")
    } catch (error) {
        Alert(JSON.stringify(error))
    }
}
const encryption = () => {
  return (
    <View>
      <Text>Encryption & Decryption Demo </Text>
      <TextInput style={styles.input}
       onChangeText={(text)=>setUserData(text)}
      >
      </TextInput>
      <Button onPress={storeUserSession}></Button>
    </View>
  )
}

const styles=StyleSheet.create({
    input:{
        padding:5,
        borderColor:'black'
    }
})
export default encryption