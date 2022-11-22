import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function DuckItem(props) {
    return (
        <div className='duck-container'>
            <Card style={{ width: '80%' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>{props.item.name}</Card.Title>
                <Card.Text>
                ${props.item.price}
                </Card.Text>
                <Button variant="secondary" onClick = {() => props.increaseCart(props.index)}>+</Button>
                <Button variant="secondary" onClick = {() => 
                    {props.decreaseCart(props.index); 
                    props.finalCart(props.index);}}>
                        -
                        </Button>
            </Card.Body>
            </Card>
            
        </div>
      
    )
  }