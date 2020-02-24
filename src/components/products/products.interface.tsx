import { ProductList } from "../../states/product-list/reducers"
import { ProductListState } from "../../states/types"

export interface IRecipeProps {
    products: Product[],
    selectedProduct: Product,
    setlectProduct(product: Product): void,
}

export interface IRecipeState {
}

export type Product = {
    name: string;
    num: string;
    isVegan: boolean;
    category?: string;
    description?: string;
}

export interface IpropsProductElement {
    product: Product;
    setModalVisible(product: Product): void;
}
