import {StyleSheet, View, Image, Text, TouchableOpacity} from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import {Link} from "expo-router";

type Props = {
    content: string,
    foodId: string,
    date: string,
    style?: any
}

export default function (props: Props) {
    return (
        <View style={[styles.container, props.style]}>
            <View style={styles.wrapUser}>
                <Image
                    style={styles.avatar}
                    source={require('@/assets/images/girl.webp')}
                />
                 <View style={styles.wrapUserContent}>
                     <Text style={styles.name}>Geogre Lokko</Text>
                     <Text style={styles.time}>{props.date}</Text>
                 </View>
            </View>
            <Text style={styles.content}>{props.content}</Text>
            <Link style={{marginTop: 10}} href={`/food/${props.foodId}`}>
                <View style={styles.card}>
                    <Text style={styles.cardContent}>Tap here to view</Text>
                    <AntDesign name="rightcircleo" size={24} color="white" />
                </View>
            </Link>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        color: 'black',
        padding: 10,
        borderRadius: 10
    },
    wrapUser: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    avatar: {
        height: 60,
        width: 60,
        borderRadius: 100
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    time: {
        fontSize: 16,
        color: '#666',
        marginTop: 5
    },
    wrapUserContent: {
        marginLeft: 10,
    },
    content: {
        textAlign: 'justify',
        marginTop: 5,
        fontSize: 16,
        lineHeight: 20
    },
    card: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'black',
        padding: 20,
        borderRadius: 10,
        marginTop: 10
    },
    cardContent: {
        fontSize: 18,
        color: 'white'
    }
});
