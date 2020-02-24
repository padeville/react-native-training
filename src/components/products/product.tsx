import { View, Text, StyleSheet, TouchableHighlight } from "react-native";
import { Product, IpropsProductElement } from "./products.interface";
import React from 'react'

const ProductElement = ({ product, setModalVisible }: IpropsProductElement ) => {
    const { num, name, description, category, isVegan } = product;

    console.log(setModalVisible);
    return (
        <TouchableHighlight
          onPress={() => {
            setModalVisible(product);
          }}>
            <View style={styles.item}>
                <Text style={styles.num}>{num}</Text>
                <Text style={styles.name}>{name}</Text>
            </View>
        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    item: {
        padding: 10,
        marginVertical: 8,
        marginHorizontal: 16,
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    num: {
    },
    name: {
        alignItems: 'flex-end'
    },
});


export { ProductElement };