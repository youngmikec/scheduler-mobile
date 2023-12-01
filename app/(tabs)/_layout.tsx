import React, { useEffect } from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Pressable, useColorScheme } from 'react-native';

import Colors from '../../constants/Colors';
import ProfileHeader from '../../components/ProfileHeader';
import { useFonts } from 'expo-font';


export default function TabLayout() {
  const colorScheme = useColorScheme();
  const [loaded, error] = useFonts({
    KumbhSansRegular: require('../../assets/fonts/KumbhSans-Regular.ttf'),
    KumbhSansBold: require('../../assets/fonts/KumbhSans-Bold.ttf'),
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        tabBarLabelStyle: {
          fontSize: 18,
          fontFamily: 'KumbhSansRegular',
          color: Colors.primary
        }
      }}>
      <Tabs.Screen
        name="home-tab"
        options={{
          title: 'Home',
          headerTitleStyle: {
            display: 'none'
          },
          tabBarShowLabel: false,
          header: () => <ProfileHeader />,
          tabBarIcon: () => <MaterialIcons name='home-filled' size={28} color={Colors.primary} />,
        }}
      />
      <Tabs.Screen
        name="Message-tab"
        options={{
          title: 'Message',
          header: () => <ProfileHeader />,
          tabBarIcon: () => <Ionicons name="chatbubble-ellipses-outline" size={28} color={Colors.primary} />,
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: 'Tab Two',
          tabBarIcon: () => <Ionicons name="chatbubble-ellipses-outline" size={28} color={Colors.primary} />,
        }}
      />
    </Tabs>
  );
}
