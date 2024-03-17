import React, { useState } from 'react';
import './style.css'; // Import your CSS file
import { Link } from 'react-router-dom';

function NavigationMenu() {
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

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-danger fixed-top mb-3">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="#">
                        <img className='logos' width='40px' src="/image/icon/ninja.png" alt="" srcset="" />
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
                            {/* for the All Jobs */}
                            <li className="item nav-item">
                                <Link className="nav-link" to="#" onClick={(e) => handleItemClick(e, "All Jobs")} style={getActiveStyles("All Jobs")}>All Jobs</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/ninja/course" onClick={(e) => handleItemClick(e, "Courses")} style={getActiveStyles("Courses")}>Courses</Link>
                            </li> 

                            <li className="item nav-item">
                                <Link className="nav-link" to="/can/about" onClick={(e) => handleItemClick(e, "About Us")} style={getActiveStyles("About Us")}>About Us</Link>
                            </li>

                            <li className="item nav-item">
                                <Link className="nav-link" to="#" onClick={(e) => handleItemClick(e, "Blogs")} style={getActiveStyles("Blogs")}>Blogs</Link>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <Link to='/ninja/auth/login'><button className='btn  px-4 shadow-none rounded me-5' style={{backgroundColor:'#f0ed60'}}>Login</button></Link>
                            <img width='30px' style={{ borderRadius: '50%' }} src="https://res.cloudinary.com/dzhl7dmsp/image/upload/v1709408497/rqvcmfmiujmk8xs3iwkt.jpg" alt="" srcset="" />
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavigationMenu;