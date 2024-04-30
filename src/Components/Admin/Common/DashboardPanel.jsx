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
import UpdateCourse from '../Course/Course/UpdateCourse';
import ViewCourse from '../Course/Course/ViewCourse';
import AddModule from '../Course/Module/AddModule'
import ViewModule from '../Course/Module/ViewModule';
import AddChapter from '../Course/Chapter/AddChapter';
import ViewChapter from '../Course/Chapter/ViewChapter';
import UpdateChapter from '../Course/Chapter/UpdateChapter'
import AddTopics from '../Course/Topics/AddTopics';
import UpdateTopics from '../Course/Topics/UpdateTopics'



const DashboardPanel = ({ pageName }) => {
    const { id } = useParams();
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const milestone = searchParams.get('milestone');
    const history = useNavigate();

    useEffect(() => {
        const user1 = Cookies.get('yourData')
        if (!user1) {
            history('/ninja/auth/login')
        }
        else {
            const user = JSON.parse(user1);
            if (user?.status != 'admin') {
                history('/ninja/unauthorized/page')
            }
        }
    }, [])

    return (
        <>
            <div className="wrapper">
                <Sidebar menu={pageName} />

                <div class="main">
                    <main class="content">
                        <div class="container-fluid mx-0 px-0">

                            {
                                pageName == 'Dashboard' ? (
                                    <div class={`${pageName === 'Dashboard' ? '' : 'd-none'}`}>
                                        <DashboardNav title={'Dashboard'} />
                                        <div className={`mb-3 px-3 py-0`}>
                                            <SummarizeCard />
                                            <AdminGraph />
                                        </div>
                                    </div>
                                ) : null
                            }



                            {/* for the Student */}
                            {
                                pageName == 'Student' ? (
                                    <div class={`${pageName === 'Student' ? '' : 'd-none'}`}>
                                        <DashboardNav title={'Student'} />
                                        <div className={`mb-3  px-3 py-0`}>
                                            <StudentPanel />
                                        </div>
                                    </div>
                                ) : null
                            }


                            {/* for thr teacher */}
                            {
                                pageName == 'Teacher' ? (
                                    <div class={`${pageName === 'Teacher' ? '' : 'd-none'}`}>
                                        <DashboardNav title={'Facuilty'} />
                                        <div className={`mb-3  px-3 py-0`}>
                                            <TeacherPanel />
                                        </div>
                                    </div>
                                ) : null
                            }


                            {/* for the Course */}
                            {
                                pageName == 'Course' ? (
                                    <div class={`${pageName === 'Course' ? '' : 'd-none'}`}>
                                        <DashboardNav title={'Course'} />
                                        <div className={`mb-3  px-3 py-0`}>
                                            <CoursePanel />
                                        </div>
                                    </div>
                                ) : null
                            }


                            {/* updateCourseModule */}
                            {
                                pageName == 'UpdateCourse' ? (
                                    <div class={`${pageName === 'UpdateCourse' ? '' : 'd-none'}`}>
                                        <DashboardNav title={'Course'} />
                                        <div className={`mb-3  px-3 py-0`}>
                                            <UpdateCourse />
                                        </div>
                                    </div>
                                ) : null
                            }


                            {/* updateCourseModule */}
                            {
                                pageName == 'ViewCourse' ? (
                                    <div class={`${pageName === 'ViewCourse' ? '' : 'd-none'}`}>
                                        <DashboardNav title={'Course'} />
                                        <div className={`mb-3  px-3 py-0`}>
                                            <ViewCourse />
                                        </div>
                                    </div>
                                ) : null
                            }




                            {/* for the Add Course */}
                            {
                                pageName == "AddCourse" ? (
                                    <div class={`${pageName === 'AddCourse' ? '' : 'd-none'}`}>
                                        <DashboardNav title={'Course'} />
                                        <div className={`mb-3  px-3 py-0`}>
                                            <AddCoursePanel />
                                        </div>
                                    </div>
                                ) : null
                            }


                            {/* add Course Modules */}
                            {
                                pageName == 'AddModule' ? (
                                    <div class={`${pageName === 'AddModule' ? '' : 'd-none'}`}>
                                        <DashboardNav title={'Course'} />
                                        <div className={`mb-3  px-3 py-0`}>
                                            <ViewAllCourse />
                                        </div>
                                    </div>
                                ) : null
                            }


                            {/* for the update course modules */}
                            {
                                pageName === 'updateCourseModule' ? (
                                    <div>
                                        <DashboardNav title={'Course'} />
                                        <div className={`mb-3 px-3 py-0`}>
                                            <UpdateModule id={id} module={milestone} />
                                        </div>
                                    </div>
                                ) : null
                            }


                            {
                                pageName == 'AddModule' ? (
                                    <div class={`${pageName === 'AddModule' ? '' : 'd-none'}`}>
                                        <DashboardNav title={'Course'} />
                                        <div className={`mb-3  px-3 py-0`}>
                                            <AddModule />
                                        </div>
                                    </div>
                                ) : null
                            }



                            {
                                pageName === 'chapterCourseModule' ? (
                                    <div>
                                        <DashboardNav title={'Course'} />
                                        <div className={`mb-3 px-3 py-0`}>
                                            <ViewModule id={id} />
                                        </div>
                                    </div>
                                ) : null
                            }


                            {
                                pageName == 'addChapterCourseModule' ? (
                                    <div class={`${pageName === 'addChapterCourseModule' ? '' : 'd-none'}`}>
                                        <DashboardNav title={'Course'} />
                                        <div className={`mb-3  px-3 py-0`}>
                                            <AddChapter />
                                        </div>
                                    </div>
                                ) : null
                            }

                            {
                                pageName == 'viewChapter' ? (
                                    <div class={`${pageName === 'viewChapter' ? '' : 'd-none'}`}>
                                        <DashboardNav title={'Course'} />
                                        <div className={`mb-3  px-3 py-0`}>
                                            <ViewChapter />
                                        </div>
                                    </div>
                                ) : null
                            }

                            {
                                pageName == 'updateChapterCourseModule' ? (
                                    <div class={`${pageName === 'updateChapterCourseModule' ? '' : 'd-none'}`}>
                                        <DashboardNav title={'Course'} />
                                        <div className={`mb-3  px-3 py-0`}>
                                            <UpdateChapter />
                                        </div>
                                    </div>
                                ) : null
                            }


                            {
                                pageName == 'addCourseTopics' ? (
                                    <div class={`${pageName === 'addCourseTopics' ? '' : 'd-none'}`}>
                                        <DashboardNav title={'Course'} />
                                        <div className={`mb-3  px-3 py-0`}>
                                            <AddTopics />
                                        </div>
                                    </div>
                                ) : null
                            }

                            {
                                pageName == 'updateCourseTopics' ? (
                                    <div class={`${pageName === 'updateCourseTopics' ? '' : 'd-none'}`}>
                                        <DashboardNav title={'Course'} />
                                        <div className={`mb-3  px-3 py-0`}>
                                            <UpdateTopics />
                                        </div>
                                    </div>

                                ) : null
                            }














                        </div>
                    </main>
                </div>
            </div>
        </>
    )
}

export default DashboardPanel