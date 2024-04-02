import React from 'react';
import './Admin.css';
import SmallScreeSidebar from './SmallScreeSidebar';
import AdminSidebar from './AdminSidebar';
import AdminSummarizeCard from './AdminSummarizeCard';
import AdminGraph from './AdminGraph';
import AdminStudent from '../Student/AdminStudent';

const AdminHome = () => {
    return (
        <>
            <div class="wrapper">
                <AdminSidebar />

                <div class="main">
                    <main class="content px-2 py-2">
                        <div class="container-fluid">
                            {/* <div class="mb-3">
                                <SmallScreeSidebar heading="Dashboard" />
                                <AdminSummarizeCard />
                                <AdminGraph />
                            </div> */}


                            <div class="mb-3 ">
                                <SmallScreeSidebar heading="Student" />
                                <AdminStudent />
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </>
    )
}

export default AdminHome