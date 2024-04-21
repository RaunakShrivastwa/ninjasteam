import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import './profile.css';

function Profile({ user }) {
    
    // var  {userEmail} = JSON.parse(Cookies.get('yourData'));
    const history = useNavigate();
    const logoutUser = ()=>{
        Cookies.remove('yourData');
        history('/ninja/auth/login')
    }

    const visitors = (e)=>{
        history(e.target.id)
    }

    return (
        <>
            <div class="btn-group  d-lg-block">
                <div class="btn-group dropstart" role="group">
                    <img className='' width='70px' style={{ borderRadius: '50%', cursor: 'pointer' }} src={user?.profile} class="img-fluid  dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false" alt="..." />

                    <ul class="dropdown-menu mt-5 col-sm-12" style={{ width: '300px', zIndex: '100000' }}>
                        <div class="accordion" id="accordionPanelsStayOpenExample">

                            <div className='p-2'>
                                <img width='30px' src={user?.profile} class="img-fluid rounded-start" alt="..." />
                                <span className='px-3'>{user?.userName}</span>
                            </div>

                            {/* for the profiule */}
                            <div class="accordion-item border-0">
                                <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                                    <button class="accordion-button shadow-none border-none bg-white p" id={`/ninja/user/profile/${user?.userEmail}`} onClick={(e)=>{visitors(e)}} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                        Your Profile
                                    </button>
                                </h2>

                            </div>

                            {/* my Account */}
                            <div class="accordion-item border-0 ">
                                <h2 class="accordion-header border-none" id="panelsStayOpen-headingOne">
                                    <button class="bg-white accordion-button border-none shadow-none" id='/ninja/user/account' onClick={(e)=>{visitors(e)}}  type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                        <span className='a'>My Account</span>
                                    </button>
                                </h2>

                            </div>

                            {/* for the logout */}
                            <div class="accordion-item border-0">
                                <h2 class="accordion-header border-0" id="panelsStayOpen-headingTwo">
                                    <button class="accordion-button collapsed bg-white border-0" onClick={logoutUser} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                                       <span className='l'> Logout</span>
                                    </button>
                                </h2>

                            </div>
                        </div>

                    </ul>
                </div>
            </div>
            {/* small device */}
            
        </>
    );
}

export default Profile;
