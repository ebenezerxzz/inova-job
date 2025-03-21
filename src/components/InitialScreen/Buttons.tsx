import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';

const Br = () => <Text>{"\n"}</Text>;
const { width, height } = Dimensions.get('window');

export const ButtonsInitialScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.textArea}>
                <Text style={styles.text1}> Olá! Seja bem vindo(a)!</Text>
                <Text style={styles.text2}> A melhor plataforma virtual <Br />     para vagas de emprego</Text>
            </View>
            <View style={styles.buttonsArea}>
                <TouchableOpacity style={styles.entrar}>
                    <Text style={styles.textButton}>entrar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    textArea: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        gap: '2.5%'
    },
    text1: {
        color: '#FFFFFF',
        fontWeight: '500',
        fontSize: width * 0.06
    },
    text2: {
        color: '#A3B5C1',
        fontWeight: '500',
        fontSize: width * 0.05,
    },
    buttonsArea: {
        flex: 1
    },
    textButton: {
        textTransform: 'uppercase',
        fontSize: width * 0.05,
        color: '#fff'
    },
    entrar: {
        display: 'flex',
        backgroundColor: '#3E5C76',
        width: width * 0.55,
        height: height * 0.05,
        borderRadius: 8
    }
})