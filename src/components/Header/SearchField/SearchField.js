import React from "react";
import Button from "../../UI/Button/Button";

import classes from './SearchField.module.css';

class SearchField extends React.Component {
    render () {
        return (
            <form className={classes.Search}>
                <input type="text" placeholder="Search over 1,000,000 recipes..." className={classes.SearchField}></input>
                <Button classList={["Button"]}>Search</Button>
            </form>
        )
    }
}

export default SearchField;