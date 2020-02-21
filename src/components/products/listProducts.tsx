import React, { Component, Dispatch } from 'react'
import { connect } from 'react-redux';
import { AppState } from '../../states/types';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import { IRecipeProps, IRecipeState } from './products.interface';
import { ProductElement } from './product';




export class listProducts extends Component<IRecipeProps, IRecipeState> {
    render() {
    return (
            <View>
                <FlatList
                    data={this.props.products}
                    renderItem={({ item }) => <ProductElement product={item} />}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        )
    }
}

const mapStateToProps = (state: AppState) =>({
    products: state.ProductList
});

export default connect(
    mapStateToProps,
    null
)(listProducts);

