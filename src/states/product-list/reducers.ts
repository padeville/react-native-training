import { ProductListState, ProductListAction, AddProductAction } from "../types";
import { PRODUCT_LIST_ACTION_TYPES } from "./action";
import productsJson from '../../../ressources/products.json';
import { Product } from "../../components/products/products.interface";

export const initialState: ProductListState = productsJson
    .filter(obj => obj.length === 5)
    .map(obj => {
    return  {
        name: obj[1],
        num: obj[0],
        category: obj[2],
        description: obj[3],
        isVegan: obj[4] === 'yes' ? true : false,
    } as Product;
});

export const ProductList = (
    state: ProductListState = initialState,
    action: ProductListAction
) => {
    switch (action.type){
        case PRODUCT_LIST_ACTION_TYPES.ADD_PRODUCT:
            // pay attention to type-casting on action
            const { ProductData  } = <AddProductAction>action;
            return [...state, { ProductData }];
            
            // define rest of actions here
        default:
            return state;
    }
}
