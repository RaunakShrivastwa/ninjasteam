import React, { useState, useEffect } from 'react';
import { urlFunction } from '../../../../App';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddChapter = ({ id, course }) => {
    const navigate = useNavigate();

    const [chapterName, setChapterName] = useState('');
    const [chapterDesc, setChapterDesc] = useState('');
    const [courseName, setCourseName] = useState('');
    const [moduleName, setModuleName] = useState('');

    useEffect(() => {
        loadChapter()
    }, [id]);

    const loadChapter = async () => {
        try {
            const getModule = await axios.get(urlFunction() + `module/singleMod/${id}`);
            console.log("get Add data ", getModule.data);
            setCourseName(getModule?.data?.enrollCourse);
            setModuleName(getModule?.data?.name)
        } catch (error) {
            return console.log(`error durning load milestone ${error}`);
        }
    }

    const handleReset = () => {
        setChapterName('');
        setChapterDesc('');
    }

    const handleAboutSubmit = async (e) => {
        e.preventDefault();

        const body = {
            name: chapterName,
            desc: chapterDesc,
            moduleName: moduleName
        }

        try {
            await axios.post(urlFunction() + `chapter/create`, body);
            navigate(-1);
        } catch (error) {
            console.log("error during add the chapter error");
        }
    }

    return (
        <div className="mx-3 mt-4">
            <div className="d-flex justify-content-between">
                <div className="d-flex align-items-end">
                    <span className="h4 fw-bold">
                        Course / <span class="text-info">Module / </span>
                        <span class="text-warning">Add Chapter</span>
                    </span>
                </div>
            </div>

            <form onSubmit={handleAboutSubmit}>
                <div className="card mt-4 border border-2 border-dark">
                    <div className="card-body my-0 py-0">
                        <div className="row my-1">
                            <div className="col-lg">
                                <div className="form-floating mb-1 fw-bold">
                                    <input type="text" className="form-control shadow-none border border-2 border-dark border-top-0 border-end-0 border-start-0 rounded rounded-0" id="courseName" placeholder="Course Name" value={courseName} readOnly />
                                    <label htmlFor="courseName">Course Name</label>
                                </div>
                            </div>

                            <div className="col-lg">
                                <div className="form-floating mb-1 fw-bold">
                                    <input type="text" className="form-control shadow-none border border-2 border-dark border-top-0 border-end-0 border-start-0 rounded rounded-0" id="courseDuration" placeholder="Course Duration" value={moduleName} readOnly />
                                    <label htmlFor="courseDuration">Module Name</label>
                                </div>
                            </div>
                        </div>

                        <div className="row my-1">
                            <div className="col-lg">
                                <div className="form-floating mb-1 fw-bold">
                                    <input type="text" className="form-control shadow-none border border-2 border-dark border-top-0 border-end-0 border-start-0 rounded rounded-0" id="enrollmentFee" placeholder="Enrollment Fee" value={chapterName} onChange={(e) => { setChapterName(e.target.value) }} required />
                                    <label htmlFor="enrollmentFee">Chapter Name</label>
                                </div>
                            </div>
                            <div className="col-lg">
                                <div className="form-floating mb-1 fw-bold">
                                    <input type="text" className="form-control shadow-none border border-2 border-dark border-top-0 border-end-0 border-start-0 rounded rounded-0" id="milestonesCount" placeholder="No of Milestone" value={chapterDesc} onChange={(e) => { setChapterDesc(e.target.value) }} required />
                                    <label htmlFor="milestonesCount">Chapter Description</label>
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

export default AddChapter;