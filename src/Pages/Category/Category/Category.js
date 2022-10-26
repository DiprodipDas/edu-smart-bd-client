import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CoursesSummaryCart from '../../Shared/CoursesSummaryCart/CoursesSummaryCart';

const Category = () => {
    const categoryCourses= useLoaderData()
    return (
        <div>
            <h2>This is category has {categoryCourses.length} courses.</h2>
            {
                categoryCourses.map(course=> <CoursesSummaryCart
                key={course._id}
                course={course}
                
                ></CoursesSummaryCart>)
            }
        </div>
    );
};

export default Category;