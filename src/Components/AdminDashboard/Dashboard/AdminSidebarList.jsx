import React from 'react'

const AdminSidebarList = () => {
    return (
        <>
            <ul class="sidebar-nav">
                <li class="sidebar-item">
                    <a href="#" class="sidebar-link fs-6">
                        <i class="me-2 fa-solid fa-gauge"></i>
                        <span>Dashboard</span>
                    </a>
                </li>
                <li class="sidebar-item">
                    <a href="#" class="sidebar-link fs-6">
                        <i class="me-2 fa-solid fa-user"></i>
                        <span>User</span>
                    </a>
                </li>
                <li class="sidebar-item">
                    <a href="#" class="sidebar-link fs-6">
                        <i class="me-2 fa-solid fa-chalkboard-user"></i>
                        <span>Teacher</span>
                    </a>
                </li>
                <li class="sidebar-item">
                    <a href="#" class="sidebar-link fs-6">
                        <i class="me-2 fa-solid fa-book"></i>
                        <span>Course</span>
                    </a>
                </li>
                <li class="sidebar-item">
                    <a href="#" class="sidebar-link fs-6">
                        <i class="me-2 fa-solid fa-wallet"></i>
                        <span>Income</span>
                    </a>
                </li>
                <li class="sidebar-item">
                    <a href="#" class="sidebar-link fs-6">
                        <i class="me-2 fa-solid fa-bell"></i>
                        <span>Notification</span>
                    </a>
                </li>
                <li class="sidebar-item">
                    <a href="#" class="sidebar-link fs-6">
                        <i class="me-2 fa-solid fa-gear"></i>
                        <span>Setting</span>
                    </a>
                </li>
            </ul>
            <div class="sidebar-footer">
                <a href="#" class="sidebar-link fs-6">
                    <i class="me-2 fa-solid fa-power-off"></i>
                    <span>Logout</span>
                </a>
            </div>
        </>
    )
}

export default AdminSidebarList