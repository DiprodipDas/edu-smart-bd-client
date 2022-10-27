import { GoogleAuthProvider } from 'firebase/auth';
import React from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';




const Login = () => {

    const {signIn}=useContext(AuthContext);
    const navigate=useNavigate();

    const handleSubmit=event=>{
        event.preventDefault();
        const form=event.target;
        const email=form.email.value;
        const password=form.password.value;
        signIn(email,password)
        .then(result=>{
            const user=result.user;
            console.log(user)
            form.reset();
            navigate('/')
        })
        .catch(error=>console.error(error))
    }

    const {providerLogin}=useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider()
    const handleGoogleSignIn=()=>{
       providerLogin(googleProvider)
       .then(result=>{
        const user=result.user;
        console.log(user);
       })
       .catch(error=>console.error(error));
    }
    return (
        <div>
            <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control name="email" type="email" placeholder="Enter email" required />
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control name="password" type="password" placeholder="Password" required />
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
        <Form.Text className="text-danger">
    
          </Form.Text>
      </Form>
      <Button onClick={handleGoogleSignIn} className='my-3  d-block' variant="outline-primary"><FaGoogle className='me-2'></FaGoogle>Continue With Google</Button>
      <Button variant="outline-dark"><FaGithub className='me-2'></FaGithub>Continue With Github</Button>
        </div>
    );
};

export default Login;