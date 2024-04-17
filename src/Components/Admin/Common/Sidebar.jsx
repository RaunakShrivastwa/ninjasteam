import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({menu}) => {
    return (
        <>
            <aside id="sidebar">
                <div className="d-flex">
                    <button className="toggle-btn" type="button">
                        <img src="/Image/icon/ninja.png" alt="Website Logo" style={{ width: '30px' }} />
                    </button>
                </div>
                <ul className="sidebar-nav">
                    <li className={`sidebar-item ${menu === 'Dashboard' ? 'border border-4 border-danger border-top-0 border-end-0 border-bottom-0': ''}`} data-bs-toggle="tooltip" data-bs-placement="right" title="Dashboard">
                        <Link to="/ninja/Admin/dashboard" className="sidebar-link">
                            <i className="lni lni-grid-alt"></i>
                        </Link>
                    </li>

                    <li className={`sidebar-item ${menu === 'Student' ? 'border border-4 border-danger border-top-0 border-end-0 border-bottom-0': ''}`} data-bs-toggle="tooltip" data-bs-placement="right" title="Student">
                        <Link to="/ninja/Admin/student" className="sidebar-link">
                            <i className="lni lni-user"></i>
                        </Link>
                    </li>

                    <li className={`sidebar-item ${menu === 'Teacher' ? 'border border-4 border-danger border-top-0 border-end-0 border-bottom-0': ''}`} data-bs-toggle="tooltip" data-bs-placement="right" title="Teacher">
                        <Link to="/ninja/Admin/teacher" className="sidebar-link">
                            <i className="lni lni-blackboard"></i>
                        </Link>
                    </li>

                    <li className={`sidebar-item ${menu === 'Course' ? 'border border-2 border-top-0 border-end-0 border-bottom-0 border-danger': ''}`} data-bs-toggle="tooltip" data-bs-placement="right" title="Course">
                        <Link to="/ninja/Admin/course" className="sidebar-link">
                            <i className="lni lni-book"></i>
                        </Link>
                    </li>

                    <li className={`sidebar-item ${menu === '' ? 'border border-2 border-top-0 border-end-0 border-bottom-0 border-danger': ''}`} data-bs-toggle="tooltip" data-bs-placement="right" title="Income">
                        <Link to="/income" className="sidebar-link">
                            <i className="lni lni-wallet"></i>
                        </Link>
                    </li>

                    <li className={`sidebar-item ${menu === '' ? 'border border-2 border-top-0 border-danger border-end-0 border-bottom-0': ''}`} data-bs-toggle="tooltip" data-bs-placement="right" title="Notification">
                        <Link to="/notifications" className="sidebar-link">
                            <i className="lni lni-popup"></i>
                        </Link>
                    </li>

                    <li className={`sidebar-item ${menu === '' ? 'border border-2 border-top-0 border-danger border-end-0 border-bottom-0': ''}`} data-bs-toggle="tooltip" data-bs-placement="right" title="Setting">
                        <Link to="/settings" className="sidebar-link">
                            <i className="lni lni-cog"></i>
                        </Link>
                    </li>
                </ul>

                <div className="sidebar-footer">
                    <Link to="/logout" className="sidebar-link" data-bs-toggle="tooltip" data-bs-placement="right" title="Logout">
                        <i className="lni lni-exit"></i>
                    </Link>
                </div>
            </aside>
        </>
    );
}

export default Sidebar;