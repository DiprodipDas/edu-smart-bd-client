import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Register = () => {
    const [error,setError]=useState('');
    const {createUser,updateUserProfile}=useContext(AuthContext);

    const handleSubmit=event=>{
        event.preventDefault();
        const form=event.target;
        const name=form.name.value;
        const photoURL=form.photoURL.value;
        const email=form.email.value;
        const password=form.password.value;
        console.log(name,photoURL,email,password);


        createUser(email,password)
        .then(result=>{
            const user=result.user;
            console.log(user);
            setError('');
            form.reset();
            handleUpdateUserProfile(name,photoURL);

        })
        .catch(error=>{
            console.error(error);
            setError(error.message);
        })
    }

    const handleUpdateUserProfile=(name,photoURL)=>{
        const profile={
            displayName:name,
            photoURL:photoURL
        }
        
        updateUserProfile(profile)
        .then(()=>{})
        .catch(error=>console.error(error));
    }

    return (
        <div>
            <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Your Name</Form.Label>
          <Form.Control name="name" type="text" placeholder="Enter name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPhoto">
          <Form.Label>Photo URL</Form.Label>
          <Form.Control name="photoURL" type="text" placeholder="Photo URL" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control name="email" type="email" placeholder="Enter email" required />
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control name="password" type="password" placeholder="Password" required />
        </Form.Group>
        <Button variant="primary" type="submit">
          Register
        </Button>
        <Form.Text className="text-danger ms-3">
          {error}
          </Form.Text>
      </Form>
      <p>Already have an account?<Link className='text-decoration-none' to='/login'>Please Login</Link></p>
        </div>
    );
};

export default Register;