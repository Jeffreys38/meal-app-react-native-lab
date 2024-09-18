
import {Href, useLocalSearchParams, useNavigation, usePathname} from 'expo-router';
import { fetchDetailFoodById } from "@/helpers/API";

import {ActivityIndicator, Dimensions, StyleSheet, View, Text} from 'react-native';
import React, {useEffect, useState} from "react";
import {DetailFoodtem} from "@/components/DetailFoodtem";

const windowDimensions = Dimensions.get('window');

export default function Page() {
    const { id } = useLocalSearchParams();
    const [food, setFood] = useState<any>();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchDetailFoodById(id as string)
            .then((data: any) => {
                setFood(data);
                setLoading(false);
            })
            .catch(() => {
                setLoading(true);
            })
    }, [id]);

    if (loading) {
        return (
            <View style={styles.loadingScreen}>
                <ActivityIndicator size="large" color="#fff" />
                <Text style={{color: 'white'}}>Please wait...</Text>
            </View>
        );
    }

    let outputText = food?.strInstructions.replace(/STEP (\d+)/g, (match: string, stepNumber: string) => {
        let step = parseInt(stepNumber);
        return '\n'.repeat(1) + match;
    });

    const capitalizeFirstLetter = (str: string): string => {
        if (!str) return str;
        return str.charAt(0).toUpperCase() + str.slice(1);
    };

    const filterIngredient = () => {
        const ingredientPattern = /^strIngredient\d+$/;

        return Object.keys(food)
            .filter(key => ingredientPattern.test(key))
            .map(key => food[key])
            .filter(value => value && value.trim() !== '')
            .map(value => capitalizeFirstLetter(value));
    };

    return (
        <View style={styles.container}>
            <DetailFoodtem
                id={id as string}
                ingredient={filterIngredient()}
                instructions={food?.strYoutube}
                href={`` as Href<string>}
                name={food?.strMeal}
                image={food?.strMealThumb}
                description={outputText}
                area={food?.strArea}
            />
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
        flex: 1,
        backgroundColor: 'black',
    }
});

