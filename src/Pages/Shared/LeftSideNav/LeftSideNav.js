import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
    const [categories,setCategories]=useState([]);
    
    useEffect(()=>{
        fetch('https://edu-smart-bd-server.vercel.app/courses-categories')
        .then(res => res.json())
        .then(data => setCategories(data))
    },[])
    return (
        <div className=' text-light  '>
            <div>
                {
                    categories.map(category=><p key={category.id}>

                        <Link className='text-light fw-bold bg-dark p-1 text-decoration-none' to={`/category/${category.id}`}>{category.name}</Link>
                    </p>)
                }

            </div>
        </div>
    );
};

export default LeftSideNav;