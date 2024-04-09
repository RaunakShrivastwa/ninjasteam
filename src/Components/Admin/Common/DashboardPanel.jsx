import React from 'react';
import './style.css' // CSS

import Sidebar from './Sidebar';
import SummarizeCard from '../Dashboard/SummarizeCard';
import AdminGraph from '../Dashboard/AdminGraph';
import StudentPanel from '../Student/StudentPanel';
import TeacherPanel from '../Teacher/TeacherPanel';
import CoursePanel from '../Course/CoursePanel';
import DashboardNav from './DashboardNav';


const DashboardPanel = ({ pageName }) => {
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
                        </div>
                    </main>
                </div>
            </div>
        </>
    )
}

export default DashboardPanel