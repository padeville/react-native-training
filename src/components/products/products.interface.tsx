import { ProductList } from "../../states/product-list/reducers"

export interface IRecipeProps {
    products: Product[]
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
}