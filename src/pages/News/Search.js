import React from 'react';

function Search() {
    return (
        <form role="search" class="search-form">
            <label for="search-form-widget">
                <span class="screen-reader-text">Search for:</span>
            </label>
            <input style={{ backgroundColor: "white" }} type="search" id="search-form-widget" class="search-field form-control" placeholder="" value="" name="search" />
            <button type="submit" class="search-submit">
                <span class="screen-reader-text">Search</span>
            </button>
        </form>
    )
}

export default Search;