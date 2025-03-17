import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window')

export const LogoComponent = () => {
    return (
        <View style={styles.globalContainer}>
            <Image
                resizeMode='contain'
                style={styles.titleInova}
                source={require('../../../src/images/logoLogin.png')}
            />
            <Image
                source={require('../../images/businessman.gif')}
                resizeMode='contain'
                style={styles.image}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    globalContainer: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '10%'
    },
    titleInova: {
        display: 'flex',
        width: 280,
        height: 280
    },
    image: {
        display: 'flex',
        borderRadius: 500,
        width: width * 0.50,
        height: width  * 0.50
    }
})