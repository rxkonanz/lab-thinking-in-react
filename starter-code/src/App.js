import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar'
import StoreItems from './components/StoreItems'
import ItemsTable from './components/ItemsTable'
class App extends Component {



  render() {
    return (
      <div className="container">
        <h1>IronStore</h1>
        <SearchBar />
        <ItemsTable />
      </div>
    );
  }
}

export default App;
