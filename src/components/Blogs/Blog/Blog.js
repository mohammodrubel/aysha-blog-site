import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Blog.css'


const Blog = ({blog}) => {
    const {imgurl,headline,date,time,_id} = blog
    return (
        <Col>
            <div className='image'>
                <div className='image__img'>
                    <img src ={imgurl} className='img-fluid'/>
                    <div className='img_overlay'>
                        <div>
                            <div style={{display:'flex',justifyContent:'space-around'}}>
                            <span>{date}</span>
                            <span>{time}</span>
                            </div> <br />
                            <h5>{headline.slice(0,40)}<b>...</b></h5>
                            <Link to={`/blog/${_id}`} className='customLink'><b>
                            See More ...
                            <i class="fa-solid fa-angle-right"></i>
                            </b>
                            </Link>
                        </div>
                    </div>
               </div>
            </div>
        </Col>
    );
};

export default Blog;