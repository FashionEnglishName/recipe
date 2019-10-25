import React from 'react';
import ShoppingItem from './ShoppingItem/ShoppingItem';

import classes from './Shopping.module.css';
import { connect } from 'react-redux';
import { remove_from_shopping_cart } from '../../store/actions/shoppingActions';

class Shopping extends React.Component {
    render () {
        return (
            <div className={classes.Shopping}>
                <h2 className={classes.Heading}>My Shopping List</h2>
                <ul className={classes.ShoppingList}>
                    
                    {this.props.ingredientsInfo ? this.props.ingredientsInfo.map((ingredient, index) => {
                        return (
                            <ShoppingItem
                                key={ingredient.text + index}
                                weight={ingredient.weight.toFixed(2)}
                                text={ingredient.text.substring(ingredient.text.indexOf(' ') + 1)}
                                clicked={() => this.props.removeShoppingHandler(ingredient)}
                            ></ShoppingItem>
                        )
                    }) : null}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        ingredientsInfo: state.shopping.ingredients
    }
}

const mapDispatchToProps = dispatch => {
    return {
        removeShoppingHandler: (ingredient) => dispatch(remove_from_shopping_cart(ingredient))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Shopping);