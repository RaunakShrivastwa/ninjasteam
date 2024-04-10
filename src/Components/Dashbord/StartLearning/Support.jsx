import React from 'react'
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SupportForm from './SupportForm';

function Support() {

    const notify = () => toast.success(<SupportForm />, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        autoClose: false,
        icon: <img width='30px' src="" alt="" />

    });

    return (
        <>
            <img width='70px' className='p-3' type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop" src="https://cdn-icons-png.flaticon.com/128/1660/1660165.png" alt="Navbar Toggler Image" />

            <div class="offcanvas offcanvas-top" tabindex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
                <div class="offcanvas-header">
                    <h5 id="offcanvasTopLabel">Help/Support</h5>
                    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <div className='d-flex justify-content-end align-items-end' style={{ bottom: '0', right: '0', width: '100%' }}>

                        <ul className="nav ng nav-pills nav-fill rounded  shadow d-flex justify-content-around align-items-center" style={{ background: 'white !important', width: '100%' }}>

                            <li className="nav-item">
                               <Link className='nav-link text-white' onClick={notify}>Support</Link>
                                    <ToastContainer />
                            </li>
                            <li className="nav-item" title='Previous Lecture'>
                                <Link className="nav-link  text-light" aria-disabled="true">Ask/Doubt</Link>
                            </li>
                            <li className="nav-item" title='Take Your Code'>
                                <Link className="nav-link text-light" aria-disabled="true">
                                    CodeStudio
                                </Link>
                            </li>
                            <li className="nav-item" title='Rate Lecture'>
                                <Link className="nav-link" aria-disabled="true">
                                    <button class="btn room" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Feedback</button>

                                </Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Support