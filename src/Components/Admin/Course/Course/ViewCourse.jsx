import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { urlFunction } from '../../../../App';

const ViewCourse = () => {
    const { name } = useParams(); // Extract 'name' parameter from URL using useParams hook
    console.log(`name of the course is ${name}`);

    const [course, setCourse] = useState(); // State to hold course data
    useEffect(() => {
        loadCourse(); // Load course data when component mounts
    }, []);

    // Function to fetch course data
    const loadCourse = async () => {
        try {
            const courseInfo = await axios.get(urlFunction() + `course/courseName/${name}`); // Fetch course details by name
            setCourse(courseInfo?.data); // Set course state with fetched data
        } catch (err) {
            console.log("error in fetching course info", err); // Log error if course data retrieval fails
        }
    }

    const moduleData = course?.modules || []; // Extract module data from course or initialize as empty array if course is not yet loaded

    const [currentPage, setCurrentPage] = useState(1); // State for current page of module data
    const [rowsPerPage] = useState(4); // Number of rows to display per page
    const indexOfLastRow = currentPage * rowsPerPage;
    const indexOfFirstRow = indexOfLastRow - rowsPerPage;
    const currentRows = moduleData.slice(indexOfFirstRow, indexOfLastRow);

    // Function to handle pagination
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <>
            {/* Main Content */}
            <div className="mt-2 mx-0 mx-md-5">
                {/* Page Header */}
                <div className="d-flex justify-content-between">
                    <div className="d-flex align-items-end">
                        <span className="h4 fw-bold">
                            View Course
                        </span>
                    </div>

                    {/* Action Button to Add Module */}
                    <div className="d-flex">
                        <Link to={`/ninja/Admin/course/addModule?courseName=${course?.name}&noOfMilestone=${course?.milestone}`} className="btn d-flex align-items-center border border-2 border-success me-2 my-1 mb-md-0">
                            <i className="lni lni-plus"></i>
                            <span className="ms-1"> Add</span>
                        </Link>
                    </div>
                </div>

                {/* Course Details */}
                <div className="card mt-3 border border-2 border-dark">
                    <div className="card-body m-0 py-0">
                        <div className="card-body my-0 py-0">
                            <div className="row my-1">
                                {/* Display Course Name */}
                                <div className="col-lg">
                                    <div className="form-floating mb-1">
                                        <input type="text" className="form-control shadow-none border border-2 border-dark border-top-0 border-end-0 border-start-0 rounded rounded-0" id="courseName" placeholder="Course Name" value={course?.name} readOnly />
                                        <label htmlFor="courseName">Course Name</label>
                                    </div>
                                </div>

                                {/* Display Course Duration */}
                                <div className="col-lg">
                                    <div className="form-floating mb-1">
                                        <input type="text" className="form-control shadow-none border border-2 border-dark border-top-0 border-end-0 border-start-0 rounded rounded-0" id="courseDuration" placeholder="Course Duration" value={course?.duration} readOnly />
                                        <label htmlFor="courseDuration">Course Duration</label>
                                    </div>
                                </div>
                            </div>

                            <div className="row my-1">
                                {/* Display Enrollment Fee */}
                                <div className="col-lg">
                                    <div className="form-floating mb-1">
                                        <input type="text" className="form-control shadow-none border border-2 border-dark border-top-0 border-end-0 border-start-0 rounded rounded-0" id="enrollmentFee" placeholder="Enrollment Fee" value={course?.sellPrice} readOnly />
                                        <label htmlFor="enrollmentFee">Enrollment Fee</label>
                                    </div>
                                </div>
                                {/* Display Number of Modules */}
                                <div className="col-lg">
                                    <div className="form-floating mb-1">
                                        <input type="number" className="form-control shadow-none border border-2 border-dark border-top-0 border-end-0 border-start-0 rounded rounded-0" id="milestonesCount" placeholder="No of Milestone" value={course?.milestone} readOnly />
                                        <label htmlFor="milestonesCount">No of Module</label>
                                    </div>
                                </div>
                            </div>

                            {/* Display Course Description */}
                            <div className="row my-1">
                                <div className="col-lg">
                                    <div className="form-floating mb-1">
                                        <textarea className="form-control shadow-none border border-2 border-dark border-top-0 border-end-0 border-start-0 rounded rounded-0" id="aboutUs" placeholder="About Us" value={course?.description} readOnly></textarea>
                                        <label htmlFor="aboutUs">About Us</label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Table of Modules */}
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
                                            {/* Map through current rows of modules */}
                                            {currentRows?.map((tableData, index) => (
                                                <tr key={indexOfFirstRow + index}>
                                                    <td>{indexOfFirstRow + index + 1}</td>
                                                    <td>{tableData?.name}</td>
                                                    <td>{tableData?.mentor?.userName}</td>
                                                    <td>
                                                        {/* Link to Update Module */}
                                                        <Link to={`/ninja/Admin/course/updateModule/${tableData?._id}?milestone=${course?.milestone}`} className="rounded rounded-lg border border-2 border-success btn btn-outline-success p-1 pb-0 fw-bold me-1">
                                                            <i className="lni lni-pencil"></i>
                                                        </Link>
                                                        {/* Link to View Module Details */}
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
                                    {/* Generate pagination buttons */}
                                    {[...Array(Math.ceil(moduleData.length / rowsPerPage)).keys()].map((number) => (
                                        <li key={number} className={`page-item ${currentPage === number + 1 ? 'active' : ''}`}>
                                            {/* Clickable pagination button */}
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

export default ViewCourse;