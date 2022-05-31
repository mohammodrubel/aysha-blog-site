import React,{useState} from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './Registration.css'
import useAuth from './../../../Hooks/useAuth';


const Registration = () => {
    const [loginData,setLoginData] = useState({})
    const {RegisterUser,isLoading,error,googleSingIn,facebookSingIn} = useAuth()
    const navigate = useNavigate()
    const location = useLocation()

    const handleOnChange = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newStorate =  {...loginData}
        newStorate[field] = value
        console.log(newStorate)
        setLoginData(newStorate)
        e.preventDefault() 
        
    }
   

    const formSubmit = e =>{
        if(loginData.password !== loginData.password2){
            return alert('password did not matched, try again latter')
        }
        RegisterUser(loginData.email,loginData.password,navigate,loginData.name,navigate,location)
        alert('success')
        e.preventDefault()
    }
    const singInWithFacebook = (navigate,loacation)=>{
        facebookSingIn()
    }

    return (
        <Container>
            <h4 className='text-center'>Registration</h4>
            <div  className="mx-auto col-md-6">
            <div className='text-center'>{isLoading && <div class="spinner-grow text-danger "role="status"></div>}</div>
            <form className='mt-3 border regform' onSubmit={formSubmit}>
                <input onChange={handleOnChange}name='name' type="text"className='p-2 form-control mt-4' placeholder="input your name" />
                <input onChange={handleOnChange}name='email' type="email"className='p-2 form-control mt-4' placeholder="input your email" />
                <input onChange={handleOnChange}name='password' type="password"className='p-2 form-control mt-4' placeholder="input your password" />
                <input onChange={handleOnChange}name='password2' type="password"className='p-2 form-control mt-4' placeholder="input your re-password" />
                <div className='text-center'><Button type='submit' className='mainButton mt-4 w-50'>Registration</Button></div> <br />
                <div style={{display:'flex',justifyContent:'space-around'}}>
                    <Link to='' onClick={()=>googleSingIn(navigate,location)}>Sing Up with Google </Link>
                    <Link to='' onClick={singInWithFacebook}>Sing Up with facebook </Link> 
                </div>
                    <div className='mt-5'>
                        <h6 style={{color:'red',textAlign:'center'}}>{error}</h6>
                        <Link style={{color:'red'}} to='/login'>If you have already Account please Login</Link><br />
                        <Link style={{color:'red'}}to='/reset'>Forget Password ? Reset</Link>
                   </div>
            </form>
            </div>
        </Container>
    );
};

export default Registration;