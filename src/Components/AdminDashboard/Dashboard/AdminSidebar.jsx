import React, { useState } from 'react';
import AdminSidebarList from './AdminSidebarList';

const AdminSidebar = () => {
    const [expanded, setExpanded] = useState(false);

    const toggleSidebar = () => {
        setExpanded(!expanded);
    };

    return (
        <>
            <aside id="sidebar" className={`col-md-3 d-none d-md-block ${expanded ? "expand" : ""}`}>
                <div class="d-flex">
                    <button class="toggle-btn" onClick={toggleSidebar} type="button">
                        <i class="fs-5 fa-solid fa-bars text-light ms-1"></i>
                    </button>
                    <div class="sidebar-logo">
                        <a href="#">Our Ninja</a>
                    </div>
                </div>
                <AdminSidebarList />
            </aside>
        </>
    )
}

export default AdminSidebar