import logo from './logo.svg';
import './App.css';
import duckData from "./duckData.json";
import DuckItem from './DuckItem';
import DuckFilter from './DuckFilter.js';

import { useState } from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [cart, setCart] =useState({});
  const [price, setPrice] = useState(0);
  const [type, setType] = useState("all");
  const [quantity, setQuantity] = useState("all");
  const [priceSort, setPriceSort] = useState(true);
  const [checked, setChecked] = useState(false);
  const increaseCart = (uid) => {
    let newCart = cart;
    if (newCart[uid]) {
      newCart[uid] += 1;
    } 
    else {
      newCart[uid] = 1;
    }
    
    setPrice(Math.round((price + duckData[uid].price) * 100) / 100 )
    setCart({...newCart});
  }
  const decreaseCart = (uid) => {
    let newCart = cart;
    if (newCart[uid]) {
      newCart[uid] -= 1;
       
      setPrice(Math.round((price - duckData[uid].price) * 100) / 100 );
    }
    setCart({...newCart});
  }
  const selectFilterType1 = (eventKey) => {
    setType(eventKey);
  }

  const selectFilterType2 = (eventKey) => {
    setQuantity(eventKey);
  }

  const selectSortType = () => {
    setPriceSort(!priceSort);
    setChecked(!checked);
  }

  const matchesFilterType1 = (item) => {
    if (type === 'all'){
      return true
    }
    return item.theme.includes(type)
  }

  const matchesFilterType2 = (item) => {
    if (quantity === 'all'){
      return true
    }
    return item.quantity === quantity
  }

  const sortDucks = (data) => {
    if (!priceSort){
      return data.sort(function(a, b){return a.price - b.price});
    } else {
      return data;
    }
  }

  const reset = () => {
    setType("all");
    setQuantity("all");
    setPriceSort(true);
    setChecked(false);
  }

  const filteredData = sortDucks(duckData.filter(matchesFilterType1).filter(matchesFilterType2))
  
  return (
    <div className="App">  
        <div>
          <p style={{padding:"2rem"}}>To familiarize myself with React, I used it to create a simple rubber duck store that allows the customer to add, remove, filter, and sort items. </p>
          <h1>~My Rubber Ducks~</h1>
          <div className='store'>
              <div className='sidebar'>
                <DuckFilter selectFilterType1={selectFilterType1} selectFilterType2={selectFilterType2} selectSortType={selectSortType} checked={checked} reset={reset} type={type} quantity={quantity}/>
              </div>
              <div className='duck-flexholder'>
              {filteredData.map((item, index) => {
                return (
                <DuckItem increaseCart={increaseCart} decreaseCart={decreaseCart} item = {item} index = {index} />
                )          
              })}
              </div>

          </div>
        </div>
          

          <div className='checkout'>
            <h2>Cart</h2>
            <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>My Cart</Card.Title>
              <Card.Text>
              
            total: ${price}
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
            {Object.keys(cart).filter(x => cart[x] !== 0).map((key) => {
              return (
                
                <ListGroup.Item>{duckData[key].name + ": " + cart[key]}</ListGroup.Item>
              )
              
            })}
            </ListGroup>
          </Card>
          </div>    
    </div>

    
  );
}

export default App;
