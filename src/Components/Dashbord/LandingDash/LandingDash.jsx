import React, { useEffect, useState } from 'react'
import SideBarMileStone from './SideBarMileStone'
import Banner from './Banner'
import DashBord from './DashBord'
import ListofStone from './ListofStone'
import CourseHeading from './CourseHeading'
import axios from 'axios'
import Modules from './Modules'

function LandingDash() {
    const [stone, setStone] = useState(1);
    const [course, setCourse] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/course/getSingle/${stone}`);
                setCourse(response.data);
            } catch (error) {
                console.error("Error fetching course data:", error);
                // Handle error state or display an error message
            }
        };

        fetchData();
    }, [stone]);

    console.log(course);
    return (
        <div className='h-100'>
            <div className="d-flex">
                {/* for the side bar milestones */}
                <div className="col-sm-6 col-md-2 mb-3 mb-sm-0 border-0">
                    <div className="card border-0">
                        <div className="card-body  sidebarmilestones" style={{ background: '#0a2541' }}>
                            <SideBarMileStone />
                        </div>
                        <div className='banner' style={{ background: '#0a2541' }}>
                            <Banner />
                        </div>
                        <div className='dashboard' style={{ background: '#0a2541' }}>
                            <DashBord />
                        </div>
                        <div className='listOfStone' style={{ background: '#0a2541' }}>
                            <ListofStone setStone={setStone} />
                        </div>
                    </div>
                </div>
                <div className="col-sm-12  container-fluied  col-md-10" >
                    <div className="card border-0 d-none d-md-block">
                        <div className="card-body " style={{ background: '#2d3668' }}>
                            {course !== null ? (
                                course.length > 0 ? <CourseHeading name={course[0]?.name} /> : <CourseHeading name={'No Data'} />
                            ) : (
                                <CourseHeading name={'Loading'} />
                            )}
                        </div>
                    </div>
                    <Modules name={'Loading'} />
                </div>

            </div>
        </div>
    )
}

export default LandingDash