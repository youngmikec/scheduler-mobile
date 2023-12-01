import { TouchableOpacity } from 'react-native';
import { Ionicons } from "@expo/vector-icons"
import { useNavigation } from "expo-router";
import Colors from '../constants/Colors';

const BackButton = () => {
    const navigation = useNavigation();
    
    return (
        <TouchableOpacity onPress={() => {navigation.goBack()}}>
            <Ionicons name='close-outline' size={28} color={Colors.primary} />
        </TouchableOpacity>
    )   
}

export default BackButton;