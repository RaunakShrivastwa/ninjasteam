import React from 'react';
import CourseCard from '../../CourseCommon/CourseCard';

const CourseSlideContent = ({ content, datas }) => {
    var cardData = [
        {
            imageLink: "/Image/Subject/101-interview.png",
            liked: '195k +',
            rating: '5.0',
            courseNaration: content,
            originalPrice: 40000,
            discountedPrice: 20000
        }, {
            imageLink: "/Image/Subject/JAVA-Backend-Developer.png",
            liked: '195k +',
            rating: '3.0',
            courseNaration: content,
            originalPrice: 60000,
            discountedPrice: 20000
        }, {
            imageLink: "/Image/Subject/Software-Testing.png",
            liked: '195k +',
            rating: '2.0',
            courseNaration: content,
            originalPrice: 50000,
            discountedPrice: 20000
        }
    ]

    return (
        <div>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 mb-5">
                {
                    cardData.map((data) => (
                        <CourseCard courseData={data} />
                    ))
                }
            </div>
        </div>
    );
};

export default CourseSlideContent;
