import React from "react";
import Button from "../../UI/Button/Button";
import { connect } from "react-redux";
import * as SearchActionTypes from '../../../store/actions/searchActions';

import classes from './SearchField.module.css';

class SearchField extends React.Component {
    state = {
        keywords: ""
    }
    
    modifyKeywordHandler = (keywords) => {
        this.setState({keywords: keywords});
    }

    searchClickHandler = (e) => {
        e.preventDefault();
        this.props.searchClickHandler(this.state.keywords);
    }

    keyDownSearchHandler = (e) => {
        if(e.keyCode === 13) {
            this.searchClickHandler(e);
        }
    }

    render () {
        return (
            <div className={classes.Search}>
                <input type="text" placeholder="Search over 1,000,000 recipes..." className={classes.SearchField} onChange={(e) => this.modifyKeywordHandler(e.target.value)} onKeyDown={(e) => this.keyDownSearchHandler(e)}></input>
                <Button classList={["Button"]} clicked={(e) => this.searchClickHandler(e)}>Search</Button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        state: state
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        searchClickHandler: (keywords) => dispatch(SearchActionTypes.search(keywords))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchField);