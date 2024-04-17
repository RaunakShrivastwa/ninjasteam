import React, { useState, useEffect } from 'react';
import { urlFunction } from '../../../../App';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UpdateChapter = ({ id, course }) => {
    const navigate = useNavigate();

    const [chapterName, setChapterName] = useState('');
    const [chapterDesc, setChapterDesc] = useState('');
    const [moduleName, setModuleName] = useState('');

    useEffect(() => {
        loadChapter()
    }, [id]);

    const loadChapter = async () => {
        try {
            const getChapter = await axios.get(urlFunction() + `chapter/getChapter/${id}`);
            console.log("get Chapter data ", getChapter.data);
            setChapterName(getChapter?.data?.name);
            setChapterDesc(getChapter?.data?.desc);
            setModuleName(getChapter?.data?.moduleName);
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
        }

        try {
            const updateChapter = await axios.post(urlFunction() + `chapter/updateCourse/${id}`, body);
            navigate(-1);
        } catch (error) {
            console.log("error during update the chapter error");
        }
    }

    return (
        <div className="mx-3 mt-4">
            <div className="d-flex justify-content-between">
                <div className="d-flex align-items-end">
                    <span className="h4 fw-bold">
                        Course / <span class="text-info">Module / </span>
                        <span class="text-warning">Update Chapter</span>
                    </span>
                </div>
            </div>

            <form onSubmit={handleAboutSubmit}>
                <div className="card mt-4 border border-2 border-dark">
                    <div className="card-body my-0 py-0">
                        <div className="row my-1">
                            <div className="col-lg">
                                <div className="form-floating mb-1 fw-bold">
                                    <input type="text" className="form-control shadow-none border border-2 border-dark border-top-0 border-end-0 border-start-0 rounded rounded-0" id="courseName" placeholder="Course Name" value={course} readOnly />
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

export default UpdateChapter;
