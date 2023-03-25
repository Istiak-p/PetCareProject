import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ShopCard = (props) => {
    let {title,price,image,description} = props.data;
    
    const addToCart=()=>{}
    return (
        <div className="ms-5">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Title>{price}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                    <Link to="/reservation"><Button onClick={()=>addToCart()}>book now</Button></Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ShopCard;