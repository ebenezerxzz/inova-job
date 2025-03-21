import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';

import { LogoComponent } from '../components/InitialScreen/LogoImages'
import { ButtonsInitialScreen } from '../components/InitialScreen/Buttons'

const { width, height } = Dimensions.get('window');

export const InitialScreen = () => {
    return (
        <View style={styles.globalContainer}>
                <LogoComponent />
                <ButtonsInitialScreen />
        </View>
    );
}

const styles = StyleSheet.create({
    globalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',        
        flexDirection: 'column',
        backgroundColor: '#223A5C',
        width:  '100%',
        height: '100%'        
    },

})