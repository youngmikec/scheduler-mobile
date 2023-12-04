import { View, Text, StyleSheet, FlatList, ScrollView, SafeAreaView } from 'react-native';
import NotificationListItem from '../../components/NotificationList';

export interface Notification { 
    id: string,
    title: string;
    description: string;
    createdAt: Date;
}

const NotificationScreen = () => {
    const notifications: Array<Notification> = [
        {
            id: '1',
            title: 'New list created',
            description: 'A new attendance list was created in the Friends of Figma, Enugu',
            createdAt: new Date()
        },
        {
            id: '2',
            title: 'New list created',
            description: 'A new attendance list was created in the Friends of Figma, Enugu',
            createdAt: new Date()
        },
        {
            id: '3',
            title: 'New list created',
            description: 'A new attendance list was created in the Friends of Figma, Enugu',
            createdAt: new Date()
        },
        {
            id: '4',
            title: 'New list created',
            description: 'A new attendance list was created in the Friends of Figma, Enugu',
            createdAt: new Date()
        },
        {
            id: '5',
            title: 'New list created',
            description: 'A new attendance list was created in the Friends of Figma, Enugu',
            createdAt: new Date()
        },
        {
            id: '6',
            title: 'New list created',
            description: 'A new attendance list was created in the Friends of Figma, Enugu',
            createdAt: new Date()
        },
        {
            id: '7',
            title: 'New list created',
            description: 'A new attendance list was created in the Friends of Figma, Enugu',
            createdAt: new Date()
        },
        {
            id: '8',
            title: 'New list created',
            description: 'A new attendance list was created in the Friends of Figma, Enugu',
            createdAt: new Date()
        },
        {
            id: '9',
            title: 'New list created',
            description: 'A new attendance list was created in the Friends of Figma, Enugu',
            createdAt: new Date()
        },
        {
            id: '10',
            title: 'New list created',
            description: 'A new attendance list was created in the Friends of Figma, Enugu',
            createdAt: new Date()
        },
        {
            id: '11',
            title: 'New list created',
            description: 'A new attendance list was created in the Friends of Figma, Enugu',
            createdAt: new Date()
        },
        {
            id: '12',
            title: 'New list created',
            description: 'A new attendance list was created in the Friends of Figma, Enugu',
            createdAt: new Date()
        },
        {
            id: '13',
            title: 'New list created',
            description: 'A new attendance list was created in the Friends of Figma, Enugu',
            createdAt: new Date()
        },
    ]
    return (
        <>
            <SafeAreaView style={style.container}>
                <FlatList 
                    data={notifications}
                    renderItem={({item}) => <NotificationListItem data={item} />}
                    keyExtractor={item => item.id}
                />
            </SafeAreaView>
        </>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingVertical: 20,
    }
})

export default NotificationScreen;