import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Style.css';

const CourseAlumniWork = () => {
    const images = [
        '/Image/Company/accenture.png',
        '/Image/Company/airtel.png',
        '/Image/Company/capegemini.png',
        '/Image/Company/cisco.png',
        '/Image/Company/cognizant.png',
        '/Image/Company/dell.png',
        '/Image/Company/goldman.png',
        '/Image/Company/hcl.png',
        '/Image/Company/hp.png',
        '/Image/Company/infosys.png',
        '/Image/Company/oracle.png',
        '/Image/Company/paytm.png',
        '/Image/Company/tcs.png',
        '/Image/Company/wipro.png',
        '/Image/Company/intel.png'
    ];

    return (
        <>
            <div class="mt-5">
                <div>
                    <span class="border border-3 border-success border-top-0 border-end-0 border-start-0 h3 fw-bolder fs-2">Where Our Alumni Work</span>
                </div>
                <div className="componayLogos mt-4">
                    <div className="loges-slide">
                        {
                            images.map((photo) => {
                                return <img src={photo} alt={photo} class="logoImg" />
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default CourseAlumniWork;