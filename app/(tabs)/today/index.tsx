import {View, Text, StyleSheet, FlatList, ScrollView} from 'react-native';
import Header from "@/components/Header";
import React from "react";
import FoodPost from "@/components/FoodPost";
import { RootState } from '@/stores/store';
import { Food, addFavoriteFood, removeFavoriteFood } from '@/stores/favoriteFoodSlice';
import {useDispatch, useSelector} from "react-redux";

export default function Tab() {
    const dispatch = useDispatch();
    const favoriteFoods = useSelector((state: RootState) => state.favoriteFood.favoriteFoods);

    const Render = () => favoriteFoods.map((food, index) => (
        <FoodPost
            key={index}
            foodId={food.id}
            content={food.content}
            date={food.date}
            style={{marginTop: 10}}
        />
    ));

    return (
        <ScrollView style={styles.container}>
            <Render />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        color: 'white',
        padding: 20
    },
});
