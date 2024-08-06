import { Stack } from "expo-router"
export default function Menu(){
    return (
        <Stack initialRouteName="profile">
        <Stack.Screen name="profile" options={{ headerShown: false }} />

      </Stack>
    )
}