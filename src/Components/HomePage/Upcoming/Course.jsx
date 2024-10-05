import React, { useEffect, useState } from 'react';
import './Upcoming.css';
import { urlFunction } from '../../../App.js';
import axios from 'axios';
import { Link } from 'react-router-dom';
import courseObj from '../../../CourseObject/courseObject.js';

function Course() {
    const [course, setCourse] = useState([]);

    useEffect(() => {
        loadCourse();
    }, []);

    const loadCourse = async () => {
        try {
            setCourse(courseObj);
        } catch (err) {
            console.log("There is error ", err);
        }
    };
    return (
        <div className='mb-5'>
            <h4 className='mb-4'>Upcoming Courses</h4>
            {course.length === 0 ? (
                <p></p>
            ) : (
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {course?.slice(0, 3)?.map((data) => (
                        <Link className='text-decoration-none' to={`/ninja/CourseDetail/${data?.name}`} key={data?.id}>
                            <div className="col rounded border-0 h-100 shadow">
                                <div className="card v h-100 border-0 rounded">
                                    <img style={{ height: '20vh' }} src={data?.courseImage} className="card-img-top" alt="..." />
                                    <div className="card-body border-0 rounded">
                                        <h4>{data?.name}</h4>
                                        <span>{data?.description}</span>
                                    </div>
                                    <div className='col-md-12 col-sm-12 d-flex p-2 justify-content-between'>
                                        <div className='d-flex gap-1 align-items-center'>
                                        <img width='12px' height={'12px'} src="https://cdn-icons-png.flaticon.com/128/2948/2948088.png" alt="" />
                                        <small className='px-2'>{data?.startDate}</small>
                                        </div>
                                        <div>
                                            <span className='me-2 shadow'>Free</span>
                                            <del className='text-muted-2 text-danger' style={{fontSize:'17px'}}>₹ {data?.marketPrice}</del>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

            )}
        </div>
    );
}

export default Course;
