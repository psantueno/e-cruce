import React from "react";
import { Routes, Route } from "react-router-dom";
import './assets/css/normalize.css';
import './assets/css/App.css';
import Home from './components/pages/Home';
import ListProducts from "./components/pages/ListProducts";


function App() {
  return (

    <React.Fragment>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/listproducts" element={<ListProducts/>}></Route> 
        </Routes>
      </div>
    </React.Fragment>
  );
}

export default App;
