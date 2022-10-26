import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
    const [categories,setCategories]=useState([]);
    
    useEffect(()=>{
        fetch('http://localhost:5000/courses-categories')
        .then(res => res.json())
        .then(data => setCategories(data))
    },[])
    return (
        <div className=' text-light  '>
            <div>
                {
                    categories.map(category=><p key={category.id}>

                        <Link className='text-light bg-dark p-1' to={`/category/${category.id}`}>{category.name}</Link>
                    </p>)
                }

            </div>
        </div>
    );
};

export default LeftSideNav;