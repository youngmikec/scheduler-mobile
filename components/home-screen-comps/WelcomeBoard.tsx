import { View, Text, StyleSheet, Image } from 'react-native';
import Colors from '../../constants/Colors';

const WelcomeBoard = () => {
    return (
        <>
            <View style={style.container}>
                <Image style={style.vectorImg} source={require('../../assets/images/vector-bg.png')} />
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
        right: -3
    }
})

export default WelcomeBoard;