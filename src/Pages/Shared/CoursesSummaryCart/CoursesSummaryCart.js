import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image'
import { FaBookmark, FaCartPlus, FaComment, FaStar } from "react-icons/fa";

const CoursesSummaryCart = ({ course }) => {
    const { _id, title, teacher, details, thumbnail_url,rating,enroll_student} = course;
    console.log(course);
    return (
        <Card className='mb-4'>
            <Card.Header className='d-flex justify-content-between align-items-center'>
                <div className='d-flex'>
                    <Image roundedCircle src={teacher.img} style={{ height: '60px' }}>
                    </Image>
                    <div className='ms-3'>
                        <p className='mb-0'><small>Instructor Name:</small> {teacher.name}</p>
                        <p><small>Last date of enrollment:</small>{teacher.last_enroll_date}</p>
                    </div>
                </div>
                <div>
                    <FaBookmark className='me-2'></FaBookmark>
                    <FaComment></FaComment>
                </div>

            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img variant="top" src={thumbnail_url} />
                <Card.Text>
                    {
                        details.length > 100 ?
                            <p>{details.slice(0, 150) + '....'}<Link to={`/courses/${_id}`}><button className='btn btn-primary'>See Details</button></Link> </p>
                            :
                            { details }
                    }
                </Card.Text>
                <Card.Footer className=' d-flex justify-content-between align-items-center'>
                 <div>
                    <FaStar className='text-warning me-2'></FaStar>
                    <span>Rating: {rating.number}</span>
                 </div>
                 <div>
                    <FaCartPlus className='me-2'></FaCartPlus>
                    <span>Total Enrolled Student:{enroll_student}</span>
                 </div>

                </Card.Footer>
            </Card.Body>
        </Card>
    );
};

export default CoursesSummaryCart;