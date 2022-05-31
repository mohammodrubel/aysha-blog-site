import React, { useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Login = () => {
    const [loginData,setLoginData] = useState({})
    const {loginUser,error,isLoading,googleSingIn,facebookSingIn} = useAuth()
    const location = useLocation()
    const navigate = useNavigate()
    const handleOnChange = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newStorate =  {...loginData}
        newStorate[field] = value
        console.log(newStorate)
        setLoginData(newStorate)
        e.preventDefault() 
    }
    const formSubmit =e =>{
        loginUser(loginData.email,loginData.password,location,navigate)
        e.preventDefault()
    }
    
    const singinWithGoogle = (navigate,location)=>{
        googleSingIn(navigate,location)
    }

    const singInWithFacebook = ()=>{
        facebookSingIn()
    }

    return (
        <>
            <Container className='mt-5'>
            <h4 className='text-center'>Login</h4>
            <div  className="mx-auto col-md-6">
            <div className='text-center'>{isLoading && <div class="spinner-grow text-danger "role="status"></div>}</div>
            <form className='mt-3 border regform' onSubmit={formSubmit}>
                <input onChange={handleOnChange} name='email' type="email"className='p-2 form-control mt-4' placeholder="input your email" />
                <input onChange={handleOnChange} name='password' type="password"className='p-2 form-control mt-4' placeholder="input your password" />
                <div className='text-center'><Button type='submit' className='mainButton mt-4 w-50'>Login</Button></div> <br />
                <div style={{display:'flex',justifyContent:'space-around'}}>
                    <Link to='' onClick={singinWithGoogle}>Sing Up with Google </Link>
                    <Link to='' onClick={singInWithFacebook}>Sing Up with facebook </Link> <br/>
                </div>
                   <div className='mt-5'>
                        <h6  style={{color:'red'}}>{error}</h6>
                        <Link style={{color:'red'}} to='/registration'>If you have no Account please Registration</Link><br />
                        <Link style={{color:'red'}}to='/reset'>Forget Password ? Reset</Link>
                   </div>
            </form>
            </div>
        </Container>

        </>
    );
};

export default Login;