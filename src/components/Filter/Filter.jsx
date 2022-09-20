import React from "react";
import PropTypes from 'prop-types';


export const Filter = ({value, onChangeFilter}) => {
    return (
        <label> Filter by Name
            <input type="text" value={value} onChange={onChangeFilter}/>
        </label>
    )
}

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChangeFilter:PropTypes.func.isRequired,
}