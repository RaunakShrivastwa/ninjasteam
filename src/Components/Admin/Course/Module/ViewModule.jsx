import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { urlFunction } from '../../../../App';

const ViewModule = () => {
    const {id} = useParams();
    const [module, setModule] = useState();

    // Load module data based on the provided ID when the component mounts or when the ID changes
    useEffect(() => {
        loadModule();
    }, [id]);

    // Function to fetch module data from the server
    const loadModule = async () => {
        try {
            const getModule = await axios.get(urlFunction() + `module/singleMod/${id}`);
            setModule(getModule.data);
            console.log("Fetched module info:", getModule.data);
        } catch (error) {
            console.log(`Error loading module: ${error}`);
        }
    };

    // Pagination variables and functions
    const moduleData = module?.chapter || [];
    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage] = useState(4);
    const indexOfLastRow = currentPage * rowsPerPage;
    const indexOfFirstRow = indexOfLastRow - rowsPerPage;
    const currentRows = moduleData.slice(indexOfFirstRow, indexOfLastRow);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <>
            <div className="mt-4 mx-0 mx-md-5">
                {/* Course Header */}
                <div className="d-flex justify-content-between">
                    <div className="d-flex align-items-end">
                        <span className="h4 fw-bold">
                            Course / <span className="text-info">View Module</span>
                        </span>
                    </div>
                    {/* Add Button */}
                    <div className="d-flex">
                        <Link to={`/ninja/Admin/course/module/addChapter/${id}`} className="btn d-flex align-items-center border border-2 border-success me-2 my-1 mb-md-0">
                            <i className="lni lni-plus"></i>
                            <span className="ms-1"> Add</span>
                        </Link>
                    </div>
                </div>

                {/* Module Details Card */}
                <div className="card mt-3 border border-2 border-dark">
                    <div className="card-body m-0 py-0">
                        {/* Module Information */}
                        <div className="card-body my-0 py-0">
                            <div className="row my-1">
                                <div className="col-lg">
                                    <div className="form-floating mb-1 fw-bold">
                                        <input type="text" className="form-control shadow-none border border-2 border-dark border-top-0 border-end-0 border-start-0 rounded rounded-0" id="courseName" placeholder="Course Name" value={module?.enrollCourse} readOnly />
                                        <label htmlFor="courseName">Course Name</label>
                                    </div>
                                </div>
                                <div className="col-lg">
                                    <div className="form-floating mb-1 fw-bold">
                                        <input type="text" className="form-control shadow-none border border-2 border-dark border-top-0 border-end-0 border-start-0 rounded rounded-0" id="courseDuration" placeholder="Course Duration" value={module?.name} readOnly />
                                        <label htmlFor="courseDuration">Module Name</label>
                                    </div>
                                </div>
                            </div>
                            <div className="row my-1">
                                <div className="col-lg">
                                    <div className="form-floating mb-1 fw-bold">
                                        <input type="text" className="form-control shadow-none border border-2 border-dark border-top-0 border-end-0 border-start-0 rounded rounded-0" id="enrollmentFee" placeholder="Enrollment Fee" value={module?.desc} readOnly />
                                        <label htmlFor="enrollmentFee">Module Description</label>
                                    </div>
                                </div>
                                <div className="col-lg">
                                    <div className="form-floating mb-1 fw-bold">
                                        <input type="text" className="form-control shadow-none border border-2 border-dark border-top-0 border-end-0 border-start-0 rounded rounded-0" id="milestonesCount" placeholder="No of Milestone" value={module?.mentor?.userName} readOnly />
                                        <label htmlFor="milestonesCount">Mentor Name</label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Module Chapters Table */}
                        <div className="row shadow shadow m-3">
                            <div className="col">
                                <div className="table-responsive">
                                    <table className="table table-hover">
                                        <thead className="sticky-top bg-white">
                                            <tr>
                                                <th scope="col">S.NO</th>
                                                <th scope="col">Name</th>
                                                <th scope="col">No of topics</th>
                                                <th scope="col">Options</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {/* Render rows for current page of module chapters */}
                                            {currentRows?.map((tableData, index) => (
                                                <tr key={indexOfFirstRow + index}>
                                                    <td>{indexOfFirstRow + index + 1}</td>
                                                    <td>{tableData?.name}</td>
                                                    <td>{tableData?.SubTopic.length}</td>
                                                    <td>
                                                        {/* Edit Chapter Link */}
                                                        <Link to={`/ninja/Admin/course/module/updateChapter/${tableData._id}?course=${module?.enrollCourse}`} className="rounded rounded-lg border border-2 border-success btn btn-outline-success p-1 pb-0 fw-bold me-1">
                                                            <i className="lni lni-pencil"></i>
                                                        </Link>
                                                        {/* View Chapter Link */}
                                                        <Link to={`/ninja/Admin/course/module/viewChapter/${tableData._id}?course=${module?.enrollCourse}`} className="rounded rounded-lg border border-2 border-dark btn btn-outline-dark p-1 pb-0 fw-bold ms-1">
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
                                    {/* Render pagination buttons based on number of rows */}
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
        </>
    );
};

export default ViewModule;