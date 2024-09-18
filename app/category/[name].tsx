
import {useLocalSearchParams, useNavigation} from 'expo-router';
import { fetchFoodsByCategory } from "@/helpers/API";

import {ActivityIndicator, FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from "react";
import {FoodItem} from "@/components/FoodItem";

const renderCategory = ({ item, index }: { item: any, index: number }) =>
    <FoodItem
        href={`/food/${item.foodId}`}
        style={{marginTop: index === 0 ? 0 : 9}}
        name={item.foodName}
        image={item.foodImage}
        description={item.foodDescription?.length > 100 ? item.foodDescription.slice(0, 100) + "..." : item.foodDescription}
    />;

export default function Page() {
    const { name } = useLocalSearchParams();
    const [foodList, setFoodList] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchFoodsByCategory(name as string)
            .then((data: any) => {
                setFoodList(data);
                setLoading(false);
            })
            .catch(() => {
                setLoading(true);
            })

    }, [name]);

    if (loading) {
        return (
            <View style={styles.loadingScreen}>
                <ActivityIndicator size="large" color="#fff" />
                <Text style={{color: 'white'}}>Please wait...</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <FlatList
                initialNumToRender={30}
                data={foodList}
                renderItem={renderCategory} />
        </View>
    )
}

const styles = StyleSheet.create({
    loadingScreen: {
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    container: {
        padding: 10,
        backgroundColor: 'black'
    }
});

