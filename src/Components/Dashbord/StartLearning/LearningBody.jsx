import React, { useEffect, useState } from 'react'
import NavigationMenu from '../../NavigationBar/NavigationMenu'
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { urlFunction } from '../../../App.js';
import Nav from './Nav.jsx';
import Cookie from 'js-cookie'

function LearningBody() {

    const [subtopic, setSubTopics] = useState([]);
    const [mentor, setMentor] = useState()
    const { name } = useParams();
    const [selectedSubitem, setSelectedSubitem] = useState(0);
    const [user, setUser] = useState();


    const cM = JSON.parse(Cookie.get('cM'))
    useEffect(() => {
        loadUser();
    }, []);

    const loadUser = async () => {
        const user = JSON.parse(await Cookie.get('yourData'))
        try {
            const userData = await axios.get(urlFunction() + `user/fetchUser/${user.userEmail}`);
            setUser(userData.data)
        } catch (err) {
            return console.log("There is Error ", err);
        }
    }

    useEffect(() => {
        loadTopics();
    }, [])

    const loadTopics = async () => {
        try {
            const topic = await axios.get(urlFunction() + `subtopic/getSingle/${name}`);
            setSubTopics(topic.data.subTopic);
            setMentor(topic.data.Mentor)
        } catch (err) {
            console.log("There is Error ", err);
        }
    }

    const handleSubitemClick = (index) => {
        setSelectedSubitem(index);
    }

    const isSubtopicWatched = () => {
        if (user && user.subtopic) {
            return user.subtopic.includes(subtopic[selectedSubitem]?._id);
        }
        return false;
    }

    const setStatus = async () => {
        const body = {
            userId: user._id,
            subTopic: subtopic[selectedSubitem]._id
        };
        console.log("set Body ", body);
        try {
            const setItem = await axios.post(urlFunction() + 'user/set/topic/status', body);
            loadUser()
        } catch (err) {
            return console.log("There is Error ", err);
        }
    }

    return (
        <>
            <Nav name={subtopic[0]?.Chapter} mentor={mentor} subTopic={subtopic} setSelectedSubitem={setSelectedSubitem} cM={cM?.enrollCourse} />
            <div class="row p-0 m-0">
                {/* for the Subtopics */}
                <div className='col-md-4 p-2 g-0 col-sm-12 overflow-auto'>

                    {/* for the large device */}
                    <div className='d-none d-md-block'>
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
                        {
                            subtopic[selectedSubitem]?.video_URL ? (
                                <iframe
                                    className="video-content"
                                    src={subtopic[selectedSubitem]?.video_URL + '?enablejsapi=1'}
                                    title="YouTube video player"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                    style={{ width: '100%', height: '100%' }}
                                ></iframe>
                            )
                                : (
                                    <div className='d-flex  h-100 justify-content-around align-items-center'>
                                         <strong className='room p-2 rounded'>Video has not been uploaded</strong> 
                                    </div>
                                )
                        }

                    </div>

                </div>
            </div>


            {/* for the footer */}
            <div className='d-flex justify-content-end align-items-end d-none d-md-block' style={{ position: 'absolute', bottom: '0', right: '0', width: '100%' }}>
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
                        <button className='btn btn-outline-warning'><strong className='text-white' style={{ cursor: 'pointer' }} onClick={() => { if (selectedSubitem != 0) { setSelectedSubitem(selectedSubitem - 1) } }}>Prev</strong></button>
                    </li>
                    <li className="nav-item" title='Mark as Read'>
                        {isSubtopicWatched() ? <button className='btn btn-success'><strong className='text-white'>Watched</strong></button> : <button onClick={setStatus} className='btn btn-danger'><strong className='text-white'>Mark As Read</strong></button>}
                    </li>
                    <li className="nav-item" title='Next Lecture'>
                        <button className='btn btn-outline-warning'><strong title='Next Lecture' className='text-white' style={{ cursor: 'pointer' }} onClick={() => setSelectedSubitem(selectedSubitem + 1)}>Next</strong></button>
                    </li>
                </ul>
            </div>




        </>
    )
}

export default LearningBody
