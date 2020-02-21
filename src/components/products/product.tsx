import { View, Text, StyleSheet } from "react-native";
import { Product, IpropsProductElement } from "./products.interface";
import React from 'react'

const ProductElement = ({ product }: IpropsProductElement ) => {
    const { num, name, description, category, isVegan } = product;
    return (
        <View style={styles.item}>
            <Text style={styles.title}>{num}</Text>
            <Text style={styles.title}>{name}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 5,
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
});


export { ProductElement };