import React, {useEffect} from 'react';
import {
    Text,
    View,
    Image,
    StyleSheet,
    ViewStyle,
    Dimensions,
    StyleProp, ScrollView, TouchableOpacity
} from 'react-native';
import {Href, useRouter} from "expo-router";
import { WebView } from 'react-native-webview';
import {useDispatch} from "react-redux";
import {addFavoriteFood, Food} from "@/stores/favoriteFoodSlice";

type Props = {
    id: string,
    name: string;
    image: string;
    area: string;
    instructions: string;
    ingredient: string[];
    description: string;
    href: Href<string>
    style?: StyleProp<ViewStyle>
};

const windowDimensions = Dimensions.get('window');

export const DetailFoodtem: React.FC<Props> = (props: Props) => {
    const router = useRouter();
    const dispatch = useDispatch();

    function extractYouTubeVideoId(): string | null {
        let splited = props.instructions.split("v=");
        let splitedAgain = splited[1].split("&");
        let videoId = splitedAgain[0];

        return videoId ? videoId : null;
    }

    const RenderIngredients = () =>
        props.ingredient.map((value, index) => (
            <Text key={index} style={styles.description}>
                {index + 1}. {value}
            </Text>
        ));

    function handleShare() {
        const newFood: Food = {
            id: props.id,
            content: props.name,
            date: new Date().toLocaleTimeString()
        };
        dispatch(addFavoriteFood(newFood));
        alert("Share successfully!")
    }

    return (
        <ScrollView
            style={[props.style]}>
            <View style={styles.wrapTitle}>
                <Image
                    source={{uri: props.image}}
                    style={styles.image}
                />
                <Text style={styles.title}>莊子</Text>
            </View>
            <View style={styles.container}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', flexWrap: 'wrap'}}>
                    <Text style={styles.foodName}>{props.name}</Text>

                    <TouchableOpacity style={styles.wrapBtnShare} onPress={handleShare}>
                        <Text style={styles.btnShare}>Share food</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.subTitle}>Area: {props.area}</Text>
                <Text style={styles.description}>{props.description}</Text>
                <Text style={styles.foodTitle}>Instruction</Text>
                <WebView
                    javaScriptEnabled={true}
                    style={{flex: 1, height: 300}}
                    source={{ uri: props.instructions }}
                    mediaPlaybackRequiresUserAction={true}
                />
                <Text style={styles.foodTitle}>Requirements</Text>
                <RenderIngredients />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    wrapTitle: {
      position: 'relative',
      marginTop: 10,
    },
    image: {
        width: 300,
        height: 300,
        resizeMode: 'cover',
        borderRadius: 500,
        position: 'absolute',
        left: 20
    },
    title: {
        fontSize: 60,
        fontWeight: "bold",
        color: 'white',
        transform: [{ rotate: '90deg' }],
        position: 'absolute',
        right: 0,
        top: 120
    },
    container: {
        marginTop: 330,
        padding: 10,
    },
    foodName: {
        color: 'white',
        fontSize: 22,
        fontWeight: '600',

    },
    subTitle: {
        color: '#898886',
        fontSize: 18
    },
    description: {
        lineHeight: 21,
        color: 'white',
        marginTop: 10
    },
    button: {
        backgroundColor: 'black',
        color: 'white',
        padding: 7,
        marginTop: 10
    },
    foodTitle: {
        color: 'white',
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 18
    },
    wrapBtnShare: {
        backgroundColor: 'white',
        borderRadius: 25,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderWidth: 1,
        borderColor: 'black',
        marginVertical: 5,
    },
    btnShare: {
        color: 'black',
        fontSize: 16,
        textAlign: 'center',
    },
});
