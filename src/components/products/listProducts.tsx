import React, { Component, Dispatch } from 'react'
import { connect } from 'react-redux';
import { View, FlatList, Text, StyleSheet, Modal, Alert, TouchableHighlight } from 'react-native';
import { IRecipeProps, IRecipeState, Product } from './products.interface';
import { ProductElement } from './product';
import { ProductListAction } from '../../states/types';
import { PRODUCT_LIST_ACTION_TYPES, SelectProduct } from '../../states/product-list/action';
import { IAppState } from '../../states/store';

export class listProducts extends Component<IRecipeProps, IRecipeState> {
    render() {
        return (
            <View>
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.props.selectedProduct !== null}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                    }}>
                    <View style={{ marginTop: 22 }}>
                        <View>
                            <Text>{this.props.selectedProduct?.name}</Text>
                            <Text>{this.props.selectedProduct?.num}</Text>

                            <TouchableHighlight
                                onPress={() => {
                                    this.props.setlectProduct(null);
                                }}>
                                <Text>Hide Modal</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </Modal>
                <FlatList
                    data={this.props.products}
                    renderItem={({ item }) => <ProductElement product={item} setModalVisible={this.props.setlectProduct} />}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        )
    }
}

const mapStateToProps = (state: IAppState) => ({
    products: state.ProductList.products.splice(1, 2),
    selectedProduct: state.ProductList.selectedProduct,
});

const mapDispatchToProps = (dispatch: Dispatch<ProductListAction>) => {
    return {
        setlectProduct: (product: Product) => {
            dispatch(SelectProduct(product));
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(listProducts);

