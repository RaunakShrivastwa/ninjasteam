import React, { useEffect, useState } from 'react'
import NavigationMenu from '../../NavigationBar/NavigationMenu'
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { urlFunction } from '../../../App.js';
import Nav from './Nav.jsx';

function LearningBody() {

    const [subtopic, setSubTopics] = useState([]);
    const { name } = useParams();
    const [selectedSubitem, setSelectedSubitem] = useState(0);

    useEffect(() => {
        loadTopics();
    }, [])

    const loadTopics = async () => {
        try {
            const topic = await axios.get(urlFunction() + `subtopic/getSingle/${name}`);
            setSubTopics(topic.data);
        } catch (err) {
            console.log("There is Error ", err);
        }
    }

    const handleSubitemClick = (index) => {
        setSelectedSubitem(index);
    }

    return (
        <>
            <Nav />
            <div class="row p-0 m-0">
                {/* for the Subtopics */}
                <div className='col-md-4 p-2 g-0 col-sm-12 overflow-auto'>
                    {/* for the small device */}
                    <button style={{zIndex:'1000'}} class="btn btn-primary d-md-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">Enable body scrolling</button>
                    <div class="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
                        <div class="offcanvas-header">
                            <h5 class="offcanvas-title" id="offcanvasScrollingLabel">Offcanvas with body scrolling</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body">
                            <p>Try scrolling the rest of the page to see this option in action.</p>
                        </div>
                    </div>

                     {/* for the large device */}
                     <div  className='d-none d-md-block'>
                     {
                        subtopic.map((data, index) => (
                            <div className={`card mb-3 shadow-lg form-control ${selectedSubitem === index ? 'text-success border-3 border-primary' : ''}`} style={{ cursor: 'pointer' }} onClick={() => handleSubitemClick(index)} key={index}>
                                <div className="card-body h5">
                                    {data?.TopicName}
                                </div>
                            </div>
                        ))
                    }
                     </div>
                </div>

                {/* for the video */}
                <div className="col-md-8 p-0 col-sm-12 bg-success " style={{ height: '85vh' }}>
                    {/* Content of Video Section */}
                    <div className="video-container">
                        <iframe
                            className="video-content"
                            src={subtopic[selectedSubitem]?.video_URL + '?enablejsapi=1'}
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                            style={{ width: '100%', height: '100%' }}
                        ></iframe>
                    </div>

                </div>
            </div>


            {/* for the footer */}
            <div className='d-flex justify-content-end align-items-end d-none d-sm-block' style={{ position: 'absolute', bottom: '0', right: '0', width: '100%' }}>
                {/* NavBar at the bottom right corner */}
                <ul className="nav ng nav-pills nav-fill mt-1 shadow d-flex justify-content-around align-items-center" style={{ background: 'white !important', width: '100%' }}>
                    <li className="nav-item" title='View Documentation'>
                        <Link className="nav-link  shadow" aria-disabled="true"><strong className='text-white'>Documentation</strong>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" href="#"><img width='30px' title='Add Favorite' src="https://cdn-icons-png.flaticon.com/128/833/833472.png" alt="" /></Link>
                    </li>
                    <li className="nav-item" title='Previous Lecture'>
                        <Link className="nav-link  shadow" aria-disabled="true"><strong className='text-white'>Prev</strong></Link>
                    </li>
                    <li className="nav-item" title='Skip'>
                        <Link className="nav-link " aria-disabled="true">
                            <button className='btn btn-danger'>Mark As Read</button>
                        </Link>
                    </li>
                    <li className="nav-item" title='Next Lecture'>
                        <Link className="nav-link  shadow" aria-disabled="true"><strong title='Next Lecture' className='text-white'>Next</strong></Link>
                    </li>
                </ul>
            </div>




        </>
    )
}

export default LearningBody
