import {Button} from 'bootstrap';
import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './MakeAdmin.css'
import useAuth from './../../../Hooks/useAuth';

const MakeAdmin = () => {
   const [email,setEmail] = useState('')
   const {token} = useAuth()

   const handelInput = e =>{
       setEmail(e.target.value)

       e.preventDefault()
   }


   const handelSubmit = e =>{
       const user = { email }
       fetch('https://obscure-sierra-80533.herokuapp.com/usersCollection/admin',{
           method:'PUT',
           headers:{
               'authorization':`Bearer ${token}`,
               'content-type':'application/json'
           },
           body:JSON.stringify(user)
       })
       .then(res => res.json())
       .then(data => console.log(data))
       
    e.preventDefault()
   }
    return (
        <div className='makeAdmin'>
            <Container>
                <Row>
                    <Col sm={12} md={8} lg={6} className='mx-auto mt-5'>
                        <h5 style={{textAlign:'center',color:'white'}}>Are you sure you make a new admin ? </h5>
                            <form onSubmit={handelSubmit}>
                                <input onBlur={handelInput} className='form-control w-100 mt-5' style={{background:'transparent',color:'white'}} placeholder='Create New Admin'/>
                                <div className='mx-auto text-center mt-3'>
                                    <button type='submit' className="extraButton">Create Admin</button>
                                </div>
                            </form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default MakeAdmin;