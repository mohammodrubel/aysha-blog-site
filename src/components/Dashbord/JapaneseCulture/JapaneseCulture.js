import React, { useState } from 'react';
import { Container, Row,Button } from 'react-bootstrap';

const JapaneseCulture = () => {
    const date = new Date().toLocaleDateString()
    const time = new Date().toLocaleTimeString()
    const [update,setUpdate] = useState({})
    const onChangeHendeler = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newValue = {...update}
        newValue [field] = value;
        console.log(newValue)
        setUpdate(newValue)
    }
    const formSubmit = e =>{

        const postObject = {
            ...update,
            time,
            date
            
        }



        fetch('https://obscure-sierra-80533.herokuapp.com/japaneseCulture',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(postObject)
        })
        alert('new post publish')
        e.preventDefault()
    }
    return (
        <Container>
            <Row className='col-md-6 col-lg-8 mx-auto'>
                <h4 className='text-center' style={{color:'green'}}>Create Japanese Culture</h4>
                <form className='border border-2 p-4 mt-4' onSubmit={formSubmit}>

                    <div style={{display:'flex',gap:'20px',marginBottom:'20px'}}>
                        <input value={date}name='date' className="w-50 form-control" />
                        <input value={time}name='time' className="w-50 form-control" />
                    </div>
                    <div>
                        <label>Blog Hedline</label>
                        <input onChange={onChangeHendeler} className="p-2 mb-4 form-control"placeholder='headline'name='headline' />
                    </div>
                    <div>
                        <label>Blog IMG Url</label>
                        <input onChange={onChangeHendeler} className="p-2 mb-4 form-control"placeholder='img Url'name='imgurl' />
                    </div>
                    <div>
                        <label>Blog Discription</label>
                        <textarea rows={6} onChange={onChangeHendeler} className="p-2 mb-4 form-control"placeholder='Blog Dicription' name='discription' />
                    </div>
                    <div style={{textAlign:'center'}}>
                        <Button className='mainButton' type='submit'>Create New Blog</Button>
                    </div>
                </form>
            </Row>
        </Container>
    );
};

export default JapaneseCulture;