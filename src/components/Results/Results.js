import React from 'react';
import Result from './Result/Result';
import PaginationArea from './PaginationArea/PaginationArea';
import LoadingView from './LoadingView/LoadingView';

import { connect } from 'react-redux';
import { open_recipe } from '../../store/actions/viewRecipeActions';
import { paginate } from '../../store/actions/searchActions';

import classes from './Results.module.css';

class Results extends React.Component {

    render () {
        let result, loading;
        console.log("Results", this.props.recipeList)
        if(Object.keys(this.props.recipeList).length === 0) {
            result = null;
        } else {
            result = this.props.recipeList.map(recipe => {
                return <Result 
                        image={recipe.recipe.image} 
                        title={recipe.recipe.label} 
                        author={recipe.recipe.source} 
                        id={recipe.recipe.uri} 
                        key={recipe.recipe.uri}
                        clicked={() => this.props.viewRecipe(recipe.recipe)}
                        shouldHighlight={this.props.clickedRecipeUri === recipe.recipe.uri}   
                        >
                       </Result>
            });
        }
        if(this.props.showLoading) {
            loading = (
                <>
                    <LoadingView />
                    <LoadingView />
                    <LoadingView />
                    <LoadingView />
                    <LoadingView />
                </>
            )
        } else {
            loading = null;
        }
        return (
            <div className={classes.Results}>
                <ul className={classes.ResultList}>
                    {loading}
                    {result}
                </ul>
                {
                    Object.keys(this.props.recipeList).length === 0 ? null : (
                        <PaginationArea 
                            count={this.props.count} 
                            from={this.props.from} 
                            to={this.props.to}
                            clicked={(from) => this.props.paginate(from, this.props.keywords)}
                        >    
                        </PaginationArea>
                    )
                }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        recipeList: state.search.recipeList,
        showLoading: state.search.showLoading,
        from: state.search.from,
        to: state.search.to,
        count: state.search.count,
        keywords: state.search.keywords,
        clickedRecipeUri: state.recipe.recipeInfo.uri
    }
}

const mapDispatchToProps = dispatch => {
    return {
        viewRecipe: (recipeInfo) => {
            return dispatch(open_recipe(recipeInfo));
        },
        paginate: (from, keywords) => {
            return dispatch(paginate(from, keywords))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Results);