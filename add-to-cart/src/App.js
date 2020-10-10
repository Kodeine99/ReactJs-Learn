import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
// import "./styles.css";

import MenuBar from "./components/MenuBar";
import Products from "./pages/Products";
import Home from "./components/Home";

import { CartProvider } from "./contexts/Cart";

export default function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <MenuBar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/products" exact component={Products} />
          </Switch>
        </div>
      </Router>
    </CartProvider>
  );
}
