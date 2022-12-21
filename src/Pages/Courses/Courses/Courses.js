import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const Courses = () => {
    const courses=useLoaderData();
    const {title,teacher, details, thumbnail_url,rating,enroll_student}=courses;
    return (
        <div>
           <Card>
      <Card.Img variant="top" src={thumbnail_url} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
         {details}
        </Card.Text>
        <Button variant="primary" className='me-2  '><Link className='text-light fw-bold text-decoration-none' to='/cart'>Checkout Now</Link></Button>
        <Button className='fw-bold'  variant="primary">Download PDF</Button>

      </Card.Body>
    </Card>
        </div>
    );
};

export default Courses;