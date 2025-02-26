import { View, Text, StyleSheet } from 'react-native';

export default function InitialScreen() {
    return (
        <View style={styles.globalContainer}>
            <Text>
                InitialScreen
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    globalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1d3659'
    },
    textHome: {
        flex: 1,
        fontSize: 22,
        fontWeight: 'bold',
        justifyContent: 'center',
        alignItems: 'center'        
    }
})