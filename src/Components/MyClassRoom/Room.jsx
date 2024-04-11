import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { urlFunction } from '../../App.js'
import NavigationMenu from '../NavigationBar/NavigationMenu.jsx';
import './Room.css'

function Room() {
    const [course, setCourse] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        loadUserData();
    }, []);

    const loadUserData = async () => {
        try {
            const temp = await axios.get(urlFunction() + `user/all/${id}`);
            setCourse(temp.data.courses);
        } catch (err) {
            return console.log("There is error ", err);
        }
    }

    console.log(course);
    return (
        <>
            <NavigationMenu />
            <div className='p-5 mt-5 mb-3' style={{ height: '100vh' }}>
                <strong>Enrolled Courses</strong>
                <div class="row row-cols-1 row-cols-md-4 g-4 mt-2">
                    {
                        course.map((data) => (
                            <div class="col">
                                <div class="card h-100">
                                    <img src={data?.courseImage} class="" style={{height:'30vh'}} alt="..." />
                                    <div class="card-body shadow-lg">
                                        <h5 class="card-title">{data?.name}</h5>
                                        <p class="card-text">{data?.description}</p>
                                        <Link to={`/ninja/landing/dash/${data?.name}`}><button type='button' className='btn btn-primary ClassRoom text-dark'>Classroom</button></Link>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Room