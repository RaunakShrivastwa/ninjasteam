import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import AddUserWorkExperse from './AddUserWorkExperse';
import axios from 'axios';
import Cookies from 'js-cookie';

const WorkExperience = () => {
    const [showAddForm, setShowAddForm] = useState(false);
    const [workExprense, setExp] = useState([]);
    const [user, setUser] = useState();
    
    const toggleAddForm = () => {
        setShowAddForm(!showAddForm);
    };

    const handleCancel = () => {
        setShowAddForm(false);
    };

    useEffect(() => {
        loadUser()
    }, [])

    const loadUser = async () => {
        const u = JSON.parse(Cookies.get('yourData'))
        setUser(u)
        try {
            const res = await axios.get(`http://localhost:4000/exprience/getAll/${u?.userEmail}`);
            console.log("Exprience ", res.data);
            setExp(res.data)
        } catch (err) {
            return console.log("There is Error ", err);
        }
    }

    const updateWorkExperience = (newExperience) => {
        setExp(prevExp => [...prevExp, newExperience]);
    };

    const deleteW = async (id) => {
        try {
            await axios.get(`http://localhost:4000/exprience/delete/${id}`)
            loadUser();
        } catch (err) {
            return console.log("There is Error ", err);
        }
    }


    return (
        <div class="card border border-dark border-2 rounded rounded-lg my-3">
            <div class="card-body">
                <div class="d-flex justify-content-between mb-3">
                    <h4>Work Experience</h4>
                    <button type="button" class="btn btn-outline-dark fw-bolder" onClick={toggleAddForm}>
                        <FontAwesomeIcon icon={faPlus} /> Add
                    </button>
                </div>

                {showAddForm && <AddUserWorkExperse updateWorkExperience={updateWorkExperience} user={user} onCancel={handleCancel} />}
                {workExprense.length === 0 ? (
                    <div className="d-flex flex-column justify-content-center align-items-center mx-md-5 px-md-5 ">
                        <img src="/Image/UserImage/WorkExperience.svg" alt="WorkExperience.svg" style={{ width: '300px' }} />
                        <span className="fs-5">Write about your accomplishments at work</span>
                    </div>
                ) : (
                    workExprense.map((work, index) => (
                        <div key={index}>
                            <div className="d-flex flex-column justify-content-center align-items-start5">
                                <div class="d-flex justify-content-between">
                                    <div className="fw-normal">
                                        <span class="h5 me-2 my-0">{work.name}</span>
                                        (<span>{work?.role}</span>)
                                    </div>
                                    <button type="button" onClick={() => deleteW(work._id)} className="btn btn-transparent p-1">
                                        <FontAwesomeIcon icon={faTrash} />
                                    </button>

                                </div>
                                <p className="fs-5 my-0 py-0">
                                    <span>{work?.join_year}</span>
                                    <span>-</span>
                                    <span>{work?.end_year}</span>
                                </p>
                                <p className="fs-5 my-0 py-0">
                                    <span class="bg-warning rounded rounded-lg">{work?.summry} </span>
                                </p>
                            </div>
                            {index < (workExprense.length - 1) && <hr />}
                        </div>
                    ))
                )}
            </div>
        </div>
    )
}

export default WorkExperience