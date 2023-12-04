import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Stack, useNavigation } from "expo-router";
import { useFonts } from 'expo-font';

import { Entypo } from '@expo/vector-icons';
import Colors from '../../constants/Colors';

const PagesLayout = () => {
    const navigation = useNavigation();
    const goBack = () => navigation.goBack();

    const [loaded, error] = useFonts({
        KumbhSansRegular: require('../../assets/fonts/KumbhSans-Regular.ttf'),
        KumbhSansBold: require('../../assets/fonts/KumbhSans-Bold.ttf'),
      });
    
      // Expo Router uses Error Boundaries to catch errors in the navigation tree.
      useEffect(() => {
        if (error) throw error;
      }, [error]);

    return (
        <Stack>
            <Stack.Screen
                name="Notifications"
                options={{
                    title: "Notifications",
                    headerTitleStyle: {
                        fontSize: 26,
                        fontFamily: 'KumbhSansRegular',
                        fontWeight: 'bold',
                    },
                    headerShadowVisible: false,
                    headerStyle: {
                        backgroundColor: '#fff',
                    },
                    headerLeft: () => (
                        <TouchableOpacity onPress={goBack}>
                            <View style={style.backButton}>
                                <Entypo name="chevron-thin-left" size={20} color={Colors.primary} />
                            </View>
                        </TouchableOpacity>
                    ),
                }} 
            />
        </Stack>
    )
}

const style = StyleSheet.create({
    backButton: {
        borderColor: Colors.medium,
        borderWidth: 1,
        borderRadius: 18,
        padding: 6,
        height: 48,
        width: 48,
        marginRight: 60,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default PagesLayout;