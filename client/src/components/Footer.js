import React from 'react';
import { Container, ListGroup, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <Row className=' mt-3 w-100 mb-0  bg-black h-75'>
            <Container className="d-flex justify-content-around align-items-start">
            <ListGroup className='mt-3 h-50'>
                <ListGroup.Item>Contact</ListGroup.Item>
                <ListGroup.Item>Mobile Number</ListGroup.Item>
                <ListGroup.Item>Email</ListGroup.Item>
                <ListGroup.Item>Telegram</ListGroup.Item>
                <ListGroup.Item>Facebook</ListGroup.Item>
            </ListGroup>
            <ListGroup className='mt-3 h-50'>
                <ListGroup.Item>Address</ListGroup.Item>
                <ListGroup.Item>Youtbe</ListGroup.Item>
                <ListGroup.Item>Whatsapp</ListGroup.Item>
                <ListGroup.Item>Copyright</ListGroup.Item>
            </ListGroup>
            </Container>

        </Row>
    );
};

export default Footer;