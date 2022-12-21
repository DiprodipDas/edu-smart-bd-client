import React from 'react';
// import { FaFacebook, FaYoutube } from 'react-icons/fa';
const Footer = () => {
    return (
        <div className='bg-dark py-5 mt-3'>
            <p className='text-light text-center'>ⒸAll right reserved by eduSmart BD 2022</p>
            {/* <FaFacebook className='text-light text-center me-2 ms-5'></FaFacebook>
            <FaYoutube className='text-light text-center '></FaYoutube> */}
            {/* <img className='ms-2 rounded' style={{height:"100px"}} src="https://images.squarespace-cdn.com/content/v1/59287ce815d5db85bdfc7480/1509730241340-ANORKU6JNWHBXM472GTD/Airnet+EDU+Logo.png" alt="" /> */}
            <h5 className='text-light text-center fw-bold' >edu Smart BD</h5>
            <small className='text-light d-block text-center fw-bold'>Head Office: Banani 202,Dhaka,Bangladesh</small>
            <small className='text-light d-block text-center fw-bold'>"Learn Learn and only Learn....."</small>
        </div>
    );
};

export default Footer;