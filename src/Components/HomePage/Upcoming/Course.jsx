import React, { useEffect, useState } from 'react';
import './Upcoming.css';
import { urlFunction } from '../../../App.js';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Course() {
    const [course, setCourse] = useState([]);

    useEffect(() => {
        loadCourse();
    }, []);

    const loadCourse = async () => {
        try {
            const res = await axios(urlFunction() + "course/status");
            setCourse(res.data);
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
                    {course.map((data) => (
                        <Link className='text-decoration-none' to={`/ninja/CourseDetail/${data.name}`}>
                            <div className="col rounded border-0 h-100 shadow" key={data.id}>
                                <div className="card v h-100 border-0 rounded ">
                                    <img style={{ height: '20vh' }} src={data?.courseImage} className="card-img-top" alt="..." />
                                    <div className="card-body border-0 rounded">
                                        <h4>{data?.name}</h4>
                                        <span>{data.description}</span>
                                    </div>
                                    <div className='col-md-12 col-sm-12 d-flex p-2'>
                                        <div className='col-md-7 col-sm-6'><img width='12px' src="https://cdn-icons-png.flaticon.com/128/2948/2948088.png" alt="" />
                                            <span className='px-2'>{data.startDate}</span>
                                        </div>
                                        <div className='col-md-5 col-sm-6'>
                                            Free &nbsp;
                                            <del className='text-muted-2 text-danger'>₹ {data.marketPrice}</del>
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
