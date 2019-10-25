import React from 'react';

import classes from './LikeItem.module.css';

class LikeItem extends React.Component {
    render () {
        return (
            <li className={classes.LikeItem} onClick={() => this.props.clicked(this.props.recipe.uri)}>
                <a className={classes.LikeItemLink} href="#23">
                    <figure className={classes.LikeFigure}>
                        <img src={this.props.recipe.image} alt={this.props.recipe.title} />
                    </figure>
                    <div className={classes.LikeData}>
                        <h4 className={classes.LikeName}>
                            {this.props.recipe.title}
                        </h4>
                        <p className={classes.LikeAuthor}>{this.props.recipe.author}</p>
                    </div>
                </a>
            </li>
        )
    }
}

export default LikeItem;