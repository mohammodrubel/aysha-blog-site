import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Table } from 'react-bootstrap';

const PersonalBlog = () => {
    // const [filterComment,setFilterComment] = useState([])
    const [blogs,setBlogs] = useState([])


    useEffect(()=>{
        fetch('https://obscure-sierra-80533.herokuapp.com/blogs')
        .then(res => res.json())
        .then(data => setBlogs(data.users))
    },[])

    const hendleDelete = id =>{
        const  proced = window.confirm('are you sure ? you want to delete this comment ? ');
        if(proced){
            const url = `https://obscure-sierra-80533.herokuapp.com/blogs/${id}`;
            fetch(url,{
                method:'DELETE',
            })
            .then(res => res.json())
            .then(data =>{
                if(data.deletedCount > 0){
                    const remainingId = blogs.filter(temporary => temporary._id !== id)
                    
                    setBlogs(remainingId)
                    alert('delete Confirmed! ')
                }
            })
        }
    }
    return (
        <Container fluid>
            <Row>
                <Col>
                    
                    <Table striped bordered hover variant="dark">
                        <thead>
                            <tr className='text-center'>
                                <th >Title</th>
                                <th>Action</th>
                            </tr>
                        </thead>

                        {
                            blogs.map(blog => <tbody>
                                <tr className='text-center'>
                                   <td>{blog.headline}</td>
                                   <td><i class="fa-solid fa-trash-can" onClick={()=>hendleDelete(blog._id)} style={{color:'red'}}></i></td>
                                </tr>
                            </tbody>)
                        }
                    </Table>
                    
                </Col>
            </Row>
        </Container>
    );
};

export default PersonalBlog;



