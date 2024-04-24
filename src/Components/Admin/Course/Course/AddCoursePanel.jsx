import React, { useState } from 'react';
import axios from 'axios';
import { urlFunction } from '../../../../App';
import { useNavigate } from 'react-router-dom';

const AddCoursePanel = () => {
    const navigate = useNavigate(); // Access navigate function from React Router to programmatically navigate

    // State variables to manage form inputs
    const [courseName, setCourseName] = useState("");
    const [courseDuration, setCourseDuration] = useState("");
    const [enrollmentFee, setEnrollmentFee] = useState("");
    const [milestone, setMilestone] = useState("");
    const [marketFee, setMarketFee] = useState("");
    const [aboutUs, setAboutUs] = useState("");
    const [imageLink, setImageLink] = useState("");
    const [courseSyllabusLink, setCourseSyllabusLink] = useState("");
    const [introCourseVideoLink, setIntroCourseVideoLink] = useState("");
    const [standred,setStandred] = useState('');
    const [tag,setTag] = useState('');
    const [status,setStatus] = useState('');
    const [startDate,setStartDate] = useState('');

    // Function to handle form submission
    const handleAboutSubmit = async (e) => {
        e.preventDefault();

        // Prepare request body with course information
        const body = {
            name: courseName,
            duration: courseDuration,
            description: aboutUs,
            milestone: milestone,
            sellPrice: enrollmentFee,
            marketPrice: marketFee,
            courseImage: imageLink,
            introVideo: introCourseVideoLink,
            syllabus: courseSyllabusLink
        }

        try {
            // Send POST request to create a new course
            const createCourse = await axios.post(urlFunction() + `course/create`, body);
            // Navigate back to the previous page upon successful course creation
            navigate(-1);
        } catch (err) {
            console.log("Error creating course:", err);
        }

        // Reset form fields after submission
        handleResetBtn();
    }

    // Function to reset form fields to initial state
    const handleResetBtn = () => {
        setCourseName("");
        setCourseDuration("");
        setEnrollmentFee("");
        setMilestone("");
        setMarketFee("");
        setAboutUs("");
        setImageLink("");
        setIntroCourseVideoLink("");
        setCourseSyllabusLink("");
    }

    return (
        <div className="mx-0 mx-md-5 my-4 shadow-lg rounded rounded-lg">
            <div className="card">
                <div className="card-header text-center fs-3 fw-bold border border-0 bg-transparent">
                    <u> Add Course </u>
                </div>

                {/* Course Creation Form */}
                <form onSubmit={handleAboutSubmit}>
                    <div className="card-body my-0 py-0">
                        {/* Form Inputs for Course Details */}
                        <div className="row my-2">
                            <div className="col-lg">
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control shadow-none border border-2 border-dark border-top-0 border-end-0 border-start-0 rounded rounded-0" id="floatingInput" placeholder="Course Name" value={courseName} onChange={(e) => setCourseName(e.target.value)} required />
                                    <label htmlFor="floatingInput">Course Name</label>
                                </div>
                            </div>
                            <div className="col-lg">
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control shadow-none border border-2 border-dark border-top-0 border-end-0 border-start-0 rounded rounded-0" id="floatingInput" placeholder="Course Duration" value={courseDuration} onChange={(e) => setCourseDuration(e.target.value)} required />
                                    <label htmlFor="floatingInput">Course Duration</label>
                                </div>
                            </div>
                        </div>

                        <div className="row my-2">
                            <div className="col-lg">
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control shadow-none border border-2 border-dark border-top-0 border-end-0 border-start-0 rounded rounded-0" id="floatingInput" placeholder="Enrollment Fee" value={enrollmentFee} onChange={(e) => setEnrollmentFee(e.target.value)} required />
                                    <label htmlFor="floatingInput">Enrollment Fees</label>
                                </div>
                            </div>
                            <div className="col-lg">
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control shadow-none border border-2 border-dark border-top-0 border-end-0 border-start-0 rounded rounded-0" id="floatingInput" placeholder="No of Milestone" value={milestone} onChange={(e) => setMilestone(e.target.value)} required />
                                    <label htmlFor="floatingInput">No of Milestone</label>
                                </div>
                            </div>
                        </div>

                        <div className="row my-2">
                            <div className="col-lg">
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control shadow-none border border-2 border-dark border-top-0 border-end-0 border-start-0 rounded rounded-0" id="floatingInput" placeholder="Course Image Link" value={imageLink} onChange={(e) => setImageLink(e.target.value)} required />
                                    <label htmlFor="floatingInput">Course Image Link</label>
                                </div>
                            </div>
                            <div className="col-lg">
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control shadow-none border border-2 border-dark border-top-0 border-end-0 border-start-0 rounded rounded-0" id="floatingInput" placeholder="Course Syllabus Link" value={courseSyllabusLink} onChange={(e) => setCourseSyllabusLink(e.target.value)} required />
                                    <label htmlFor="floatingInput">Course Syllabus Link</label>
                                </div>
                            </div>
                        </div>

                        <div className="row my-2">
                            <div className="col-lg">
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control shadow-none border border-2 border-dark border-top-0 border-end-0 border-start-0 rounded rounded-0" id="floatingInput" placeholder="Intro Video Link" value={introCourseVideoLink} onChange={(e) => setIntroCourseVideoLink(e.target.value)} required />
                                    <label htmlFor="floatingInput">Intro Video Link</label>
                                </div>
                            </div>
                            <div className="col-lg">
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control shadow-none border border-2 border-dark border-top-0 border-end-0 border-start-0 rounded rounded-0" id="floatingInput" placeholder="Market Fee" value={marketFee} onChange={(e) => setMarketFee(e.target.value)} required />
                                    <label htmlFor="floatingInput">Market Fees</label>
                                </div>
                            </div>
                        </div>

                        {/* standred and tag */}
                        

                        {/* About Us (Course Description) */}
                        <div className="row my-2">
                            <div className="col-lg">
                                <div className="form-floating mb-3">
                                    <textarea type="text" className="form-control shadow-none border border-2 border-dark border-top-0 border-end-0 border-start-0 rounded rounded-0" id="floatingInput" placeholder="About Us" value={aboutUs} onChange={(e) => setAboutUs(e.target.value)} required />
                                    <label htmlFor="floatingInput">About Us</label>
                                </div>
                            </div>
                        </div>
                        <div className="row my-2">
                            <div className="col-lg">
                                <div className="form-floating mb-3">
                                    <textarea type="text" className="form-control shadow-none border border-2 border-dark border-top-0 border-end-0 border-start-0 rounded rounded-0" id="floatingInput" placeholder="About Us" value={aboutUs} onChange={(e) => setAboutUs(e.target.value)} required />
                                    <label htmlFor="floatingInput">About Us</label>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form Actions (Submit and Reset) */}
                    <div className="card-footer d-flex justify-content-end border border-0 bg-transparent">
                        {/* Submit Button */}
                        <button type="submit" className="btn btn-outline-primary m-1 fw-bold fs-6">
                            <i className="fa-regular fa-floppy-disk d-none d-md-inline-block"></i> Save
                        </button>
                        {/* Reset Button */}
                        <button type="reset" className="btn btn-outline-danger m-1 fw-bold fs-6" onClick={handleResetBtn}>
                            <i className="fa-solid fa-circle-xmark d-none d-md-inline-block"></i> Reset
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AddCoursePanel;