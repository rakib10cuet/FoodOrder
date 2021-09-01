import React,{Fragment} from 'react';
import classes from './header.module.css';
import mealsImage from '../../../Assets/meals.jpg';
import HeaderCartButton from "../HeaderCartButton/HeaderCardButton";


const Header = (props)=> {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>FoodOrder</h1>
                <HeaderCartButton onClick={props.onShowCart}/>
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImage} alt="A table full of delicious food!!!"/>
            </div>
        </Fragment>
    );
}
export default Header;