import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Category = () => {
    const courses= useLoaderData()
    return (
        <div>
            <h2>This is category has {courses.length} courses.</h2>
        </div>
    );
};

export default Category;