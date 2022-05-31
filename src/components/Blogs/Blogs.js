import React, { useEffect, useState } from 'react';
import { Row, Container, Col } from 'react-bootstrap';
import Blog from './Blog/Blog';
import './Blogs.css'
import Footer from './../Home/Footer/Footer';


const Blogs = () => {
    const [data,setData] = useState([])
    const [pageCount,setPageCount] = useState(0)
    const [page,setPage] = useState(0)
    const size = 8;
    
    useEffect(()=>{
        fetch(`https://obscure-sierra-80533.herokuapp.com/blogs?page=${page}&&size=${size}`)
        .then(res => res.json())
        .then(data => {
            setData(data.users)
            const count = data.count;
            const pageNumber = Math.ceil(count /10);
            setPageCount(pageNumber)

        })
    },[page])
   
    return (
        <>

            <Container  fluid className='container-fluid'>
                <Row xs={1} md={3} lg={4} sm={2} className="g-5 m-2"> 
                    {
                        data.map(blog => <Blog blog={blog} key={blog._id}></Blog>)
                    }
                </Row>
            </Container>
                <Container fluid>
                    <Row>
                        <Col>
                        <div>
                            <ul className='pagination justify-content-center m-5'>
                                {

                                [...Array(pageCount).keys()].map(number => <li className={number === page ?'page-link extraActive mx-2' : 'page-link mx-2' }
                                key={number}
                                onClick={()=> setPage(number)}
                                >{number + 1}</li>)

                                }
                            </ul>
                        </div>
                        </Col>
                    </Row>
                </Container>
            <Footer></Footer>
        </>
    );
};

export default Blogs;