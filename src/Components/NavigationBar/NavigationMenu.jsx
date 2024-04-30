import React, { useEffect, useState } from 'react';
import './style.css'; // Import your CSS file
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import Profile from '../HomePage/Profile/Profile';
import axios from 'axios';
import { urlFunction } from '../../App.js'
import Room from '../MyClassRoom/Room.jsx';


function NavigationMenu() {
    const [user, setUser] = useState('');
    const userString = Cookies.get('yourData');

    useEffect(() => {
        const yourDataCookie = Cookies.get('yourData');
        console.log("Cookies", yourDataCookie);
        if (yourDataCookie) {
            proceed(yourDataCookie);
        }
    }, []);

    const proceed = async (yourDataCookie) => {
        const d = JSON.parse(yourDataCookie);
        const userData = await axios.get(urlFunction() + `user/fetchUser/${d.userEmail}`);
        setUser(userData.data);
    }

    console.log(user);

    const [activeItem, setActiveItem] = useState(null); // State to keep track of active item

    // Function to handle click event on nav items
    const handleItemClick = (event, itemName) => {
        if (activeItem === itemName) {
            // If the clicked item is already active, deactivate it
            setActiveItem(null);
        } else {
            // Set the clicked item as active
            setActiveItem(itemName);
        }
    };

    // Function to apply border styles to the item if it's active
    const getActiveStyles = (itemName) => {
        return activeItem === itemName ? {
            border: '3px solid rgb(49, 238, 109)',
            borderTop: '0',
            borderRight: '0',
            borderLeft: '0',
            color: 'black'
        } : {};
    };

    const classRoom = () => {
        <Room user={user} />
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light fixed-top mb-3">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="#">
                        <img className='logos' width='40px' src="https://res.cloudinary.com/dqarshyzz/image/upload/v1710520447/public/image/icon/mps96bl2hb2sjyxrgzyn.png" alt="ninjas" srcSet="" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="item nav-item">
                                <Link className="nav-link" to="/can/home" onClick={(e) => handleItemClick(e, "Home")} style={getActiveStyles("Home")}>
                                    Home
                                </Link>
                            </li>

                            <li className="item nav-item">
                                <Link className="nav-link" to="#" onClick={(e) => handleItemClick(e, "All Jobs")} style={getActiveStyles("All Jobs")}>All Jobs</Link>
                            </li>

                            <li className="item nav-item">
                                <Link className="nav-link" to="/ninja/course" onClick={(e) => handleItemClick(e, "Courses")} style={getActiveStyles("Courses")}>Courses</Link>
                            </li>

                            <li className="item nav-item">
                                <Link className="nav-link" to="#" onClick={(e) => handleItemClick(e, "Blogs")} style={getActiveStyles("Blogs")}>Blogs</Link>
                            </li>
                        </ul>
                        <form class="d-flex" role="search">
                            {
                                user.courses?.length > 0 ? (
                                    <Link to={`/ninja/classRoom/${user._id}`}>
                                        {/* <button type='button' className='mt-2 btn btn-outline-primary me-5 text-dark room'>
                                            My Classroom
                                            <span className='rounded-circle bg-danger' style={{ fontSize: `20px`, marginTop: '-20px !important' }}>{user?.courses.length}</span>
                                        </button> */}

                                        <button type="button" class="mt-2 btn position-relative room  btn-outline-primary text-dark me-5">
                                        My Classroom
                                            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                                {user?.courses.length}
                                               
                                            </span>
                                        </button>
                                    </Link>

                                ) : (<></>)
                            }

                            {
                                user ? (
                                    user?.status=='admin' ? (
                                       <Link to='/ninja/Admin/dashboard' className='text-decoration-none p-2'>
                                            <button className='btn room me-3'>Admin View</button>
                                       </Link>
                                    ):(<></>)
                                ):(<></>)
                            }

                            {user ? (
                                <Profile user={user} />
                            ) : (
                                // Render login button if user does not exist
                                <Link to='/ninja/auth/login'>
                                    <button className='btn  px-4 shadow-none rounded me-5' style={{ backgroundColor: '#f0ed60' }}>Login</button>
                                </Link>
                            )}
                        </form>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default NavigationMenu;