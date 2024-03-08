import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div className=' containe-fluied' style={{ backgroundColor: '#202738' }}>
            <div className='container '>
                <div className='col-md-12 col-sm-12 row '>
                    <div className='col-md-3 col-sm-12'>
                        <div class="card border-0 text-white border-0" style={{ backgroundColor: '#202738' }}>
                            <div class="card-header border-0">
                                <img width='30px' src="/image/icon/ninja.png" alt="" /> <span>Our Ninjas</span>
                            </div>
                            <div class="card-body border-0">
                                <h5 class="card-title">Engineered with <img width='20px' src="/image/icon/heart.png" alt="" /> by</h5>
                                <p class="card-text">Keep Coding</p>
                                <img width='100px' src="/image/icon/qr.png" alt="" />
                                <p>Download App</p>
                            </div>
                        </div>
                    </div>


                    <div className='col-md-3 col-sm-12 ' style={{ overflow: 'hidden !important' }}>
                        <div class="card border-0 text-white border-0" style={{ backgroundColor: '#202738' }}>
                            <div class="card-header border-0">
                                <h3>Important Hints</h3>
                            </div>
                            <div class="card-body border-0 text-white">
                                <Link className='text-white text-decoration-none'><small>Fullstack Developer|| Java || MERN</small></Link> <br />
                                <Link className='text-white text-decoration-none'><small>Training Roadmap of Your Career</small></Link><br />
                                <Link className='text-white text-decoration-none'><small>Why Should You Learn Here?</small></Link><br />
                                <Link className='text-white text-decoration-none'><small>Pay After Placement Training Programm</small></Link><br />
                                <Link className='text-white text-decoration-none'><small>Check Your Resume Score and Create New one</small></Link><br />
                                <Link className='text-white text-decoration-none'><small>Mannage Your Communication</small></Link><br />
                                <Link className='text-white text-decoration-none'><small>Start Your Coding and Practice Sheet Here</small></Link><br />
                                <Link className='text-white text-decoration-none'><small>Explore All👍👍</small></Link>

                            </div>
                        </div>
                    </div>

                    <div className='col-md-3 col-sm-12'>
                        <div class="card border-0 text-white border-0" style={{ backgroundColor: '#202738' }}>
                            <div class="card-header border-0">
                                <h4>Resources</h4>
                            </div>
                            <div class="card-body border-0">
                                <Link className='text-white text-decoration-none'>Home</Link> <br />
                                <Link className='text-white text-decoration-none'>Blog</Link> <br />
                                <Link className='text-white text-decoration-none'>Courses</Link> <br />
                                <Link className='text-white text-decoration-none'>Home</Link> <br />
                                <Link className='text-white text-decoration-none'>Register</Link> <br />
                                <Link className='text-white text-decoration-none'>Practice</Link> <br />
                                <Link className='text-white text-decoration-none'>Payment</Link> <br />
                                <Link className='text-white text-decoration-none'>Dashboard</Link> <br />
                                <Link className='text-white text-decoration-none'>Login</Link>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-3 col-sm-12'>
                        <div class="card border-0 text-white border-0 " style={{ backgroundColor: '#202738' }}>
                            <div class="card-header border-0">
                                <h4>Follow us on</h4>
                            </div>
                            <div class="card border-0 text-white border-0" style={{ backgroundColor: '#202738' }}>
                                <div class="card-body border-0 text-white">
                                    <Link className='text-white text-decoration-none'><img width='30px' src="/image/social/Youtube.png" alt="" />&nbsp; <small>Youtube</small></Link> <br />
                                    <Link className='text-white text-decoration-none'><img className='py-3' width='30px' src="/image/social/linkedin.png" alt="" />&nbsp; <small>Linkedin</small></Link> <br />
                                    <Link className='text-white text-decoration-none'><img className='py-3' width='30px' src="/image/social/twitter.png" alt="" />&nbsp; <small>Twitter</small></Link> <br />
                                    <Link className='text-white text-decoration-none'><img className='py-3' width='30px' src="/image/social/facebook.png" alt="" />&nbsp; <small>Facebook</small></Link> <br />

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='p-5'>
                        <hr className='text-white' />
                        <h4 className='text-white'>Tutorials</h4>
                        <div className='p-2 text-white'>
                            <p>Java   &nbsp; &nbsp; |  Spring boot   &nbsp; &nbsp; |   Data Structure   &nbsp; &nbsp; |    Javascript    &nbsp; &nbsp; |    MERN   &nbsp; &nbsp; | Data Science &nbsp; &nbsp; |
                                Cyber Security &nbsp; &nbsp; | React.js &nbsp; &nbsp; | Node.js &nbsp; &nbsp; | PHP &nbsp; &nbsp; | Python &nbsp; &nbsp; | AI &nbsp; &nbsp; |
                                Fullstack Development &nbsp; &nbsp; | Backend Developer &nbsp; &nbsp; | Github
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Footer