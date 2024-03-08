import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Style.css';

const CourseAlumniWork = () => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };

    return (
        <div className="container my-4 d-flex justify-content-center align-items-center bg-dark">
            <Slider {...settings} className="w-100 d-flex aligin-items-center">
                <div className="p-2 text-center bg-transparent">
                    <img src="/Image/Company/accenture.png" alt="accenture.png" />
                </div>
                <div className="p-2 text-center">
                    <img src="/Image/Company/airtel.png" alt="airtel.png" />
                </div>
                <div className="p-2 text-center">
                    <img src="/Image/Company/capegemini.png" alt="capegemini.png" />
                </div>
                <div className="p-2 text-center">
                    <img src="/Image/Company/accenture.png" alt="accenture.png" />
                </div>
                <div className="p-2 text-center">
                    <img src="/Image/Company/airtel.png" alt="airtel.png" />
                </div>
                <div className="p-2 text-center">
                    <img src="/Image/Company/capegemini.png" alt="capegemini.png" />
                </div><div className="p-2 text-center">
                    <img src="/Image/Company/accenture.png" alt="accenture.png" />
                </div>
                <div className="p-2 text-center">
                    <img src="/Image/Company/airtel.png" alt="airtel.png" />
                </div>
                <div className="p-2 text-center">
                    <img src="/Image/Company/capegemini.png" alt="capegemini.png" />
                </div><div className="p-2 text-center">
                    <img src="/Image/Company/accenture.png" alt="accenture.png" />
                </div>
                <div className="p-2 text-center">
                    <img src="/Image/Company/airtel.png" alt="airtel.png" />
                </div>
                <div className="p-2 text-center">
                    <img src="/Image/Company/capegemini.png" alt="capegemini.png" />
                </div>
            </Slider>
        </div>
    );
};


export default CourseAlumniWork;
