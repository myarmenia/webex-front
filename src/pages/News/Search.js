import React from 'react';

function Search() {
    return (
        <form role="search" className="search-form">
            <label htmlFor="search-form-widget">
                <span className="screen-reader-text">Search for:</span>
            </label>
            <input style={{ backgroundColor: "white" }} type="search" id="search-form-widget" className="search-field form-control" placeholder=""  name="search" />
            <button type="submit" className="search-submit">
                <span className="screen-reader-text">Search</span>
            </button>
        </form>
    )
}

export default Search;