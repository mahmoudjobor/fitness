import {SafeAreaView, StyleSheet, TextInput,Text, Pressable} from 'react-native';
import React from 'react';
import { Link, router } from 'expo-router';


export default function SignUp(){
        const [firstname, setFirstname] = React.useState('')
        const [lastname, setLastname] = React.useState('')
        const [email, setEmail] = React.useState('')
        const [password, setPassword] = React.useState('')
    return(
        <SafeAreaView style={styles.view}>
            <Text style={styles.text}>First Name</Text>
    <TextInput 
    placeholder='First Name'
    placeholderTextColor={'gray'}
    onChangeText={setFirstname}
    value={firstname}
    style={styles.input}
    />
    <Text style={styles.text}>Last Name</Text>
    <TextInput
    placeholder='Last Name'
    placeholderTextColor={'gray'}
    onChangeText={setLastname}
    value={lastname}
    style={styles.input}
    />
    <Text style={styles.text}>Email</Text>
    <TextInput
    placeholder='Email'
    placeholderTextColor={'gray'}
    value={email}
    onChangeText={setEmail}
    style={styles.input}

    />
    <Text style={styles.text}>Password</Text>
    <TextInput
    secureTextEntry={true}
    placeholder="password"
    placeholderTextColor={'gray'}
    onChangeText={setPassword}
    value={password}
    style={styles.input}
    />
    <Pressable style={styles.pressable} 
    onPress={() =>{
        router.replace('/Signin')
    }}>
        <Text style={styles.text}>SignUp</Text>
    </Pressable>
    </SafeAreaView>
)}
const styles = StyleSheet.create({
    view:{ 
        flex:1,
        justifyContent: 'center',
        marginLeft: 4,
        alignItems: 'center'
    },
input: {
    width: 300,
    color:'white',
    borderColor : 'white',
    borderWidth : 1,
    padding : 4,
},
text:{
    color:'white',
},
pressable: {
    backgroundColor: 'blue',
    width: 100,
    alignItems: 'center',
    marginTop: 8,
    borderRadius: 50,
    padding: 5,
    


    
}
})

