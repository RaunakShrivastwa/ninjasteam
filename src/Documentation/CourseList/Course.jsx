import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './CCC.css';
import Footer from '../../Components/MainFooter/Footer';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const Course = () => {

    useEffect(() => {
        gsap.to('#div_11', {
            x: 1100,
            duration: 20,
            // delay:4,
            scrollTrigger: {
                trigger: '#div_11',
                scroller: '#body1',
                scrub: 2,
            }
        })
        gsap.to('.inner', {
            rotate: '360',
            duration: 20,
            // delay:4,
            scrollTrigger: {
                trigger: '.inner',
                scroller: '#body1',
                scrub: 2,
            }
        })
    }, []);

    return (
        <div id='text1' className=' w-100 overflow-auto' style={{height:'auto !important'}}>
            <div className='container mb-3'>

                <div id="div-22" class="div-2">
                    <div id='' className='d-flex'>
                        <div><h4>Start Learning</h4></div>
                        <div id="div_11" class="">
                            <img style={{ opacity: '0.2', transform: 'rotate(10deg)' }} width="30px" src="https://cdn-icons-png.flaticon.com/128/11432/11432052.png" alt="" />
                            <img width="30px" src="https://cdn-icons-png.flaticon.com/128/11432/11432052.png" alt="" /></div>

                    </div>
                </div>

                <div class="row row-cols-1 row-cols-md-4 g-4">

                    <div class="col">
                        <div class="card h-100 p-0 m-0">
                            <img width='30px' height='240px' src="https://th.bing.com/th/id/OIP.l6e5XjbspaceR1P5N9EBeQHaES?w=309&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" class="card-img-top" alt="..." />
                            <div class="card-body d-flex justify-content-between">
                                <h5 class="card-title">Java Script</h5> 
                                <div className='button d-flex  justify-content-around align-items-center'>
                                    <Link to='/ninjas/documents/javascript/visit/home'>
                                          <div className='inner'></div>
                                    </Link>
                                </div>                             
                            </div>
                            
                        </div>
                    </div>

                    <div class="col">
                        <div class="card h-100">
                            <img width='100%' height='240px' src="https://th.bing.com/th/id/OIP.VM8_EYasfDGvh2tmZsS4XAHaDe?w=337&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" class="card-img-top" alt="..." />
                            <div class="card-body d-flex justify-content-between">
                                <h5 class="card-title">Data Structure</h5> 
                                <div className='button d-flex  justify-content-around align-items-center'>
                                    <div className='inner'></div>
                                </div>                             
                            </div>
                            
                        </div>
                    </div>

                    <div class="col">
                        <div class="card h-100">
                            <img width='100%' height='240px' src="https://th.bing.com/th/id/OIP.-pjCnKjbWhKe4WuPB8PV-wHaEI?w=289&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" class="card-img-top" alt="..." />
                            <div class="card-body d-flex justify-content-between">
                                <h5 class="card-title">Java</h5> 
                                <div className='button d-flex  justify-content-around align-items-center'>
                                    <div className='inner'></div>
                                </div>                             
                            </div>
                            
                        </div>
                    </div>

                    <div class="col">
                        <div class="card h-100">
                            <img width='100%' height='240px' src="data:image/jpeg;base64,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" class="card-img-top" alt="..." />
                            <div class="card-body d-flex justify-content-between">
                                <h5 class="card-title">Node.js </h5> 
                                <div className='button d-flex  justify-content-around align-items-center'>
                                    <div className='inner'></div>
                                </div>                             
                            </div>
                            
                        </div>
                    </div>

                </div>

            </div>
            {/* <Footer /> */}
        </div>
    );
};

export default Course;
