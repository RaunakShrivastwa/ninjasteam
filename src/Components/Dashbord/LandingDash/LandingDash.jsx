import React, { useEffect, useState } from 'react'
import SideBarMileStone from './SideBarMileStone'
import Banner from './Banner'
import DashBord from './DashBord'
import ListofStone from './ListofStone'
import CourseHeading from './CourseHeading'
import axios from 'axios'
import Modules from './Modules'
import { Link, useParams } from 'react-router-dom';
import { urlFunction } from '../../../App.js';
import Cookie from 'js-cookie'

function LandingDash() {
    const [stone, setStone] = useState();
    const [course, setCourse] = useState([]);
    const [module, setModule] = useState()
    const { st } = useParams();
    useEffect(() => {
        loadCourse();
    }, [stone])

    const loadCourse = async () => {
        try {
            console.log(st);
            const mod = await axios.get(urlFunction() + `course/courseName/${st}`);
            setCourse(mod.data.courseInfo);
        } catch (err) {
            console.log("There is an error", err);
        }
    };


    useEffect(() => {
        loadModule()
    }, [stone])

    const loadModule = async () => {
        const body = {
            enrollCourse: course?.name,
            milestone: stone
        }
        try {
            const res = await axios.post(urlFunction()+'module/single', body);
            setModule(res.data)
        } catch (err) {
            console.log("There is Error ", err);
        }

    }
    const cM = Cookie.get('cM');
            if(cM){
                console.log("exist");
                Cookie.remove('cM');
                Cookie.set('cM', JSON.stringify(module), { expires: 3 });
            }else{
                console.log("not exist");
                Cookie.set('cM', JSON.stringify(module), { expires: 3 });
            }
    return (
        <>
            <nav class="navbar d-md-none d-sm-block navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <Link className="navbar-brand" to="#">
                        <img className='logos' width='40px' src="/image/icon/ninja.png" alt="" srcSet="" />
                    </Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">

                            <div className="card border-0">
                                <div className="card-body  sidebarmilestones" style={{ background: '#0a2541' }}>
                                    <SideBarMileStone />
                                </div>
                                <div className='banner' style={{ background: '#0a2541' }}>
                                    <Banner name={course?.name} />
                                </div>
                                <div className='dashboard'  style={{ background: '#0a2541' }}>
                                    <DashBord setStone={setStone} />
                                </div>
                                <div className='listOfStone' style={{ background: '#0a2541' }}>
                                    <ListofStone stone={course?.milestone} setStone={setStone} />
                                </div>
                            </div>
                        </ul>
                    </div>
                </div>
            </nav>

            <div className=' h-100 position-fixed'>
                <div className="d-flex">
                    {/* for the side bar milestones */}
                    <div className="col-sm-6 d-none d-sm-none d-md-block col-md-2 mb-3 mb-sm-0 border-0">
                        <div className="card border-0">
                            <div className="card-body  sidebarmilestones" style={{ background: '#0a2541' }}>
                                <SideBarMileStone />
                            </div>
                            <div className='banner' style={{ background: '#0a2541' }}>
                                <Banner name={course?.name} />
                            </div>
                            <div className='dashboard' style={{ background: '#0a2541' }}>
                                <DashBord />
                            </div>
                            <div className='listOfStone' style={{ background: '#0a2541' }}>
                                <ListofStone stone={course?.milestone} setStone={setStone} />
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-12 container-fluied col-md-10" >
                        <div className="card border-0 d-none d-md-block">
                            <div className="card-body " style={{ background: '#2d3668' }}>
                                {course !== null ? (
                                    <CourseHeading mods={module} course={course} />
                                ) : (
                                    <CourseHeading name={'Loading'} />
                                )}
                            </div>
                        </div>
                        <Modules module={module} setStone={setStone} course={course} />
                    </div>

                </div>
            </div>
        </>
    )
}

export default LandingDash