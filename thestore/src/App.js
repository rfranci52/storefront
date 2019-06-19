import React from 'react';
//  defining routes with switch "component" 
import {Switch,Route } from 'react-router-dom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css' 
import  Navbar from './components/Navbar' 
import  Products from './components/Products' 
import  Product from './components/Product' 
import  ProductDetails from './components/ProductDetails' 

import  Cart from './components/Cart' 
// default is where the app goes if the route doesnt exist. "route handling"
import  Default from './components/Default' 





function App() {
  return (
    <React.Fragment>
      <Navbar></Navbar>
      {/* defining routes with switch "component" */}
      <Switch>
        {/* using exact path makes it so that the switch statement works properly. if not used, all routes that include "/" for example "/productdetails" will go to "/" because it includes "/" */}
        <Route exact path="/" component={Products}></Route>
        <Route path="/productDetails" component={ProductDetails}></Route>
        <Route path="/cart" component={Cart}></Route>
        <Route  component={Default}></Route>


      </Switch>
      {/* <Products></Products> */}
      {/* <ProductDetails></ProductDetails> */}
      {/* <Cart></Cart> */}
      {/* <Default></Default> */}
      {/* <Product></Product> */}

    </React.Fragment>

    
   
  );
}

export default App;
