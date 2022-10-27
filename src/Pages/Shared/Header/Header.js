import React from 'react';
import { useContext } from 'react';
import { Button, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import LeftSideNav from '../LeftSideNav/LeftSideNav';


const Header = () => {
    const {user,logOut}=useContext(AuthContext);
   
  const handleLogOut=()=>{
    logOut()
    .then(()=>{})
    .catch(error=>console.error(error))

}

    return (
        <Navbar className='mb-4' collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
            <img className='rounded-5 me-2' style={{height:"30px"}} src="https://media.istockphoto.com/vectors/open-book-color-vector-template-icon-vector-id1197901679?k=20&m=1197901679&s=612x612&w=0&h=QjmxcWwrj_D_IHgwt-9dvAdChyI1Vtr8bmQquYVkLE4=" alt="" />
          <Navbar.Brand href="#home">eduSmart BD</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
           <Button variant="primary" className='me-2 mb-2'> <Nav.Link><Link className='text-light ' to={'/'}>Courses</Link></Nav.Link></Button>
            {/* <Nav.Link ><Link to={'/courses/:id'}>Courses</Link></Nav.Link> */}
             <Button variant="primary" className='me-2 mb-2'> <Nav.Link ><Link  className='text-light ' to={'/faq'}>FAQ</Link></Nav.Link></Button>
           <Button variant="primary" className='me-2 mb-2' >   <Nav.Link ><Link className='text-light ' to={'/blog'}>Blog</Link></Nav.Link></Button>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">
                {
                    user?.uid ?
                    <>
                    <span>{user?.displayName}</span>
                    <Button onClick={handleLogOut} variant="primary">Log out</Button>
                    </>
                    :
                    <>
                    <Button variant="primary" className='me-2 mb-2'><Link className='text-light' to='/login'>Login</Link></Button>
                   <Button variant="primary" className='me-2 mb-2'> <Link className='text-light' to='/register'>Register</Link></Button>
                    
                    </>
                }  
               </Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
               {user?.photoURL ?
             <Image style={{height:'30px'}} roundedCircle src={user?.photoURL}></Image>
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