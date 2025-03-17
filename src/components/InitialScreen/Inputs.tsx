import { View, Text, StyleSheet, Dimensions } from 'react-native';

const Br = () => <Text>{"\n"}</Text>;
const { width, height } = Dimensions.get('window');

export const InputsInitialScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.areaText}>
                <Text style={styles.text}> Olá! Seja bem vindo(a)</Text>
                <Text style={styles.text}> A melhor plataforma virtual <Br />     para vagas de emprego</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: height * 0.05,
    },
    areaText: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        
    },
    text: {
        fontSize: 25,
        color: '#fff',
        fontWeight: 'bold'
    }
})