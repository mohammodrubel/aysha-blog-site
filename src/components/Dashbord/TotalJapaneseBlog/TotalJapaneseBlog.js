import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Table } from 'react-bootstrap';

const TotalJapaneseBlog = () => {
    const [japanseblog,setJapaneseBlog] = useState([])

    useEffect(()=>{
        fetch('https://obscure-sierra-80533.herokuapp.com/japaneseCulture')
        .then(res => res.json())
        .then(data => setJapaneseBlog(data.users))
    },[])

    const hendleDelete = id =>{
        const  proced = window.confirm('are you sure ? you want to delete this comment ? ');
        if(proced){
            const url = `https://obscure-sierra-80533.herokuapp.com/japaneseCulture/${id}`;
            fetch(url,{
                method:'DELETE',
            })
            .then(res => res.json())
            .then(data =>{
                if(data.deletedCount > 0){
                    const remainingId = japanseblog.filter(temporary => temporary._id !== id)
                    
                    setJapaneseBlog(remainingId)
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
                            japanseblog.map(singleJapaneseblog => <tbody>
                                <tr className='text-center'>
                                   <td>{singleJapaneseblog.headline}</td>
                                   <td><i class="fa-solid fa-trash-can" onClick={()=>hendleDelete(singleJapaneseblog._id)} style={{color:'red'}}></i></td>
                                </tr>
                            </tbody>)
                        }
                    </Table>
                    
                </Col>
            </Row>
        </Container>
    );
};

export default TotalJapaneseBlog;