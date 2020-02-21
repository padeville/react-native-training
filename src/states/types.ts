import { Product } from "../components/products/products.interface";


export type AddProductAction = {
    type: string;
    ProductData: Product;
}
export type UpdateProductAction = {
    type: string;
    index: number;
    ProductData: Product;
}
export type RemoveProductAction = {
    type: string;
    index: number;
}

export type ProductListAction = AddProductAction | UpdateProductAction | RemoveProductAction;

export type ProductListState = Product[];

export type AppState = {
    ProductList: ProductListState,
    // add future state slices here
}