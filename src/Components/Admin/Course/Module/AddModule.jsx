import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { urlFunction } from '../../../../App';

const AddModule = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const [user,setUser] = useState([]);
    const [techer,setTeacher] = useState('');
    const [moduleName,setModuleName] = useState('');
    const [milestone,setMilestone] = useState('');
    const [desc,setDesc] = useState('');
    const [pdf,setPdf] = useState('')

    // Extract courseName and noOfMilestone from URL query parameters
    const courseName = searchParams.get('courseName');
    const noOfMilestone = searchParams.get('noOfMilestone');

    // Generate milestone options based on the number of milestones
    let options = [];
    for (let index = 0; index < noOfMilestone; index++) {
        if (index !== 0) {
            // Create milestone options for selection
            options.push(
                <option key={index} value={index+1}  className="fs-6 fw-bold">Milestone {index + 1}</option>
            );
        } else {
            // Default selected milestone
            options.push(
                <option key={index} value={index+1} className="fs-6 fw-bold" selected>Milestone {index + 1}</option>
            );
        }
    }

    useEffect(()=>{
        loadUser();
    },[courseName]);

    const loadUser = async ()=>{
        try{
             const userData = await axios.get(urlFunction()+'user/getAll');
             setUser(userData.data.filter((data)=>data.status =='teacher'))
        }catch(err){
            return console.log("There is Error ",err);

        }
    }

    const handForm = async (e)=>{
        e.preventDefault();
        const body = {
            name:moduleName,
            desc,
            mentor:techer,
            milestone,
            enrollCourse:courseName,
            pdf

        }
        try{
            const modData = await axios.post(urlFunction()+`module/create`,body);
            resetAll();
        }catch(err){
            return console.log("There is Error ",err);
        }
    }

    const resetAll = ()=>{
        setModuleName('');
        setTeacher('');
        setDesc('');
        setPdf("");
        setMilestone('')
    }

    return (
        <>
            <div className="mx-3">
                {/* Course Header */}
                <div className="d-flex justify-content-between mt-5">
                    <span className="h4 fw-bold">
                        Course / <span className="text-info">Add Module</span>
                    </span>
                </div>

                {/* Add Module Form */}
                <form onSubmit={handForm}>
                    <div className="card mt-4 border border-2 border-dark">
                        <div className="card-body my-0 py-0">
                            {/* Display course name and number of milestones */}
                            <div className="row my-1">
                                <div className="col-md">
                                    <div className="form-floating mb-1">
                                        <input type="email" className="form-control shadow-none border border-2 border-dark border-top-0 border-end-0 border-start-0 rounded rounded-0" id="floatingInput" value={courseName} readOnly />
                                        <label htmlFor="floatingInput">Course Name</label>
                                    </div>
                                </div>
                                <div className="col-md">
                                    <div className="form-floating mb-1">
                                        <input type="email" className="form-control shadow-none border border-2 border-dark border-top-0 border-end-0 border-start-0 rounded rounded-0" id="floatingInput" value={noOfMilestone} readOnly />
                                        <label htmlFor="floatingInput">No of Milestone</label>
                                    </div>
                                </div>
                            </div>

                            {/* Render milestones input fields */}
                            <div className="row row-cols-1 my-2 mx-0">
                                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 my-2">
                                    <div className="col">
                                        <div className="input-group mt-2 pt-2">
                                            {/* Milestone select dropdown */}
                                            <select className="fs-5 fw-bold form-select border border-2 border-dark border-top-0 border-end-0 border-start-0 rounded rounded-0 shadow shadow-none" id="inputGroupSelect01" onChange={(e)=>setMilestone(e.target.value)}>
                                                <option disabled>Select Milestone</option>
                                                {options}
                                            </select>

                                            {/* Milestone title input */}
                                            <input type="text" value={moduleName} className="form-control shadow-none border border-2 border-dark border-top-0 border-end-0 border-start-0 rounded rounded-0" id="milestoneDescription" placeholder='Write title' onChange={(e)=>setModuleName(e.target.value)} />
                                        </div>
                                    </div>

                                    {/* Milestone description input */}
                                    <div className="col">
                                        <div className="form-floating mb-1">
                                            <input type="text" value={desc} className="form-control shadow-none border border-2 border-dark border-top-0 border-end-0 border-start-0 rounded rounded-0" id="milestoneDescription" placeholder='Enter title for milestone' onChange={(e)=>setDesc(e.target.value)} />
                                            <label htmlFor="milestoneDescription">Description</label>
                                        </div>
                                    </div>

                                    {/* Mentor select dropdown */}
                                    <div className="col">
                                        <div className="input-group mt-2 pt-2">
                                            <label className="input-group-text border border-2 border-dark border-top-0 border-end-0 border-start-0 rounded rounded-0 shadow shadow-none bg-transparent fw-bold fs-5" htmlFor="inputGroupSelect01">Mentor</label>
                                            <select className="fw-bold form-select border border-2 border-dark border-top-0 border-end-0 border-start-0 rounded rounded-0 shadow shadow-none" id="inputGroupSelect01" onChange={(e)=>setTeacher(e.target.value)}>
                                                <option disabled selected>Choose Mentor</option>
                                                {
                                                    user?.map((techer)=>(
                                                        <option value={techer?._id}>{techer?.userName}                                                     
                                                        </option>
                                                    ))
                                                }                                                
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                        <div className="form-floating mb-1">
                                            <input type="text" value={pdf} className="form-control shadow-none border border-2 border-dark border-top-0 border-end-0 border-start-0 rounded rounded-0" id="milestoneDescription" placeholder='Paste Module Syllabus Link' onChange={(e)=>setPdf(e.target.value)} />
                                            <label htmlFor="milestoneDescription">Module Syllabus</label>
                                        </div>
                                    </div>
                            </div>

                            {/* Form control buttons */}
                            <div className="d-flex justify-content-end my-1">
                                <button className="btn btn-danger m-1 fw-bold d-flex align-items-center" type="reset" onClick={resetAll}>
                                    <i className="lni lni-cross-circle me-1"></i> Reset
                                </button>
                                <button className="btn btn-success m-1 fw-bold d-flex align-items-center" type="submit">
                                    <i className="lni lni-save me-1"></i> Save
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
};

export default AddModule;