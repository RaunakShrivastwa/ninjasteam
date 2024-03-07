import React from 'react'
import CourseCard from './CourseCard'

const CourseType = ({ heading, link }) => {
    var cardData = [
        {
            imageLink: "/Image/101-interview.png",
            liked: '195k +',
            rating: '5.0',
            courseNaration: "DSA to Development: A Complete Guide.",
            originalPrice: 40000,
            discountedPrice: 20000
        }, {
            imageLink: "/Image/JAVA-Backend-Developer.png",
            liked: '195k +',
            rating: '3.0',
            courseNaration: "DSA to Development: A Complete Guide.",
            originalPrice: 60000,
            discountedPrice: 20000
        }, {
            imageLink: "/Image/Software-Testing.png",
            liked: '195k +',
            rating: '2.0',
            courseNaration: "DSA to Development: A Complete Guide.",
            originalPrice: 50000,
            discountedPrice: 20000
        }
    ]

    return (
        <>
            <h3 className="card-title d-flex justify-content-between align-items-center mt-4 mb-2">
                <span className="h4 fw-bold">{heading}</span>
                <a href={link} className="btn btn-secondary btn btn-sm fw-bold bg-transparent text-dark border-0">View All <img src="/image/arrow.png" alt="arrow" srcset="" style={{ width: '20px' }} /> </a>
            </h3>

            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 mb-5">
                {
                    cardData.map((data) => (
                        <CourseCard courseData={data} />
                    ))
                }

            </div>
        </>
    )
}

export default CourseType