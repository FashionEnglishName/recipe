export const ADD_TO_SHOPPING_CART = 'ADD_TO_SHOPPING_CART';
export const REMOVE_FROM_SHOPPING_CART = 'REMOVE_FROM_SHOPPING_CART';

export const  add_to_shopping_cart = (ingredients) => {
    return {
        type: ADD_TO_SHOPPING_CART,
        ingredients
    }
}

export const remove_from_shopping_cart = (ingredient) => {
    return {
        type: REMOVE_FROM_SHOPPING_CART,
        ingredient
    }
}