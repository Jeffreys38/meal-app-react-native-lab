import { StyleSheet, ScrollView, Text} from 'react-native';
import React from "react";
import { RootState } from '@/stores/store';
import {useDispatch, useSelector} from "react-redux";

export default function Tab() {
    const dispatch = useDispatch();
    const favoriteFoods = useSelector((state: RootState) => state.favoriteFood.favoriteFoods);

    return (
        <ScrollView style={styles.container}>
            <Text style={{color: 'white', fontSize: 30, textAlign: 'center'}}>Comming Soon</Text>
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
