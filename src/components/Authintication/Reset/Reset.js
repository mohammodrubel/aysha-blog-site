import React, { useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Reset = () => {
    const {resetUserEmail,error}=  useAuth()
    const [resetValue,setResetValue ] = useState()

    const handleOnChange = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newData = {...resetValue}
        newData[field] = value;
        console.log(newData)
        setResetValue(newData)
    }
    const formSubmit= e =>{
        resetUserEmail(resetValue.email)
        alert('check your email! and Change password')
        e.preventDefault()
    }

    return (
        <Container className='mt-5'>
            <h4 className='text-center'>Reset Password</h4>
            <div  className="mx-auto col-md-6">
            <form className='mt-3 border regform' onSubmit={formSubmit}>
                <input onChange={handleOnChange} name='email' type="email"className='p-2 form-control mt-4' placeholder="input your email" />
                <div className='text-center'><Button type='submit' className='mainButton mt-4 w-50'>Login</Button></div> <br />
                <div style={{display:'flex',justifyContent:'space-around'}}>
                </div>
                   <div className='mt-5'>
                        {/* <Link style={{color:'red'}} to='/registration'>If you have no Account please Registration</Link><br />
                        <Link style={{color:'red'}} to='/login'>If you have already Account please Login</Link><br />
                        <Link style={{color:'red'}}to='/reset'>Forget Password ? Reset</Link> */}
                        <h5>{error}</h5>
                   </div>
            </form>
            </div>
        </Container>
    );
};

export default Reset;