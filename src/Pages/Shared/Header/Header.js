import React from 'react';
import { useContext } from 'react';
import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import LeftSideNav from '../LeftSideNav/LeftSideNav';


const Header = () => {
    const {user}=useContext(AuthContext)
    return (
        <Navbar className='mb-4' collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">eduSmart BD</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link ><Link to={'/'}>Courses</Link></Nav.Link>
            {/* <Nav.Link ><Link to={'/courses/:id'}>Courses</Link></Nav.Link> */}
              <Nav.Link ><Link to={'/faq'}>FAQ</Link></Nav.Link>
              <Nav.Link ><Link to={'/blog'}>Blog</Link></Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">{user?.displayName}</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
               {user.photoURL ?
             <Image style={{height:'30px'}} roundedCircle src={user.photoURL}></Image>
             :
             <FaUser></FaUser>
            }
              </Nav.Link>
            </Nav>
            <div className='d-lg-none'>
                <LeftSideNav></LeftSideNav>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Header;