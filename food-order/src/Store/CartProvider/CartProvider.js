import React,{useReducer} from 'react';
import CartContext from "../CartContext/CartContext";

const defaultCartState = {
    items:[],
    totalAmount: 0,
};
const cartReducer = (state,action)=>{
    if(action.type === 'AddCart'){
        const updatedItems = state.items.concat(action.item);
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
        return {
            items:updatedItems,
            totalAmount: updatedTotalAmount,
        };
    }
    if(action.type === 'RemoveCart'){

    }
    return defaultCartState;
};

const CartProvider = (props)=>{
    const [cartState,dispatchCartAction] = useReducer(cartReducer,defaultCartState)
    const addItemToCartHandler = item => {
        dispatchCartAction({
            type: 'AddCart',
            item:item
        });
    };
    const removeItemFromCartHandler = id=>{
        dispatchCartAction({
            type: 'RemoveCart',
            id:id
        });
    }

    /*MealItemForm e select korle CartContext e add hobe*/
    const cartContext = {
        items:cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    };
    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );
}
export default CartProvider;