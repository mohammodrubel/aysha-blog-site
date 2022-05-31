import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Footer from '../../Home/Footer/Footer';
import './Details.css'
import useAuth from '../../../Hooks/useAuth';
import commentsImg from '../../Home/img/149071.png'


const Details = () => {
    const {detail} = useParams()
    const [ontimeData,setOnTimeData] = useState({})
    const {imgurl,headline,discription,time,date,_id} = ontimeData;
    const [comments,setComments] = useState('')
    const {user} = useAuth()
    const [filterComment,setFilterComment] = useState([])
    const [isLoad,setisLoad] =useState(false)
   
    const handleforminput = e =>{
        setComments(e.target.value)
    }
    const commentsSubmit = e =>{
        e.preventDefault()
        const information = {comments,Id:_id,userinform:user.displayName,email:user.email}
        
        fetch('https://obscure-sierra-80533.herokuapp.com/japaneseComments',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(information)
        })
        .then(res => res.json())
        .then(data => { 
            setisLoad(!isLoad)
             
           alert('your comment is publish')
        })
        e.target.reset()
    }
    
    useEffect(()=>{
        fetch('https://obscure-sierra-80533.herokuapp.com/blogs')
        .then(res => res.json())
        .then(data => setOnTimeData(data.users.find((p) => p._id === detail)))
    },[])

    useEffect(()=>{
        fetch('https://obscure-sierra-80533.herokuapp.com/japaneseComments')
        .then(res => res.json())
        .then(data => {
            setFilterComment(data.filter((p) => p.Id === _id))
        })
    },[_id,isLoad])
   

    const hendleDelete = id =>{
        const  proced = window.confirm('are you sure ? you want to delete this comment ? ');
        if(proced){
            const url = `https://obscure-sierra-80533.herokuapp.com/japaneseComments/${id}`;
            fetch(url,{
                method:'DELETE',
            })
            .then(res => res.json())
            .then(data =>{
                if(data.deletedCount > 0){
                    const remainingId = filterComment.filter(temporary => temporary._id !== id)
                    
                    setFilterComment(remainingId)
                    alert('delete Confirmed! ')
                }
            })
        }
    }
    

    
    return (
        <>
            <Container >
            <Row >
            <h2 style={{color:'#090924',textAlign:'center',marginTop:'30px'}}>{headline}</h2>
                {/* Detail markup just front end  */}
                <Col className="col-12  text-center"style={{margin:'60px 0px'}}>
                    <div>
                         <hr />
                        <div style={{display:'flex',justifyContent:'space-around'}}>
                            <h6 style={{color:'green'}}><b>{date}</b></h6>
                            <h6 style={{color:'red'}}><b>{time}</b></h6>
                        </div><hr/>
                        <p className='discription' style={{lineHeight:'35px'}}>{discription}</p>
                    </div>
                    <img src={imgurl} className="img-fluid"/>
                </Col>
                    {/* getComments  */}
                    

                <Col className='col-12 col-sm-8 mx-auto'>

                    {
                        filterComment.map(comment => <Card style={{padding:'20px',marginTop:'10px',background:'	#DCDCDC'}}>
                                <div style={{display:'flex',alignItems:'center',gap:'10px'}}>
                                <img src ={commentsImg} style={{width:'60px'}}/>
                                <h6 style={{color:'red'}}>{comment.userinform}</h6>
                                { user.email === comment.email ? <p className='mt-1 m-2'style={{cursor:'pointer'}} onClick={()=>hendleDelete(comment._id)}>Delete</p>:<p></p>}
                                </div>
                                <p style={{paddingLeft:'30px',fontSize:'14px'}}><i>{comment.comments}</i></p>
                        </Card>)
                    }    

                </Col>



                    {/* Comments markup and post method  */}
                <Col className=' col-sm-10 col-md-5 col-lg-8 mx-auto'>
                    <form className='mt-5 mb-5' onSubmit={commentsSubmit}>
                        <textarea onBlur={handleforminput} name='comments' rows={8} className='form-control commentsTextaria'placeholder='Inter Your Comments here....' />
                        {/* <input onBlur={handleforminput}name='postId' style={{  visibility:'hidden'}} value={_id} /> */}
                        <div className='mx-auto text-center'><button type='submit' className='commentsButton w-50'>Add Comments</button></div>
                    </form>
                </Col>
                
            </Row>
        </Container>
        <Footer></Footer>
        </>
    );
}; 

export default Details;