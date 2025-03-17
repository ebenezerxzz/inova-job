import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { InitialScreen } from './screens/InitialScreen'

export default function App() {
  return (
    <View style={styles.container}>
      <InitialScreen />
      <StatusBar 
        backgroundColor='transparent'
        style="light-content" 
        translucent={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
