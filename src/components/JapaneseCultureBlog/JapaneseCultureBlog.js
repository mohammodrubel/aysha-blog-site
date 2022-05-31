import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Footer from './../Home/Footer/Footer';
import Blog from './../Blogs/Blog/Blog';
import JapaneseBlog from './JapaneseBlog/JapaneseBlog';

const JapaneseCultureBlog = () => {
    const [data,setData] = useState([])
    const [pageCount,setPageCount] = useState(0)
    const [page,setPage] = useState(0)
    const size = 8;
    
    useEffect(()=>{
        fetch(`https://obscure-sierra-80533.herokuapp.com/japaneseCulture?page=${page}&&size=${size}`)
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
                    data.map(japanblog => <JapaneseBlog japanblog={japanblog} key={japanblog._id}></JapaneseBlog>)
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

export default JapaneseCultureBlog;