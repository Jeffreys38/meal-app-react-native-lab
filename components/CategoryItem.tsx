import React from 'react';
import {
    View,
    Image,
    StyleSheet,
    ViewStyle,
    ImageStyle,
    TextStyle,
    Dimensions,
    Button,
    TouchableOpacity, StyleProp
} from 'react-native';
import Text from '@/components/Text';
import {Href, Link, useRouter} from "expo-router";

type Props = {
    name: string;
    image: string;
    description: string;
    href: string,
    style?: StyleProp<ViewStyle>
};

const windowDimensions = Dimensions.get('window');

export const CategoryItem: React.FC<Props> = ({name, image, description, href, style}) => {
    const router = useRouter();

    return (
        <View style={[styles.container, style]}>
            <Image
                source={{uri: image}}
                style={styles.image}
            />
            <View style={{marginLeft: 10, marginRight: 10, flex: 1, justifyContent: 'space-between'}}>
                <View>
                    <Text style={styles.title}>{name}</Text>
                    <Text style={styles.description}>{description}</Text>
                </View>
                <TouchableOpacity
                    style={{flexDirection:'row', flexWrap:'wrap'}}
                    onPress={() => router.push(href as Href<string>)}>
                    <Text style={styles.button}>Read More</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flex: 1,
        height: windowDimensions.height / 5,
    },

    image: {
        width: '37%',
        height: '100%',
        borderRadius: 10,
        resizeMode: 'cover',
        borderWidth: 4
    },

    title: {
        fontSize: 25,
        fontWeight: "bold",
    },

    description: {
        textAlign: 'justify'
    },

    button: {
        backgroundColor: 'black',
        color: 'white',
        padding: 7,
        marginTop: 10
    }
});
