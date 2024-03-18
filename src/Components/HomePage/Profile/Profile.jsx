import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

function Profile({ user }) {
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
            <div class="btn-group d-none d-md-block d-lg-block">
                <div class="btn-group dropstart" role="group">
                    <img className='' width='60px' style={{ borderRadius: '50%', cursor: 'pointer' }} src={user?.profile} class="img-fluid  dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false" alt="..." />

                    <ul class="dropdown-menu mt-5 col-sm-12" style={{ width: '300px', zIndex: '100000' }}>
                        <div class="accordion" id="accordionPanelsStayOpenExample">

                            <div className='p-2'>
                                <img width='30px' src={user?.profile} class="img-fluid rounded-start" alt="..." />
                                <span className='px-3'>Shubham Shrivastwa</span>
                            </div>

                            {/* for the profiule */}
                            <div class="accordion-item border-0">
                                <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                                    <button class="accordion-button shadow-none border-none bg-white" id='/ninja/user/profile' onClick={(e)=>{visitors(e)}} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                        Your Profile
                                    </button>
                                </h2>

                            </div>

                            {/* my Account */}
                            <div class="accordion-item border-0 ">
                                <h2 class="accordion-header border-none" id="panelsStayOpen-headingOne">
                                    <button class="bg-white accordion-button border-none shadow-none" id='/ninja/user/account' onClick={(e)=>{visitors(e)}}  type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                        My Account
                                    </button>
                                </h2>

                            </div>

                            {/* for the logout */}
                            <div class="accordion-item border-0">
                                <h2 class="accordion-header border-0" id="panelsStayOpen-headingTwo">
                                    <button class="accordion-button collapsed bg-white border-0" onClick={logoutUser} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                                        Logout
                                    </button>
                                </h2>

                            </div>
                        </div>

                    </ul>
                </div>
            </div>
            {/* small device */}
            <div className='d-md-none pe-3 text-white' style={{backgroundColor:'#13503a' }}>
                <div class="accordion " id="accordionPanelsStayOpenExample" style={{backgroundColor:'#13503a !important' }}>

                    <div className='' style={{ width: '100% !important' }}>
                        <span className='mb-3'>{user?.userName}</span>
                        <img width='50px' src={user?.profile} style={{borderRadius:'50%'}} class="px-2 mb-3 img-fluid" alt="..." />
                        {/* for the profile */}
                        <p>
                            <Link className='text-decoration-none text-white d-flex mb-3' to='/ninja/user/profile'>Your Profile</Link>
                        </p>

                        {/* for the Account */}
                        <p>
                            <Link className='text-decoration-none text-white' to='/'>Your Account</Link>
                        </p>

                        <hr className='text-white mb-4'/>

                        {/* foer the logout */}
                        <button className='btn' onClick={logoutUser} style={{backgroundColor:'#eaec65'}}>Logout</button>

                    </div>

                    
                </div>
            </div>
        </>
    );
}

export default Profile;
