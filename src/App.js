import React from 'react';
import './App.css';
import NavBar from './containers/navBar';
import Table from './containers/table/table';
import Warnings from './containers/warnings';

function App() {

  return (
    <div className="App">
      <NavBar />
      <Table />
      <Warnings />

    </div>
  );
}


export default App;
