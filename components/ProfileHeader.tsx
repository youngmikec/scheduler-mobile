import { View, Text, Image, StyleSheet, Platform } from 'react-native';
import { Link } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

import Colors from '../constants/Colors';

const ProfileHeader = () => {
    
    return (
        <View style={style.container}>
            <View style={style.profileSection}>
                <Image style={style.profileImage} source={require('../assets/images/profile-img.png')} />
                <Text style={style.profileText}>Hi Michael</Text>
            </View>
            <View style={style.notificationSection}>
                <Link href="/(pages)/Notifications">
                    <View style={style.notificationButton}>
                        <Ionicons name="notifications-outline" size={20} color={Colors.primary} />
                    </View>
                </Link>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        backgroundColor: Colors.white,
        flexDirection: 'row',
        alignContent: 'center',
        height: 100,
        paddingTop: Platform.OS === 'ios' ? 40 : 50,
        paddingBottom: 20,
        paddingHorizontal: 16,
    },
    profileSection: {
        flex: 1,
        gap: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    profileText: {
        fontSize: 20,
        fontWeight: "500",
        color: Colors.mediumDark
    },
    notificationSection: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    profileImage: {
        width: 48,
        height: 48,
        borderRadius: 20,
    },
    notificationButton: {
        borderColor: Colors.medium,
        borderWidth: 1,
        borderRadius: 18,
        padding: 6,
        height: 48,
        width: 48,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default ProfileHeader;