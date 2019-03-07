import React, { Component } from 'react';

class SearchBar extends Component {
    render() {
        return(
            <div className="searchBar">
                <label className="searchLabel">Search</label>
                <input className="searchInput"></input>
                <input type="checkbox"></input>
                <label> Only show products on stock</label>
            </div>
        )
    }
}

export default SearchBar;