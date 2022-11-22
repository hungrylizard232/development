import logo from './logo.svg';
import './App.css';
import duckData from "./assets/duckData.json";
import DuckItem from './DuckItem';

import { useState } from "react";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';



import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [cart, setCart] =useState({});
  const [price, setPrice] = useState(0);
  const increa = (uid) => {
    let newCart = cart;
    if (newCart[uid]) {
      newCart[uid] += 1;
    } else {
      newCart[uid] = 1;
    }
    
    setPrice(price + duckData[uid].price)
    setCart({...newCart});
  }
  const decreaseCart = (uid) => {
    let newCart = cart;
    if (newCart[uid]) {
      newCart[uid] -= 1;
      setPrice(price - duckData[uid].price);
    }
    setCart({...newCart});
    
    
  }
  return (
    <div className="App">  
        <div>
          <h1>Rubber Duck store</h1>
          <div className='duck-flexholder'>
          {duckData.map((item, index) => {
          return (
          <DuckItem increaseCart={increa} decreaseCart={decreaseCart} item = {item} index = {index} />
          )          
          })}
          </div>
        </div>

          <div className='checkout'>
            <h2>Cart</h2>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
            <Card.Body>
              <Card.Title>My Cart</Card.Title>
              <Card.Text>
              
            total: ${price}
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
            {Object.keys(cart).map((key) => {
              return (
                <ListGroup.Item>{duckData[key].name + ": " + cart[key]}</ListGroup.Item>
              )
              
            })}
            </ListGroup>
            <Card.Body>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Card>
          </div>

          

    
      
    </div>

    
  );
}

export default App;
