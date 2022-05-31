import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const JapaneseBlog = ({japanblog}) => {
    const {imgurl,headline,date,time,_id} = japanblog
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
                            <Link to={`/japaneseculture/${_id}`} className='customLink'><b>
                            See More ...
                            <i class="fa-solid mt-2 fa-angle-right"></i>
                            
                            </b>
                            </Link>
                        </div>
                    </div>
               </div>
            </div>
        </Col>
    );
};

export default JapaneseBlog;