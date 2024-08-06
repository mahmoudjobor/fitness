import { Image } from 'expo-image';
import { StyleSheet, View, Text } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
    <Image
      style={styles.stretch}
      source={{uri: 'https://reactnative.dev/img/tiny_logo.png',}}
    />
    <Text>name</Text>
  </View>

  
)}
const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  stretch: {
    width: 50,
    height: 200,
    resizeMode: 'stretch',
  },
});