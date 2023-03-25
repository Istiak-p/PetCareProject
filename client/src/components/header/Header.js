import React from 'react';
import {Navbar, Container,Nav} from 'react-bootstrap';
import {BiCart} from 'react-icons/bi';
import {useCart} from 'react-use-cart';
import Googlelogin from '../registration/googlelogin/Googlelogin';
import Signout from '../registration/signout/Signout'



const Header = (props) => {
    const {isEmpty, totalItems}=useCart();
    return (
        <> 
            <Navbar bg="primary" className='sticky-top w-100'>
                <Container >
                    <Navbar.Brand href="/">Pet Doctors</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">  
                    <Nav.Link className="p-4" href="/">Home</Nav.Link>   
                    <Nav.Link className="p-4" href="/doctor">Doctors</Nav.Link>   
                    <Nav.Link className="p-4" href="/vaccine">Vaccines</Nav.Link>   
                    <Nav.Link className="p-4" href="/shop">Shop List</Nav.Link>   
                    <Nav.Link className="p-4" href="/signup">Sing Up</Nav.Link>   
                     <Nav.Link className="p-4" href="/login">Sign In</Nav.Link> 
                     <Googlelogin></Googlelogin>
                     <Signout></Signout>
                     <Navbar.Text>
                     <span style={{ fontSize: '20px' }}>{props.name?`Welcome - ${props.name}`: "Login please"}</span>
                    </Navbar.Text>
                    <Navbar.Text>
                        <Nav.Link  href='/vaccinecart'>
                        <BiCart size='3rem'/>
                        {!isEmpty && <span style={{position:'relative', left:'-21'}}>{totalItems}</span>}
                        </Nav.Link>
                    </Navbar.Text>
                    </Navbar.Collapse>
                    
                </Container>
            </Navbar>
        </>
    );
};

export default Header;