import React, { useState } from 'react';
import { NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import './Navs.css'


const Navs = () => {

    const [active,setActive] = useState('menuItem')
    const [icon,setIcon] = useState('hamburger')
    const {user,logout,admin} = useAuth()

    const navFunction = ()=>{
        active === 'menuItem' ? setActive('menuItem active') : setActive('menuItem')
        icon === 'hamburger' ? setIcon('toggle') : setIcon('hamburger')
    }

    return (
        <nav>
            <div className='logo'>
                <h4><Link to='/' style={{textDecoration:'none',color:'white'}}>#_Aysha Asha</Link></h4>
            </div>
                <ul className={active}>
                    <li className='mt-2'><Link to='/' style={{color:'white',textDecoration:'none'}}>Home</Link></li>
                    <li className='mt-2'><Link to='/blogs' style={{color:'white',textDecoration:'none'}}>Blogs</Link></li>
                    <li className='mt-2'><Link to='/JapanesecultureBlog' style={{color:'white',textDecoration:'none'}}>Japanese Blogs</Link></li>
                    {admin && <li className='mt-2'><Link to='/dashbord' style={{color:'red',fontWeight:'bold',textDecoration:'none'}}>Dashbord</Link></li>}
                    <li>
                        <NavDropdown title="Authentication" id="nav-dropdown" className='dropdown'>
                            <li><Link style={{color:'white',textDecoration:'none'}} to='/login'>Login</Link></li><NavDropdown.Divider />
                            <li><Link style={{color:'white',textDecoration:'none'}} to='/registration'>Registration</Link></li><NavDropdown.Divider />
                            <li><Link style={{color:'white',textDecoration:'none'}} to='/reset'>Reset</Link></li>
                        </NavDropdown>  
                    </li>
                    <li style={{marginTop:'10px'}}> 
                        {user?.email ? <Link to='/'onClick={logout} style={{color:'yellow'}}>Logout</Link> : <Link to='/login' style={{color:'red'}}>login</Link>}
                    </li>
                </ul>

            <div className={icon} onClick={navFunction}>
                <span className='bar'></span>
                <span className='bar'></span>
                <span className='bar'></span>
            </div>
        </nav>
    );
};

export default Navs;