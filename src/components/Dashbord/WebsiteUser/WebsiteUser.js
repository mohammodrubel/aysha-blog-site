import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Table } from 'react-bootstrap';

const WebsiteUser = () => {
    const [webusers,setWebuser] = useState([])

    useEffect(()=>{
        fetch('https://obscure-sierra-80533.herokuapp.com/websiteUser')
        .then(res => res.json())
        .then(data => setWebuser(data))
    },[])

    return (
        <Container fluid>
            <Row>
                <Col>
                    
                    <Table striped bordered responsive hover variant="dark">
                        <thead>
                            <tr className='text-center'>
                                <th >Email</th>
                                <th>User Name </th>
                                <th>Role </th>
                            </tr>
                        </thead>

                        {
                            webusers.map(webuser =><tbody>
                                <tr className='text-center'>
                                   <td>{webuser.email}</td>
                                   <td>{webuser.displayName}</td>
                                   <td style={{color:'red'}}><b>{webuser.role}</b></td>
                                </tr>
                            </tbody>)
                        }
                    </Table>
                    
                </Col>
            </Row>
        </Container>
    );
};

export default WebsiteUser;