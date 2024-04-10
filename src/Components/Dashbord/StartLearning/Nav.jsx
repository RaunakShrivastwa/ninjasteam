import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import '../../NavigationBar/style.css'
import Feedback from './Feedback';
import Support from './Support';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SupportForm from './SupportForm';

function Nav({ name, mentor, subTopic, setSelectedSubitem, cM }) {
    const [user, setUser] = useState();
    const [item, setItem] = useState(0);

    useEffect(() => {
        setUser(JSON.parse(Cookies.get('yourData')))
    }, []);

    const handleSubitemClick = (index) => {
        setItem(index)
        setSelectedSubitem(index);
    }

    const notify = () => toast.success(<SupportForm />, {
        position: "top-center",
        autoClose: false, // Set autoClose to false
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        icon: <img width='30px' src="" alt="" />,
        closeButton: false,
        style: { width: '400px' }

    });
    

    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <Link class="navbar-brand" to={`/ninja/landing/dash/${cM}`}>
                        <img width="50px" className='rounded-circle' src={user?.profile} alt="" />
                    </Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent1" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    {/* for the subtopic */}
                    <div class="collapse navbar-collapse" id="navbarSupportedContent1">

                        {/* for the large seceen */}
                        <div className='d-flex justify-content-end align-items-end d-none d-md-block d-sm-none' style={{ bottom: '0', right: '0', width: '100%' }}>

                            <ul className="nav ng nav-pills nav-fill rounded  shadow d-flex justify-content-around align-items-center" style={{ background: 'white !important', width: '100%' }}>
                                <li className="nav-item" title='View Documentation'>
                                    <strong className='nameTopic text-light'>{name}</strong>
                                </li>
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

                        {/* navbar for the small device */}
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0  d-sm-block d-md-none">
                            <div className='col-md-4 p-2 g-0 col-sm-12 overflow-auto'>
                                <Support />
                                <div className=''>
                                    {
                                        subTopic?.map((data, index) => (
                                            <div className={`card mb-3 shadow-lg form-control  ${item === index ? 'text-success border-3 border-primary' : ''}`} style={{ cursor: 'pointer' }} onClick={() => handleSubitemClick(index)} key={index}>
                                                <div className="card-body h5">
                                                    {data?.TopicName}
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </ul>

                    </div>




                </div>


            </nav>

            {/* for the feedback */}
            <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div class="offcanvas-header">
                    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    < Feedback mentor={mentor} />
                </div>
            </div>
        </>

    )
}

export default Nav