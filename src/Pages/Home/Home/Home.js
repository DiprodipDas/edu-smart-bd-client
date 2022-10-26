import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CoursesSummaryCart from '../../Shared/CoursesSummaryCart/CoursesSummaryCart';

const Home = () => {
    const allCourses= useLoaderData();
    return (
        <div>
            <h3>eduSmart Home has total: {allCourses.length} courses.</h3>
            {
                  allCourses.map(course=><CoursesSummaryCart
                  key={course._id}
                  course={course}
                  
                  ></CoursesSummaryCart>)
            }
        </div>
    );
};

export default Home;