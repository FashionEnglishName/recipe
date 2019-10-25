import React from 'react';
import Button from '../../UI/Button/Button';

import classes from './ShoppingItem.module.css';
import icons from '../../../assets/images/icons.svg';

class ShoppingItem extends React.Component {
    state = {
        weight: this.props.weight
    }

    weightChangeHandle = (e) => {
        this.setState({weight: e.target.value})
    }

    render () {
        const styles = {
            marginTop: ".5rem",
            position: "absolute",
            right: 0,
            backgroundImage: "linear-gradient(to right, transparent 0%, #fff 40%, #fff 100%)",
            width: "3.75rem",
            paddingLeft: "2rem",
            transition: "all .5s"
        }
        return (
            <li className={classes.ShoppingItem}>
                <div className={classes.ShoppingCount}>
                    <input type="text" value={this.state.weight} onChange={this.weightChangeHandle}/>
                </div>
                <p className={classes.ShoppingDescription}>{this.props.text}</p>
                <Button classList={["ButtonTiny"]} styles={styles} clicked={this.props.clicked}>
                    <svg>
                        <use href={icons + "#icon-circle-with-cross"}></use>
                    </svg>
                </Button>
            </li>
        )
    }
}

export default ShoppingItem;