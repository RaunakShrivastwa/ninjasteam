import React, { useEffect, useState } from 'react'
import SideBarMileStone from './SideBarMileStone'
import Banner from './Banner'
import DashBord from './DashBord'
import ListofStone from './ListofStone'
import CourseHeading from './CourseHeading'
import axios from 'axios'
import Modules from './Modules'
import { useParams } from 'react-router-dom';
import {urlFunction} from '../../../App.js';

function LandingDash() {
    const [stone, setStone] = useState();
    const [course, setCourse] = useState([]);
    const [module,setModule] = useState()
    const {st} = useParams();
    useEffect(()=>{
        loadCourse();
    },[stone])

    const loadCourse = async () => {
        try {
            console.log(st);
            const mod = await axios.get(urlFunction()+`course/courseName/${st}`);
            setCourse(mod.data.courseInfo);
        } catch (err) {
            console.log("There is an error", err);
        }
    };
    

    useEffect( ()=>{
        loadModule()
    },[stone])

    const loadModule = async ()=>{
        const body = {
            enrollCourse:course?.name,
            milestone:stone
        }
        try {
            const res = await axios.post('http://localhost:4000/module/single',body);
            setModule(res.data)
        } catch (err) {
            console.log("There is Error ", err);
        }
        
    }
      console.log("Modules ",module);
    return (
        <div className='h-100 position-fixed'>
            <div className="d-flex">
                {/* for the side bar milestones */}
                <div className="col-sm-6 col-md-2 mb-3 mb-sm-0 border-0">
                    <div className="card border-0">
                        <div className="card-body  sidebarmilestones" style={{ background: '#0a2541' }}>
                            <SideBarMileStone />
                        </div>
                        <div className='banner' style={{ background: '#0a2541' }}>
                            <Banner name={course?.name}/>
                        </div>
                        <div className='dashboard' style={{ background: '#0a2541' }}>
                            <DashBord />
                        </div>
                        <div className='listOfStone' style={{ background: '#0a2541' }}>
                            <ListofStone stone={course?.milestone} setStone={setStone} />
                        </div>
                    </div>
                </div>
                <div className="col-sm-12  container-fluied  col-md-10" >
                    <div className="card border-0 d-none d-md-block">
                        <div className="card-body " style={{ background: '#2d3668' }}>
                            {course !== null ? (
                                <CourseHeading mods={module} course={course}/> 
                            ) : (
                                <CourseHeading name={'Loading'} />
                            )}
                        </div>
                    </div>
                    <Modules module={module}  course={course}/>
                </div>

            </div>
        </div>
    )
}

export default LandingDash