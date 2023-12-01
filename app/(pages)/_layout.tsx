import { Stack } from "expo-router"
import ProfileHeader from "../../components/ProfileHeader"

const PagesLayout = () => {
    return (
        <Stack>
            <Stack.Screen 
                name="Notifications"
                options={{
                    header: () => <ProfileHeader />,
                }} 
            />
        </Stack>
    )
}

export default PagesLayout;