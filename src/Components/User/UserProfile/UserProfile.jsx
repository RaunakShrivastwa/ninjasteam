import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileArrowDown } from '@fortawesome/free-solid-svg-icons';
import UserAbout from './UserAbout';
import NavigationMenu from '../../NavigationBar/NavigationMenu';
import './userprofile.css'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { urlFunction } from '../../../App';
import Cookies from 'js-cookie'
import DashboardNav from '../../Admin/Common/DashboardNav';

const UserProfile = () => {
    const [user,setUser] = useState();
    const {email} = useParams();
    useEffect(()=>{
       loadUser();
    },[]);

    const loadUser = async ()=>{
      const {userEmail}= JSON.parse(Cookies.get('yourData'))
        const userData =  await axios.get(urlFunction()+`user/fetchUser/${userEmail}`);
        setUser(userData.data)
    }
    
    return (
        <>
            {
                user?.status != 'admin' ? (
                    <NavigationMenu />
                ):(
                   <DashboardNav />
                )
            }
            <div class="container-fluid mt-5 pt-3 p-0 m-0">
                <div className='user container-fluid ' style={{ width: '100%', height: '30vh', zIndex: '100' }}>

                    <div className='container' style={{ zIndex: '10000', height: '100vh' }}>
                        <div class="d-flex justify-content-end mb-3 pt-3 text-white">
                            <button type="button" class="btn btn-outline-light text-white px-3 rounded-pill fw-bolder px-4 border border-2 border-white">
                                <FontAwesomeIcon icon={faFileArrowDown} class="pe-1" style={{ width: '20px' }} />Download
                            </button>
                        </div>
                        <UserAbout userEmail={email}/>
                    </div>
                </div>
            </div>


        </>
    )
}

export default UserProfile