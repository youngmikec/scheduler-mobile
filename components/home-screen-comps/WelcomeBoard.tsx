import { View, Text, StyleSheet, Image } from 'react-native';
import Colors from '../../constants/Colors';

const WelcomeBoard = () => {
    return (
        <>
            <View style={style.container}>
                <Image style={style.vectorImg} source={require('../../assets/images/vector-bg.png')} />
                <Text style={style.welcomeText}>Welcome Back Michael</Text>
                <Text style={style.text}>Did you know that taking a glass of water early in the morning can help make you stay happy energetic for most of the day?</Text>
            </View>
        </>
    )
}

const style = StyleSheet.create({
    container: {
        height: 200,
        width: '100%',
        backgroundColor: Colors.primary,
        padding: 6,
        borderRadius: 8,
        position: 'relative'
    },
    vectorImg: {
        position: 'absolute',
        top: -5,
        right: -3,
    },
    welcomeText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 20
    },
    text: {
        color: '#fff',
        fontSize: 16,
    }
})

export default WelcomeBoard;