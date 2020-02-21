import React, { Component } from 'react'
import { connect } from 'react-redux';
import { AppState } from './states/types';
import ListProducts from './components/products/listProducts';

export class index extends Component {
    render() {
        return (
            <ListProducts></ListProducts>
        )
    }
}

export default index;


