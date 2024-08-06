import React from "react"
import {SafeAreaView, StyleSheet, TextInput,Text, Pressable} from 'react-native';
import { Link, router } from 'expo-router';

export default function Signin(){
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    return(
        <SafeAreaView style={styles.view}>
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
    placeholder="password"
    secureTextEntry={true}
    placeholderTextColor={'gray'}
    onChangeText={setPassword}
    value={password}
    style={styles.input}
    />
    <Pressable style={styles.pressable}
    onPress={() =>{
        router.replace('../(menu)/profile')
    }}>
        <Text style={styles.text}>SignIn</Text>
    </Pressable>
    <Text style={styles.text}>if you don't have an account? <Link style={styles.link} href={"/Signup"}>Create an account</Link></Text>
    </SafeAreaView>
    )}

const styles = StyleSheet.create({
    view:{ 
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        
        
        
        
    },
    input: {
            
            color:'white',
            borderColor : 'white',
            borderWidth : 1,
            margin:3,
            padding:3,
            width: 300,
    },
    text:{
            color:'white',
    },
    link :{
        color: 'lightblue',
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