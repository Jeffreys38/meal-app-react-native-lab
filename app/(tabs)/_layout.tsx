import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';
import {Tabs} from 'expo-router';
import {ViewStyle, View, Platform} from 'react-native';
import React from "react";

const iconSize = 24;

const icons = {
    home: <Entypo name="home" size={iconSize}/>,
    earth: <FontAwesome6 name="earth-africa" size={iconSize}/>,
    book: <AntDesign name="book" size={iconSize}/>,
    user: <FontAwesome6 name="user" size={iconSize}/>
};

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: 'white',
                tabBarStyle: styles.tabBarStyle,
                tabBarItemStyle: styles.tabBarItemStyle,
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    headerShown: false,
                    title: '',
                    tabBarIcon: ({focused}) => (
                        <TabIcon focused={focused} icon={icons.home}/>
                    ),
                }}
            />
            <Tabs.Screen
                name="today"
                options={{
                    title: '',
                    headerShown: false,
                    tabBarIcon: ({focused}) => (
                        <TabIcon focused={focused} icon={icons.book}/>
                    ),
                }}
            />
            <Tabs.Screen
                name="overview"
                options={{
                    title: '',
                    headerShown: false,
                    tabBarIcon: ({focused}) => (
                        <TabIcon focused={focused} icon={icons.earth}/>
                    ),
                }}
            />
        </Tabs>
    );
}

const TabIcon = ({focused, icon}: { focused: boolean, icon: any }) => {
    return (
        <View style={[focused ? styles.focusedTabStyle : null]}>
            {React.cloneElement(icon, {color: focused ? 'black' : 'white'})}
        </View>
    );
};

const styles = {
    tabBarStyle: {
        position: "absolute",
        bottom: 20,
        backgroundColor: 'black',
        borderRadius: 40,
        width: "92%",
        height: 70,
        left: "3.5%",
        borderWidth: 0,
        borderTopColor: "white",
        right: "3.5%",
    } as ViewStyle,

    tabBarItemStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        ...Platform.select({
            ios: {
                marginBottom: 5,
            }
        })
    } as ViewStyle,

    focusedTabStyle: {
        position: 'absolute',
        backgroundColor: 'white',
        borderRadius: 50,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
    } as ViewStyle
};
