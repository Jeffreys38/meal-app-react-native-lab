import React from 'react';
import {View, Text, Image, StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import {Link} from "expo-router";
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import Foundation from '@expo/vector-icons/Foundation';

export default function Tab() {

    return (
        <SafeAreaView style={{backgroundColor: 'black'}}>
           <ScrollView>
               <View style={styles.container}>
                   <Text style={styles.title}>Welcome to Out Meal App</Text>
                   <Text style={styles.description}>
                       Here is an overview of what our app offers:
                   </Text>
                   <Text style={styles.description}>
                       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                   </Text>
                   <Image
                       style={styles.image}
                       source={require('@/assets/images/chieft.avif')}
                   />
                   <Text style={styles.title}>Our Space</Text>
                   <View style={styles.groupImage}>
                       <Image
                           style={styles.group2}
                           source={require('@/assets/images/image2.jpg')}
                       />
                       <Image
                           style={[styles.group2, {marginLeft: 12}]}
                           source={require('@/assets/images/image1.jpg')}
                       />
                   </View>
                   <View style={styles.groupImage}>
                       <Image
                           style={styles.group2}
                           source={require('@/assets/images/image3.jpg')}
                       />
                       <Image
                           style={[styles.group2, {marginLeft: 12}]}
                           source={require('@/assets/images/image4.jpg')}
                       />
                   </View>
                   <Text style={styles.title}>Contact Via</Text>
                   <View style={{flexDirection: 'row'}}>
                       <AntDesign name="phone" size={24} color="white" style={{width: 30}} />
                       <Link href={"tel://09238932233"} style={{fontSize: 17, color: 'white', marginLeft: 10}}>0923.893.2233</Link>
                   </View>
                   <View style={{flexDirection: 'row', marginTop: 5}}>
                       <Entypo name="github" size={24} color="white" style={{width: 30}} />
                       <Link href={"https://github.com/Jeffreys38"} style={{fontSize: 17, color: 'white', marginLeft: 10}}>Jeffreys38</Link>
                   </View>
                   <View style={{flexDirection: 'row', marginTop: 5}}>
                       <Foundation name="social-linkedin" size={24} color="white" style={{width: 30}} />
                       <Link href={"https://zalo.me/0924061522"} style={{fontSize: 17, color: 'white', marginLeft: 10}}>Quoc Thang</Link>
                   </View>
               </View>
           </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        padding: 30,
        marginBottom: 100,
        height: '100%'
    },
    header: {
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        color: 'white',
    },
    description: {
        fontSize: 16,
        color: 'white',
        marginTop: 10,
        textAlign: 'justify'
    },
    image: {
        height: 300,
        resizeMode: 'contain'
    },
    groupImage: {
        flexDirection: 'row',
        marginTop: 10
    },
    group2: {
        width: '50%',
        height: 200,
        resizeMode: 'cover',
    }
});
