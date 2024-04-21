import React, { useEffect } from 'react';
import './style.css' // CSS

import Sidebar from './Sidebar';
import SummarizeCard from '../Dashboard/SummarizeCard';
import AdminGraph from '../Dashboard/AdminGraph';
import StudentPanel from '../Student/StudentPanel';
import TeacherPanel from '../Teacher/TeacherPanel';
import CoursePanel from '../Course/CoursePanel';
import DashboardNav from './DashboardNav';
// import AddCoursePanel from '../Course/AddCoursePanel';
import { useNavigate, useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import UpdateModule from '../Course/Module/UpdateModule';
import Cookies from 'js-cookie';
import AddCoursePanel from '../Course/Course/AddCoursePanel';
import ViewAllCourse from '../../CoursePage/viewAllCourses/ViewAllCourse';



const DashboardPanel = ({ pageName }) => {
    const { id } = useParams();
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const milestone = searchParams.get('milestone');
    const history = useNavigate();
     
     useEffect(()=>{
        const user1 = Cookies.get('yourData')
        if(!user1){
            history('/ninja/auth/login')
        }
        else{
            const  user = JSON.parse(user1);
            if(user?.status!='admin'){
                history('/ninja/unauthorized/page')
            }
        }
     },[])

    return (
        <>
            <div className="wrapper">
                <Sidebar menu={pageName} />

                <div class="main">
                    <main class="content">
                        <div class="container-fluid mx-0 px-0">

                            <div class={`${pageName === 'Dashboard' ? '' : 'd-none'}`}>
                                <DashboardNav title={'Dashboard'} />
                                <div className={`mb-3 px-3 py-0`}>
                                    <SummarizeCard />
                                    <AdminGraph />
                                </div>
                            </div>


                            {/* for the Student */}
                            <div class={`${pageName === 'Student' ? '' : 'd-none'}`}>
                                <DashboardNav title={'Student'} />
                                <div className={`mb-3  px-3 py-0`}>
                                    <StudentPanel />
                                </div>
                            </div>

                            {/* for thr teacher */}
                            <div class={`${pageName === 'Teacher' ? '' : 'd-none'}`}>
                                <DashboardNav title={'Facuilty'} />
                                <div className={`mb-3  px-3 py-0`}>
                                    <TeacherPanel />
                                </div>
                            </div>

                            {/* for the Course */}
                            <div class={`${pageName === 'Course' ? '' : 'd-none'}`}>
                                <DashboardNav title={'Course'} />
                                <div className={`mb-3  px-3 py-0`}>
                                    <CoursePanel />
                                </div>
                            </div>

                            {/* for the Add Course */}
                            <div class={`${pageName === 'AddCourse' ? '' : 'd-none'}`}>
                                <DashboardNav title={'Course'} />
                                <div className={`mb-3  px-3 py-0`}>
                                    <AddCoursePanel />
                                </div>
                            </div>

                            {/* add Course Modules */}
                            <div class={`${pageName === 'AddModule' ? '' : 'd-none'}`}>
                                <DashboardNav title={'Course'} />
                                <div className={`mb-3  px-3 py-0`}>
                                    <ViewAllCourse />
                                </div>
                            </div>

                            {/* for the update course modules */}
                            {
                                pageName == 'updateCourseModule' ? (
                                    <div>
                                        <DashboardNav title={'Course'} />
                                        <div class={`mb-3  px-3 py-0`}>
                                            <UpdateModule id={id} module={milestone} />
                                        </div>
                                    </div>
                                ) :
                                    (
                                    ''
                                )
                            }
                            <div class={`${pageName === 'updateCourseModule' ? '' : 'd-none'}`}>

                            </div>

                            {/* <div class={`${pageName === 'chapterCourseModule' ? '' : 'd-none'}`}>
                                <DashboardNav title={'Course'} />
                                <div className={`mb-3  px-3 py-0`}>
                                    <AddModule />
                                </div>
                            </div> */}

                            {/* <div class={`${pageName === 'updateChapterCourseModule' ? '' : 'd-none'}`}>
                                <DashboardNav title={'Course'} />
                                <div className={`mb-3  px-3 py-0`}>
                                    <UpdateModule />
                                </div>
                            </div> */}

                            {/* <div class={`${pageName === 'addChapterCourseModule' ? '' : 'd-none'}`}>
                                <DashboardNav title={'Course'} />
                                <div className={`mb-3  px-3 py-0`}>
                                    <ViewModule />
                                </div>
                            </div> */}






                        </div>
                    </main>
                </div>
            </div>
        </>
    )
}

export default DashboardPanel