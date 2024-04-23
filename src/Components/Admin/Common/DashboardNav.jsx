import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie'
import Profile from '../../HomePage/Profile/Profile';

const DashboardNav = ({title}) => {
     
    const [user,setUser] =  useState();
   useEffect(()=>{
    const user1 = Cookies.get('yourData');
    if(user1){
        const userData =JSON.parse(user1);
        setUser(userData);
    }
   },[])
   
    console.log(user+" from cookies");
    return (
        <>
            <nav class="navbar navbar-light bg-transparent shadow shadow ">
                <div class="container-fluid">
                    <a class="navbar-brand">{title}</a>
                    <form class="d-flex">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button class="btn btn-outline-success me-5" type="submit">Search</button>
                        {/* <img width="40px" className='me-2 rounded-circle' src={user?.profile} alt={user?.userName} /> */}
                         <Profile user={user} /> 
                    </form>
                </div>
            </nav>
        </>
    )
}

export default DashboardNav