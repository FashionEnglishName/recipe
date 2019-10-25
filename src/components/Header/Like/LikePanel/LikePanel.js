import React from 'react';
import LikeItem from './LikeItem/LikeItem';

import classes from './LikePanel.module.css';
import * as loveList from '../../../../utils/loveList';

import { connect } from 'react-redux';
import { get_loved_recipe } from '../../../../store/actions/loveListActions';


class LikePanel extends React.Component {
    render() {
        const classList = [];
        classList.push(classes.LikePanel);
        if(this.props.show) 
            classList.push(classes.Show);
        
        let ListItems = loveList.size() === 0 ? [] : loveList.getAll();
        ListItems = ListItems.map(recipe => {
            return (<LikeItem
                        recipe={recipe}
                        key={recipe.uri}
                        clicked={() => this.props.clickLoveHandler(recipe.uri)}
                    ></LikeItem>);
        })

        return (
            <div 
                className={classList.join(' ')} 
                onMouseEnter={this.props.enter}
                onMouseLeave={this.props.leave}
            >
                <ul className={classes.LikeList}>
                    
                    {ListItems}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        clickedRecipe: state.loveList.lovedRecipe
    };
}

const mapDispatchToProps = dispatch => {
    return {
        clickLoveHandler: (uri) => dispatch(get_loved_recipe(uri))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(LikePanel);