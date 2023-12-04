import React, { useEffect } from 'react';
import { useFonts } from 'expo-font';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { Notification } from '../app/(pages)/Notifications';
import Colors from '../constants/Colors';

type Props = {
    data: Notification
}

const NotificationListItem = ({ data }: Props) => {
    const [loaded, error] = useFonts({
        KumbhSansRegular: require('../assets/fonts/KumbhSans-Regular.ttf'),
        KumbhSansBold: require('../assets/fonts/KumbhSans-Bold.ttf'),
      });
    
      // Expo Router uses Error Boundaries to catch errors in the navigation tree.
      useEffect(() => {
        if (error) throw error;
      }, [error]);

    return (
        <>
            <View style={style.container}>
                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <Text style={style.title}>{data.title}</Text>
                    <Text style={style.descriptionText}>{data.description}</Text>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={style.dateText}>{data.createdAt.getFullYear()}</Text>
                    <View style={style.iconCover}>
                        <AntDesign name="check" size={16} color={Colors.lightGrey} />
                    </View>
                </View>
            </View>
        </>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        paddingHorizontal: 16,
        marginVertical: 12,
        borderBottomColor: Colors.lightGrey,
        borderBottomWidth: 2,
        borderRadius: 5
    },
    title: {
        fontSize: 16,
        color: Colors.mediumDark,
        fontWeight: 'bold',
        fontFamily: 'KumbhSansBold',
        // fontFamily: 'KumbhSansRegular',
    },
    descriptionText: {
        fontSize: 12,
        marginVertical: 4,

    },
    dateText: {
        color: Colors.secondary,
        fontSize: 16,
        fontFamily: 'KumbhSansBold',
        fontWeight: 'bold',
    },
    iconCover: {
        padding: 8,
        marginVertical: 4,
        borderRadius: 20,
        fontFamily: 'KumbhSansRegular',
        backgroundColor: Colors.medium
    }
})

export default NotificationListItem;