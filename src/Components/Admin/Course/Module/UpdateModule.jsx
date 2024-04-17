import React, { useState, useEffect } from 'react';
import { urlFunction } from '../../../../App';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UpdateModule = ({ id, module }) => {
    const navigate = useNavigate();
    const [courseName, setCourseName] = useState('');
    const [moduleName, setModuleName] = useState('');
    const [description, setDescriptiuon] = useState('');
    const [mentorName, setMentorName] = useState('');

    const [moduleDetails, setModuleDetails] = useState('');

    useEffect(() => {
        loadModule()
    }, [id]);

    const loadModule = async () => {
        try {
            const getModule = await axios.get(urlFunction() + `module/singleMod/${id}`);
            setModuleDetails(getModule.data);

            setCourseName(getModule.data?.enrollCourse);
            setModuleName(getModule.data?.name);
            setDescriptiuon(getModule.data?.desc);
            setMentorName(getModule.data?.mentor?.userName);

            console.log(getModule);
        } catch (error) {
            return console.log(`error durning load milestone ${error}`);
        }
    }

    const handleReset = () => {
        setModuleName("")
        setDescriptiuon("")
    }

    const handleAboutSubmit = async (e) => {
        e.preventDefault();

        const body = {
            name: moduleName,
            desc: description,
        }
        console.log(body);
        try {
            await axios.post(urlFunction() + `module/update/${id}`, body);
            navigate(-1);
        }
        catch (error) {
            console.log("error during update the error");
        }
    }

    return (
        <div className="mx-3">
            <div className="d-flex justify-content-between mt-5">
                <span className="h4 fw-bold">
                    Course / <span class="text-info">Update Module</span>
                </span>
            </div>

            <form onSubmit={handleAboutSubmit}>
                <div className="card mt-4 border border-2 border-dark">
                    <div className="card-body my-0 py-0">
                        <div className="row my-1">
                            <div className="col-md">
                                <div className="form-floating mb-1">
                                    <input type="text" className="form-control shadow-none border border-2 border-top-0 border-end-0 border-start-0 border-dark rounded rounded-0" placeholder="Course Name" value={courseName} readOnly />
                                    <label htmlFor="floatingInput">Course Name</label>
                                </div>
                            </div>
                            <div className="col-md">
                                <div className="form-floating mb-1">
                                    <input type="text" className="form-control shadow-none border border-2 border-top-0 border-end-0 border-start-0 border-dark rounded rounded-0" placeholder="no of milestone" value={module} readOnly />
                                    <label htmlFor="floatingInput">No of Milestone</label>
                                </div>
                            </div>
                        </div>

                        <div className="row row-cols-1 mx-0">
                            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 my-2">
                                <div className="form-floating">
                                    <input type="text" className="form-control shadow-none border border-2 border-top-0 border-end-0 border-start-0 border-dark rounded rounded-0" placeholder="Module name" value={moduleName} onChange={(e) => { setModuleName(e.target.value) }} required />
                                    <label htmlFor="floatingInput">Module {moduleDetails?.milestone}</label>
                                </div>

                                <div className="form-floating">
                                    <input type="text" className="form-control shadow-none border border-2 border-top-0 border-end-0 border-start-0 border-dark rounded rounded-0" placeholder="Description" value={description} onChange={(e) => { setDescriptiuon(e.target.value) }} required />
                                    <label htmlFor="milestoneDescription">Description</label>
                                </div>

                                <div className="form-floating">
                                    <input type="text" className="form-control shadow-none border border-2 border-top-0 border-end-0 border-start-0 border-dark rounded rounded-0" placeholder="Mentor" value={mentorName} required />
                                    <label htmlFor="floatingInput">Mentor</label>
                                </div>
                            </div>
                        </div>

                        <div className="d-flex justify-content-end my-1">
                            <button className="btn btn-danger m-1 fw-bold d-flex align-items-center" onClick={handleReset} type="reset">
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
    );
};

export default UpdateModule;
