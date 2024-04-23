import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { urlFunction } from '../../../../App';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateCourse = () => {
    const navigate = useNavigate(); // Access navigate function from React Router to programmatically navigate
    const { name } = useParams(); // Extract 'name' parameter from URL using useParams hook

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

    // Function to fetch course data based on the 'name' parameter
    useEffect(() => {
        loadCourse();
    }, []);

    const loadCourse = async () => {
        try {
            // Fetch course data by name
            const courseData = await axios.get(urlFunction() + `course/courseName/${name}`);
            // Update state variables with fetched course data
            setCourseName(courseData?.data?.name);
            setCourseDuration(courseData?.data?.duration);
            setEnrollmentFee(courseData?.data?.sellPrice);
            setMilestone(courseData?.data?.milestone);
            setMarketFee(courseData?.data?.marketPrice);
            setAboutUs(courseData?.data?.description);
            setImageLink(courseData?.data?.courseImage);
            setCourseSyllabusLink(courseData?.data?.syllabus);
            setIntroCourseVideoLink(courseData?.data?.introVideo);
        } catch (error) {
            console.log(`Error fetching course data: ${error}`);
        }
    }

    // Function to handle form submission
    const handleAboutSubmit = async (e) => {
        e.preventDefault();

        // Prepare request body with updated course information
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
            // Send POST request to update course data
            await axios.post(urlFunction() + `course/updateCourse/${name}`, body);
            // Navigate back to previous page upon successful update
            navigate(-1);
        } catch (err) {
            console.log("Error updating course:", err);
        }

        // Reset form fields after submission
        handleResetBtn();
    }

    // Function to reset form fields to original course data
    const handleResetBtn = () => {
        loadCourse();
    }
    console.log("courseName= ",courseName);

    return (
        <div className="mx-0 mx-md-5 my-4 shadow-lg rounded rounded-lg">
            <div className="card">
                <div className="card-header text-center fs-3 fw-bold border border-0 bg-transparent">
                    <u> Update Course </u>
                </div>

                {/* Course Update Form */}
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
                                    <label htmlFor="floatingInput">Enrollment Fee</label>
                                </div>
                            </div>
                            <div className="col-lg">
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control shadow-none border border-2 border-dark border-top-0 border-end-0 border-start-0 rounded rounded-0" id="floatingInput" placeholder="No of Milestone" value={milestone} onChange={(e) => setMilestone(e.target.value)} required />
                                    <label htmlFor="floatingInput">No of Milestone</label>
                                </div>
                            </div>
                        </div>

                        {/* Additional Course Details */}
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
                                    <label htmlFor="floatingInput">Market Fee</label>
                                </div>
                            </div>
                        </div>

                        {/* About Us (Course Description) */}
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
                        <button type="button" className="btn btn-outline-danger m-1 fw-bold fs-6" onClick={handleResetBtn}>
                            <i className="fa-solid fa-circle-xmark d-none d-md-inline-block"></i> Reset
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default UpdateCourse;