import React, { useState } from 'react';
import axios from 'axios';
import { urlFunction } from '../../../App';

const AddCoursePanel = () => {
    const [courseName, setCourseName] = useState("");
    const [courseDuration, setCourseDuration] = useState("");
    const [enrollmentFee, setEnrollmentFee] = useState("");
    const [milestone, setMilestone] = useState("");
    const [marketFee, setMarketFee] = useState("");
    const [aboutUs, setAboutUs] = useState("");
    const [imageLink, setImageLink] = useState("");
    const [courseSyllabusLink, setCourseSyllabusLink] = useState("");
    const [introCourseVideoLink, setIntroCourseVideoLink] = useState("");

    const handleAboutSubmit = async (e) => {
        e.preventDefault();

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
            const createCourse = await axios.post(urlFunction()+`course/create`, body);
            console.log("Abhijeet saved a course");
            console.log(createCourse);
        } catch (err) {
            return console.log("There is error", err);
        }

        console.log(body);
        handleResetBtn()
    }

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
        <div class="mx-0 mx-md-5 my-4 shadow-lg rounded rounded-lg">
            <div class="card">
                <div class="card-header text-center fs-3 fw-bold border border-0 bg-transparent">
                    <u> Add Course </u>
                </div>

                <form onSubmit={handleAboutSubmit} >
                    <div class="card-body my-0 py-0">
                        <div class="row my-2">
                            <div class="col-lg">
                                <div class="form-floating mb-3">
                                    <input type="text" class="form-control shadow-none border border-2 border-dark border-top-0 border-end-0 border-start-0 rounded rounded-0" id="floatingInput" placeholder="name@example.com" value={courseName} onChange={(e) => setCourseName(e.target.value)} required />

                                    <label for="floatingInput">Course Name</label>
                                </div>
                            </div>
                            <div class="col-lg">
                                <div class="form-floating mb-3">
                                    <input type="text" class="form-control shadow-none border border-2 border-dark border-top-0 border-end-0 border-start-0 rounded rounded-0" id="floatingInput" placeholder="name@example.com" value={courseDuration} onChange={(e) => { setCourseDuration(e.target.value) }} required />
                                    <label for="floatingInput">Course Duration</label>
                                </div>
                            </div>
                        </div>

                        <div class="row my-2">
                            <div class="col-lg">
                                <div class="form-floating mb-3">
                                    <input type="text" class="form-control shadow-none border border-2 border-dark border-top-0 border-end-0 border-start-0 rounded rounded-0" id="floatingInput" placeholder="name@example.com" value={enrollmentFee} onChange={(e) => { setEnrollmentFee(e.target.value) }} required />
                                    <label for="floatingInput">Enrollment Fee</label>
                                </div>
                            </div>
                            <div class="col-lg">
                                <div class="form-floating mb-3">
                                    <input type="text" class="form-control shadow-none border border-2 border-dark border-top-0 border-end-0 border-start-0 rounded rounded-0" id="floatingInput" placeholder="name@example.com" value={milestone} onChange={(e) => { setMilestone(e.target.value) }} required />
                                    <label for="floatingInput">No of Milestone</label>
                                </div>
                            </div>
                        </div>

                        <div class="row my-2">
                            <div class="col-lg">
                                <div class="form-floating mb-3">
                                    <input type="text" class="form-control shadow-none border border-2 border-dark border-top-0 border-end-0 border-start-0 rounded rounded-0" id="floatingInput" placeholder="name@example.com" value={imageLink} onChange={(e) => { setImageLink(e.target.value) }} required />
                                    <label for="floatingInput">Course Image Link</label>
                                </div>
                            </div>
                            <div class="col-lg">
                                <div class="form-floating mb-3">
                                    <input type="text" class="form-control shadow-none border border-2 border-dark border-top-0 border-end-0 border-start-0 rounded rounded-0" id="floatingInput" placeholder="name@example.com" value={courseSyllabusLink} onChange={(e) => { setCourseSyllabusLink(e.target.value) }} required />
                                    <label for="floatingInput">Course Syllabus Link</label>
                                </div>
                            </div>
                        </div>

                        <div class="row my-2">
                            <div class="col-lg">
                                <div class="form-floating mb-3">
                                    <input type="text" class="form-control shadow-none border border-2 border-dark border-top-0 border-end-0 border-start-0 rounded rounded-0" id="floatingInput" placeholder="name@example.com" value={introCourseVideoLink} onChange={(e) => { setIntroCourseVideoLink(e.target.value) }} required />
                                    <label for="floatingInput">Intro Video Link</label>
                                </div>
                            </div>
                            <div class="col-lg">
                                <div class="form-floating mb-3">
                                    <input type="text" class="form-control shadow-none border border-2 border-dark border-top-0 border-end-0 border-start-0 rounded rounded-0" id="floatingInput" placeholder="name@example.com" value={marketFee} onChange={(e) => { setMarketFee(e.target.value) }} required />
                                    <label for="floatingInput">Market Fee</label>
                                </div>
                            </div>
                        </div>

                        <div className="row my-2">
                            <div class="col-lg">
                                <div class="form-floating mb-3">
                                    <textarea type="text" class="form-control shadow-none border border-2 border-dark border-top-0 border-end-0 border-start-0 rounded rounded-0" id="floatingInput" placeholder="name@example.com" value={aboutUs} onChange={(e) => { setAboutUs(e.target.value) }} required />
                                    <label for="floatingInput">About Us</label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card-footer d-flex justify-content-end border border-0 bg-transparent">
                        <button type="submit" class="btn btn-outline-primary m-1 fw-bold fs-6">
                            <i class="fa-regular fa-floppy-disk d-none d-md-inline-block"></i> Save
                        </button>
                        <button type="reset" class="btn btn-outline-danger m-1 fw-bold fs-6" onClick={handleResetBtn}>
                            <i class="fa-solid fa-circle-xmark d-none d-md-inline-block"></i> Reset
                        </button>
                    </div>
                </form>
            </div>
        </div >
    )
}

export default AddCoursePanel