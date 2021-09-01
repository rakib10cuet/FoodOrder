import React,{useContext} from 'react';
import CartIcon from "../../Cart/CartIcon/CartIcon";
import classes from './HeaderCardButton.module.css';
import CartContext from "../../../Store/CartContext/CartContext";

const HeaderCartButton = props =>{
    /*CartContext's updated data will be used here*/
    const cartCtx = useContext(CartContext);

    const numberOfCartItems = cartCtx.items.reduce((curNumber,item)=>{
        return curNumber + item.amount;
    },0);

    return (
        <button className={classes.button} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{numberOfCartItems}</span>
        </button>
    );
};
export default HeaderCartButton