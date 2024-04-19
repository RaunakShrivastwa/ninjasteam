import React, { useState, useEffect } from 'react';
import { urlFunction } from '../../../../App';
import axios from 'axios';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

const UpdateModule = () => {
    const { id } = useParams();
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const module = searchParams.get('milestone');
    const navigate = useNavigate();

    // State variables for form fields and module details
    const [courseName, setCourseName] = useState('');
    const [moduleName, setModuleName] = useState('');
    const [description, setDescription] = useState('');
    const [mentorName, setMentorName] = useState('');
    const [moduleDetails, setModuleDetails] = useState('');

    // Load module details from the server when the component mounts or when ID changes
    useEffect(() => {
        loadModule();
    }, [id]);

    // Function to fetch module details based on ID
    const loadModule = async () => {
        try {
            const getModule = await axios.get(urlFunction() + `module/singleMod/${id}`);
            const moduleData = getModule.data;

            // Set module details and initialize form fields with fetched data
            setModuleDetails(moduleData);
            setCourseName(moduleData?.enrollCourse);
            setModuleName(moduleData?.name);
            setDescription(moduleData?.desc);
            setMentorName(moduleData?.mentor?.userName);

            console.log(getModule);
        } catch (error) {
            console.log(`Error loading module: ${error}`);
        }
    };

    // Reset form fields
    const handleReset = () => {
        setModuleName('');
        setDescription('');
    };

    // Handle form submission
    const handleAboutSubmit = async (e) => {
        e.preventDefault();

        const body = {
            name: moduleName,
            desc: description,
        };

        try {
            // Send updated module data to the server for update
            await axios.post(urlFunction() + `module/update/${id}`, body);
            navigate(-1); // Navigate back to the previous page after successful update
        } catch (error) {
            console.log("Error during module update:", error);
        }
    };

    return (
        <div className="mx-3">
            {/* Course Header */}
            <div className="d-flex justify-content-between mt-5">
                <span className="h4 fw-bold">
                    Course / <span className="text-info">Update Module</span>
                </span>
            </div>

            {/* Module Update Form */}
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

                        {/* Form fields for module update */}
                        <div className="row row-cols-1 mx-0">
                            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 my-2">
                                <div className="form-floating">
                                    <input type="text" className="form-control shadow-none border border-2 border-top-0 border-end-0 border-start-0 border-dark rounded rounded-0" placeholder="Module name" value={moduleName} onChange={(e) => setModuleName(e.target.value)} required />
                                    <label htmlFor="floatingInput">Module Name</label>
                                </div>

                                <div className="form-floating">
                                    <input type="text" className="form-control shadow-none border border-2 border-top-0 border-end-0 border-start-0 border-dark rounded rounded-0" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} required />
                                    <label htmlFor="milestoneDescription">Description</label>
                                </div>

                                <div className="form-floating">
                                    <input type="text" className="form-control shadow-none border border-2 border-top-0 border-end-0 border-start-0 border-dark rounded rounded-0" placeholder="Mentor" value={mentorName} readOnly />
                                    <label htmlFor="floatingInput">Mentor</label>
                                </div>
                            </div>
                        </div>

                        {/* Form action buttons */}
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