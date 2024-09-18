import React from 'react';
import { View, Image, StyleSheet, ViewStyle, TextStyle, ImageStyle } from 'react-native';
import Text from '@/components/Text';

interface HeaderProps {
    title: string;
    logo: any;
}

const Header = ({ title, logo }: HeaderProps) => {
    return (
        <View style={styles.container}>
            {/*<View style={styles.logoContainer}>*/}
            {/*    <Image source={{ uri: logo }} style={styles.logoImage} />*/}
            {/*</View>*/}
            <Text style={styles.title}>{title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-end',
        padding: 20,
        backgroundColor: 'black',
        height: 110,
    } as ViewStyle,

    logoContainer: {
        marginRight: 10,
    } as ViewStyle,

    title: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    } as TextStyle,

    logoImage: {
        width: 40,
        height: 40,
        resizeMode: 'contain',
    } as ImageStyle,

});

export default Header;
