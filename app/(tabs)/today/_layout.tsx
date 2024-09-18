import { Drawer } from 'expo-router/drawer';

export default function SettingLayout() {
    return (
        <Drawer>
            <Drawer.Screen name="index" options={{
                title: 'Today',
                headerStyle: {
                    backgroundColor: 'black',
                },
                headerTitleStyle: {
                    color: 'white'
                },
                headerTintColor: 'white'
            }} />
            <Drawer.Screen name="settings" options={{
                title: 'Settings',
                headerStyle: {
                    backgroundColor: 'black',
                },
                headerTitleStyle: {
                    color: 'white'
                },
                headerTintColor: 'white'
            }} />
        </Drawer>
    );
}
