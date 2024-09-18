import React, {useEffect, useState} from 'react';
import {View, FlatList, StyleSheet, SafeAreaView} from 'react-native';
import Header from '@/components/Header';
import {categoryList} from "@/helpers/API";
import {CategoryItem} from '@/components/CategoryItem';

const renderCategory = ({ item, index }: { item: any, index: number }) =>
    <CategoryItem
        href={`/category/${item.categoryName}`}
        style={{marginTop: index === 0 ? 0 : 20}}
        name={item.categoryName}
        image={item.categoryThumb}
        description={item.categoryDescription?.length > 200 ? item.categoryDescription.slice(0, 200) + "..." : item.categoryDescription}
    />;

export default function Tab() {
    const [list, setList] = useState<any[]>([]);

    useEffect(() => {
        setList(categoryList)
    }, []);

    return (
        <View style={{flex: 1}}>
            <Header
                title={"Discover"}
                logo={"https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1726444800&semt=ais_hybrid"}
            />
            <FlatList
                contentContainerStyle={{ paddingBottom: 50 }}
                style={styles.container}
                data={list}
                renderItem={renderCategory} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        marginBottom: 100,
    },
});
