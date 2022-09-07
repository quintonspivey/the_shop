import React from 'react';
import {Card, Button} from 'react-bootstrap';
import Rating from './Rating';
import{Link} from 'react-router-dom';

function Product(props) {
  const {product} = props;
    return (
        
            <Card>
            <Link to={`/product/${product.name}`}>
        <img src={product.image} className="card-img-top" alt={product.name} />
      </Link>
      <Card.Body>
        <Link to={`/product/${product.name}`}>
          <Card.Title>{product.title}</Card.Title>
        </Link>
        <Rating rating={product.rating} numReviews={product.numReviews} />
        <Card.Text>${product.price}</Card.Text>
        <Button>Add to cart</Button>
      </Card.Body>
            </Card>
            
       
    )
}

export default Product
