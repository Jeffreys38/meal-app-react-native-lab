import {Stack} from 'expo-router/stack';
import { Provider } from 'react-redux';
import store from '@/stores/store';

export default function Layout() {
    return (
        <Provider store={store}>
            <Stack>
                <Stack.Screen name="(tabs)" options={{headerShown: false}}/>

                <Stack.Screen name="category/[name]" options={{
                    title: "Category List",
                    headerBackTitle: "Previous",
                    headerStyle: {
                        backgroundColor: 'black',
                    },
                    headerTitleStyle: {
                        color: 'white',
                    },
                    headerTintColor: 'white'
                }}/>

                <Stack.Screen name="food/[id]" options={{
                    title: "Detail Food",
                    headerBackTitle: "Previous",
                    headerStyle: {
                        backgroundColor: 'black',
                    },
                    headerTitleStyle: {
                        color: 'white',
                    },
                    headerTintColor: 'white'
                }}/>
            </Stack>
        </Provider>
    );
}
