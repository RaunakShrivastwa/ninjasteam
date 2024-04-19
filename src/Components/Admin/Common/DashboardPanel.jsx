import React from 'react';
import './style.css' // CSS

import Sidebar from './Sidebar';
import SummarizeCard from '../Dashboard/SummarizeCard';
import AdminGraph from '../Dashboard/AdminGraph';
import StudentPanel from '../Student/StudentPanel';
import TeacherPanel from '../Teacher/TeacherPanel';
import CoursePanel from '../Course/CoursePanel';
import DashboardNav from './DashboardNav';
import AddCoursePanel from '../Course/Course/AddCoursePanel';
import UpdateModule from '../Course/Module/UpdateModule';
import AddModule from '../Course/Module/AddModule';
import UpdateChapter from '../Course/Chapter/UpdateChapter';
import AddChapter from '../Course/Chapter/AddChapter';
import ViewChapter from '../Course/Chapter/ViewChapter';
import UpdateTopics from '../Course/Topics/UpdateTopics';
import ViewTopics from '../Course/Topics/ViewTopics';
import AddTopics from '../Course/Topics/AddTopics'
import ViewModule from '../Course/Module/ViewModule';
import ViewCourse from '../Course/Course/ViewCourse';
import UpdateCourse from '../Course/Course/UpdateCourse';

const DashboardPanel = ({ pageName }) => {
    return (
        <>
            <div className="wrapper">
                <Sidebar menu={pageName} />

                <div className="main">
                    <main className="content">
                        <div className="container-fluid mx-0 px-0">
                            
                            {pageName == 'Dashboard' ? <>
                                <DashboardNav title={'Dashboard'} />
                                <div className={`mb-3 px-3 py-0`}>
                                    <SummarizeCard />
                                    <AdminGraph />
                                </div>
                            </> : ''}

                            {pageName == 'Student' ? <>
                                <DashboardNav title={'Student'} />
                                <div className={`mb-3  px-3 py-0`}>
                                    <StudentPanel />
                                </div>
                            </> : ''}

                            {pageName == 'Teacher' ? <>
                                <DashboardNav title={'Facuilty'} />
                                <div className={`mb-3  px-3 py-0`}>
                                    <TeacherPanel />
                                </div>
                            </> : ''}

                            {/* Course */}
                            {pageName == 'Course' ? <>
                                <DashboardNav title={'Course'} />
                                <div className={`mb-3  px-3 py-0`}>
                                    <CoursePanel />
                                </div>
                            </> : ''}

                            {/* Add Course */}
                            {pageName == 'AddCourse' ? <>
                                <DashboardNav title={'Course'} />
                                <div className={`mb-3  px-3 py-0`}>
                                    <AddCoursePanel />
                                </div>
                            </> : ''}

                            {/* Add Course */}
                            {pageName == 'ViewCourse' ? <>
                                <DashboardNav title={'Course'} />
                                <div className={`mb-3  px-3 py-0`}>
                                    <ViewCourse />
                                </div>
                            </> : ''}

                            {/* Update Course */}
                            {pageName == 'UpdateCourse' ? <>
                                <DashboardNav title={'Course'} />
                                <div className={`mb-3  px-3 py-0`}>
                                    <UpdateCourse />
                                </div>
                            </> : ''}

                            {/* Add Module */}
                            {pageName == 'AddModule' ? <>
                                <DashboardNav title={'Course'} />
                                <div className={`mb-3  px-3 py-0`}>
                                    <AddModule />
                                </div>
                            </> : ''}

                            {/* Update Module */}
                            {pageName == 'updateCourseModule' ? <>
                                <DashboardNav title={'Course'} />
                                <div className={`mb-3  px-3 py-0`}>
                                    <UpdateModule />
                                </div>
                            </> : ''}

                            {/* View Module */}
                            {pageName == 'chapterCourseModule' ? <>
                                <DashboardNav title={'Course'} />
                                <div className={`mb-3  px-3 py-0`}>
                                    <ViewModule />
                                </div>
                            </> : ''}

                            {/* Update Chapter */}
                            {pageName == 'updateChapterCourseModule' ? <>
                                <DashboardNav title={'Course'} />
                                <div className={`mb-3  px-3 py-0`}>
                                    <UpdateChapter />
                                </div>
                            </> : ''}

                            {/* Add Chapter */}
                            {pageName == 'addChapterCourseModule' ? <>
                                <DashboardNav title={'Course'} />
                                <div className={`mb-3  px-3 py-0`}>
                                    <AddChapter />
                                </div>
                            </> : ''}

                            {/* view Chapter */}
                            {pageName == 'chapterCourse' ? <>
                                <DashboardNav title={'Course'} />
                                <div className={`mb-3  px-3 py-0`}>
                                    <ViewChapter />
                                </div>
                            </> : ''}

                            {/* Update Topics */}
                            {pageName == 'updateCourseTopics' ? <>
                                <DashboardNav title={'Course'} />
                                <div className={`mb-3  px-3 py-0`}>
                                    <UpdateTopics />
                                </div>
                            </> : ''}

                            {/* view Topics */}
                            {pageName == 'viewCourseTopics' ? <>
                                <DashboardNav title={'Course'} />
                                <div className={`mb-3  px-3 py-0`}>
                                    <ViewTopics />
                                </div>
                            </> : ''}

                            {/* Add Topics */}
                            {pageName == 'addCourseTopics' ? <>
                                <DashboardNav title={'Course'} />
                                <div className={`mb-3  px-3 py-0`}>
                                    <AddTopics />
                                </div>
                            </> : ''}
                        </div>
                    </main>
                </div>
            </div>
        </>
    )
}

export default DashboardPanel