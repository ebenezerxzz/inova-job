import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';

import { LogoComponent } from '../src/components/InitialScreen/LogoImages'
import { InputsInitialScreen } from '../src/components/InitialScreen/Inputs'

const { width, height } = Dimensions.get('window');

export const InitialScreen = () => {
    return (
        <View style={styles.globalContainer}>
            <View>
                <LogoComponent />
                <InputsInitialScreen />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    globalContainer: {
        flex: 1,
        width: width * 1,
        height: height  * 1,
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
    },
    titleInova: {
        display: 'flex',
        width: 180,
        height: 180
    }
})