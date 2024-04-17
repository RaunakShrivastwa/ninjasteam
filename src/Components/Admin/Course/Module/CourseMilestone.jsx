import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CoursePanel from '../CoursePanel';
import axios from 'axios';
import { urlFunction } from '../../../../App'

const CourseMilestone = ({ name }) => {

    const [course, setCourse] = useState();
    useEffect(() => {
        loadCourse();
    }, []);

    const loadCourse = async () => {
        try {
            const getCourse = await axios.get(urlFunction() + `course/courseName/${name}`);
            setCourse(getCourse.data.courseInfo);
        } catch (err) {
            return console.log("error", err);
        }
    }

    console.log("course data ", course);

    const moduleData = course?.modules || [];

    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage] = useState(4);
    const indexOfLastRow = currentPage * rowsPerPage;
    const indexOfFirstRow = indexOfLastRow - rowsPerPage;
    const currentRows = moduleData.slice(indexOfFirstRow, indexOfLastRow);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const [close, setClose] = useState(true);
    function handleClose() {
        setClose(false);
    }

    return (
        <>
            {close && (
                <div className="mt-2 mx-0 mx-md-5">
                    <div className="d-flex justify-content-between">
                        <div className="d-flex align-items-end">
                            <span className="h4 fw-bold">
                                View Course
                            </span>
                        </div>

                        <div className="d-flex">
                            <Link to={`/ninja/Admin/course/addModule?courseName=${course?.name}&noOfMilestone=${course?.milestone}`} className="btn d-flex align-items-center border border-2 border-success me-2 my-1 mb-md-0">
                                <i className="lni lni-plus"></i>
                                <span className="ms-1"> Add</span>
                            </Link>

                            <button type="button" className="btn d-flex align-items-center border border-2 border-danger my-1 mb-md-0" onClick={() => handleClose()}>
                                <i className="lni lni-cross-circle"></i>
                                <span className="ms-1"> Close</span>
                            </button>
                        </div>
                    </div>

                    <div className="card mt-3 border border-2 border-dark">
                        <div className="card-body m-0 py-0">
                            <div className="card-body my-0 py-0">
                                <div className="row my-1">
                                    <div className="col-lg">
                                        <div className="form-floating mb-1">
                                            <input type="text" className="form-control shadow-none border border-2 border-dark border-top-0 border-end-0 border-start-0 rounded rounded-0" id="courseName" placeholder="Course Name" value={course?.name} readOnly />
                                            <label htmlFor="courseName">Course Name</label>
                                        </div>
                                    </div>

                                    <div className="col-lg">
                                        <div className="form-floating mb-1">
                                            <input type="text" className="form-control shadow-none border border-2 border-dark border-top-0 border-end-0 border-start-0 rounded rounded-0" id="courseDuration" placeholder="Course Duration" value={course?.duration} readOnly />
                                            <label htmlFor="courseDuration">Course Duration</label>
                                        </div>
                                    </div>
                                </div>

                                <div className="row my-1">
                                    <div className="col-lg">
                                        <div className="form-floating mb-1">
                                            <input type="text" className="form-control shadow-none border border-2 border-dark border-top-0 border-end-0 border-start-0 rounded rounded-0" id="enrollmentFee" placeholder="Enrollment Fee" value={course?.sellPrice} readOnly />
                                            <label htmlFor="enrollmentFee">Enrollment Fee</label>
                                        </div>
                                    </div>
                                    <div className="col-lg">
                                        <div className="form-floating mb-1">
                                            <input type="number" className="form-control shadow-none border border-2 border-dark border-top-0 border-end-0 border-start-0 rounded rounded-0" id="milestonesCount" placeholder="No of Milestone" value={course?.milestone} readOnly />
                                            <label htmlFor="milestonesCount">No of Module</label>
                                        </div>
                                    </div>
                                </div>

                                <div className="row my-1">
                                    <div className="col-lg">
                                        <div className="form-floating mb-1">
                                            <textarea className="form-control shadow-none border border-2 border-dark border-top-0 border-end-0 border-start-0 rounded rounded-0" id="aboutUs" placeholder="About Us" value={course?.description} readOnly></textarea>
                                            <label htmlFor="aboutUs">About Us</label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row shadow shadow-lg m-3">
                                <div className="col">
                                    <div className="table-responsive">
                                        <table className="table table-hover">
                                            <thead className="sticky-top bg-white">
                                                <tr>
                                                    <th scope="col">S.NO</th>
                                                    <th scope="col">Name</th>
                                                    <th scope="col">Mentor</th>
                                                    <th scope="col">Options</th>
                                                </tr>
                                            </thead>

                                            <tbody>
                                                {currentRows?.map((tableData, index) => (
                                                    <tr key={indexOfFirstRow + index}  >
                                                        <td>{indexOfFirstRow + index + 1}</td>
                                                        <td>{tableData.name}</td>
                                                        <td>{tableData.mentor.userName}</td>
                                                        <td>
                                                            <Link to={`/ninja/Admin/course/updateModule/${tableData?._id}?milestone=${course?.milestone}`} className="rounded rounded-lg border border-2 border-success btn btn-outline-success p-1 pb-0 fw-bold me-1">
                                                                <i className="lni lni-pencil"></i>
                                                            </Link>

                                                            <Link to={`/ninja/Admin/course/view/module/${tableData?._id}`} className="rounded rounded-lg border border-2 border-dark btn btn-outline-dark p-1 pb-0 fw-bold ms-1">
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
                                        {[...Array(Math.ceil(moduleData.length / rowsPerPage)).keys()].map((number) => (
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
            )}

            {!close && <CoursePanel />}
        </>
    );
};

export default CourseMilestone;
