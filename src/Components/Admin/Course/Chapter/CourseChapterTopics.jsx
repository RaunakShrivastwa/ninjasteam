import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { urlFunction } from '../../../../App'

const CourseChapterTopics = ({ id, course }) => {
    const [chapter, setChapter] = useState();
    const [moduleName, setmoduleName] = useState();
    const [chapterName, setChapterName] = useState();
    const [chapterDescription, setChapterDescription] = useState('');
    const [topics, setTopics] = useState('');

    useEffect(() => {
        loadModule()
    }, [id]);

    const loadModule = async () => {
        try {
            const getChapter = await axios.get(urlFunction() + `chapter/getChapter/${id}`);
            setChapter(getChapter?.data);
            setmoduleName(getChapter?.data?.moduleName);
            setChapterName(getChapter?.data?.name);
            setChapterDescription(getChapter?.data?.desc);
            setTopics(getChapter?.data?.SubTopic);
            console.log("get chapter info ", getChapter?.data);

        } catch (error) {
            return console.log(`error durning load milestone ${error}`);
        }
    }

    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage] = useState(4);
    const indexOfLastRow = currentPage * rowsPerPage;
    const indexOfFirstRow = indexOfLastRow - rowsPerPage;
    const currentRows = topics.slice(indexOfFirstRow, indexOfLastRow);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    console.log("Topics ", topics);

    return (
        <>
            <div className="mt-4 mx-0 mx-md-5">
                <div className="d-flex justify-content-between">
                    <div className="d-flex align-items-end">
                        <span className="h4 fw-bold">
                            Course  /
                            <span class="text-info"> Module / </span>
                            <span class="text-warning">View Chapter</span>
                        </span>
                    </div>

                    <div className="d-flex">
                        <Link to={`/ninja/Admin/course/module/addChapter/${id}`} className="btn d-flex align-items-center border border-2 border-success me-2 my-1 mb-md-0">
                            <i className="lni lni-plus"></i>
                            <span className="ms-1"> Add</span>
                        </Link>
                    </div>
                </div>

                <div className="card mt-3 border border-2 border-dark">
                    <div className="card-body m-0 py-0">
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
                                        <input type="text" className="form-control shadow-none border border-2 border-dark border-top-0 border-end-0 border-start-0 rounded rounded-0" id="moduleName" placeholder="Course Duration" value={moduleName} readOnly />
                                        <label htmlFor="moduleName">Module Name</label>
                                    </div>
                                </div>
                            </div>

                            <div className="row my-1">
                                <div className="col-lg">
                                    <div className="form-floating mb-1 fw-bold">
                                        <input type="text" className="form-control shadow-none border border-2 border-dark border-top-0 border-end-0 border-start-0 rounded rounded-0" id="chapterName" placeholder="Enrollment Fee" value={chapterName} readOnly />
                                        <label htmlFor="chapterName">Chapter Name</label>
                                    </div>
                                </div>
                                <div className="col-lg">
                                    <div className="form-floating mb-1 fw-bold">
                                        <input type="text" className="form-control shadow-none border border-2 border-dark border-top-0 border-end-0 border-start-0 rounded rounded-0" id="chapterDescription" placeholder="No of Milestone" value={chapterDescription} readOnly />
                                        <label htmlFor="chapterDescription">Chapter Description</label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row shadow shadow m-3">
                            <div className="col">
                                <div className="table-responsive">
                                    <table className="table table-hover">
                                        <thead className="sticky-top bg-white">
                                            <tr>
                                                <th scope="col">S.NO</th>
                                                <th scope="col">Name</th>
                                                <th scope="col">Options</th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            {currentRows?.map((tableData, index) => (
                                                <tr key={indexOfFirstRow + index}  >
                                                    <td>{indexOfFirstRow + index + 1}</td>
                                                    <td>{tableData?.TopicName}</td>
                                                    <td>
                                                        <Link to={`/ninja/Admin/course/module/updateChapter/${tableData._id}`} className="rounded rounded-lg border border-2 border-success btn btn-outline-success p-1 pb-0 fw-bold me-1">
                                                            <i className="lni lni-pencil"></i>
                                                        </Link>

                                                        <Link to="/view" className="rounded rounded-lg border border-2 border-dark btn btn-outline-dark p-1 pb-0 fw-bold ms-1">
                                                            <i className="lni lni-eye"></i>
                                                        </Link>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            {/* Pagination */}
                            <nav aria-label="Page navigation example">
                                <ul className="pagination justify-content-center">
                                    {[...Array(Math.ceil(topics.length / rowsPerPage)).keys()].map((number) => (
                                        <li key={number} className={`page-item ${currentPage === number + 1 ? 'active' : ''}`}>
                                            <button onClick={() => paginate(number + 1)} className="page-link shadow-none">
                                                {number + 1}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CourseChapterTopics;
