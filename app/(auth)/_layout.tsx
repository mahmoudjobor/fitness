import { Stack } from "expo-router"
export default function Authentication(){
    return (
        <Stack initialRouteName="Signin">
        <Stack.Screen name="Signin" options={{ headerShown: false }} />
        <Stack.Screen name="Signup" />

      </Stack>
    )
}