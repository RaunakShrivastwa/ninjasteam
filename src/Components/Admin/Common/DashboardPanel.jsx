import React from 'react';
import './style.css' // CSS

import Sidebar from './Sidebar';
import SummarizeCard from '../Dashboard/SummarizeCard';
import AdminGraph from '../Dashboard/AdminGraph';
import StudentPanel from '../Student/StudentPanel';
import TeacherPanel from '../Teacher/TeacherPanel';
import CoursePanel from '../Course/CoursePanel';
import DashboardNav from './DashboardNav';
import AddCoursePanel from '../Course/AddCoursePanel';
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import UpdateModule from '../Course/Module/UpdateModule';
import AddCourseMilestone from '../Course/Module/AddCourseMilestone';
import CourseChapter from '../Course/Course/CourseChapter'
import UpdateChapter from '../Course/Course/UpdateChapter';
import AddChapter from '../Course/Course/AddChapter';
import CourseChapterTopics from '../Course/Chapter/CourseChapterTopics';


const DashboardPanel = ({ pageName }) => {
    const { id } = useParams();
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const milestone = searchParams.get('milestone');
    const course = searchParams.get('course');

    console.log("param id ", id);

    return (
        <>
            <div class="wrapper">
                <Sidebar menu={pageName} />

                <div class="main">
                    <main class="content">
                        <div class="container-fluid mx-0 px-0">
                            <div class={`${pageName === 'Dashboard' ? '' : 'd-none'}`}>
                                <DashboardNav title={'Dashboard'} />
                                <div class={`mb-3 px-3 py-0`}>
                                    <SummarizeCard />
                                    <AdminGraph />
                                </div>
                            </div>

                            <div class={`${pageName === 'Student' ? '' : 'd-none'}`}>
                                <DashboardNav title={'Student'} />
                                <div class={`mb-3  px-3 py-0`}>
                                    <StudentPanel />
                                </div>
                            </div>

                            <div class={`${pageName === 'Teacher' ? '' : 'd-none'}`}>
                                <DashboardNav title={'Facuilty'} />
                                <div class={`mb-3  px-3 py-0`}>
                                    <TeacherPanel />
                                </div>
                            </div>

                            <div class={`${pageName === 'Course' ? '' : 'd-none'}`}>
                                <DashboardNav title={'Course'} />
                                <div class={`mb-3  px-3 py-0`}>
                                    <CoursePanel />
                                </div>
                            </div>

                            <div class={`${pageName === 'AddCourse' ? '' : 'd-none'}`}>
                                <DashboardNav title={'Course'} />
                                <div class={`mb-3  px-3 py-0`}>
                                    <AddCoursePanel />
                                </div>
                            </div>

                            <div class={`${pageName === 'AddModule' ? '' : 'd-none'}`}>
                                <DashboardNav title={'Course'} />
                                <div class={`mb-3  px-3 py-0`}>
                                    <AddCourseMilestone />
                                </div>
                            </div>

                            <div class={`${pageName === 'updateCourseModule' ? '' : 'd-none'}`}>
                                <DashboardNav title={'Course'} />
                                <div class={`mb-3  px-3 py-0`}>
                                    <UpdateModule id={id} module={milestone} />
                                </div>
                            </div>

                            <div class={`${pageName === 'chapterCourseModule' ? '' : 'd-none'}`}>
                                <DashboardNav title={'Course'} />
                                <div class={`mb-3  px-3 py-0`}>
                                    <CourseChapter id={id} />
                                </div>
                            </div>

                            <div class={`${pageName === 'updateChapterCourseModule' ? '' : 'd-none'}`}>
                                <DashboardNav title={'Course'} />
                                <div class={`mb-3  px-3 py-0`}>
                                    <UpdateChapter id={id} course={course} />
                                </div>
                            </div>

                            <div class={`${pageName === 'addChapterCourseModule' ? '' : 'd-none'}`}>
                                <DashboardNav title={'Course'} />
                                <div class={`mb-3  px-3 py-0`}>
                                    <AddChapter id={id} course={course} />
                                </div>
                            </div>

                            <div class={`${pageName === 'chapterCourse' ? '' : 'd-none'}`}>
                                <DashboardNav title={'Course'} />
                                <div class={`mb-3  px-3 py-0`}>
                                    <CourseChapterTopics id={id} course={course} />
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </>
    )
}

export default DashboardPanel