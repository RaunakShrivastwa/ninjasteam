import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { urlFunction } from '../../../App';

const CoursePanel = () => {
  // State to hold the list of courses
  const [course, setCourse] = useState([]);

  // State for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage] = useState(8);

  useEffect(() => {
    // Function to fetch the list of courses when component mounts
    const loadCourse = async () => {
      try {
        const courseInfo = await axios.get(urlFunction() + `course`);
        setCourse(courseInfo?.data?.course);
      } catch (err) {
        console.log("Error fetching course info:", err);
      }
    };

    loadCourse(); // Call the loadCourse function
  }, []);

  // Pagination Logic
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = course?.slice(indexOfFirstRow, indexOfLastRow);
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <>
      <div className="row mt-4">
        <div className="d-flex justify-content-between mb-4">
          <div className="d-flex align-items-end">
            <span className="h4 fw-bold">
              List of courses
            </span>
          </div>

          {/* Link to add a new course */}
          <div className="d-flex">
            <Link to="/ninja/Admin/course/addCourse" className="btn btn-outline-success p-0 px-2 fw-bold rounded rounded-circle">
              <span className="fs-5">Add</span>
              <i className="lni lni-circle-plus"></i>
            </Link>
          </div>
        </div>

        <div className="col">
          <div className="table-responsive">
            {/* Table displaying course information */}
            <table className="table table-hover">
              <thead className="sticky-top bg-white">
                <tr>
                  <th scope="col">S.NO</th>
                  <th scope="col">Course Name</th>
                  <th scope="col">No Of Milestones</th>
                  <th scope="col">Fee</th>
                  <th scope='col'>No of Students</th>
                  <th scope="col">Option</th>
                </tr>
              </thead>

              <tbody>
                {currentRows.map((tableData, index) => (
                  <tr key={tableData?.name} style={{ cursor: 'pointer' }}>
                    <td>{index + 1 + indexOfFirstRow}</td>
                    <td>{tableData?.name}</td>
                    <td>{tableData?.milestone}</td>
                    <td>{tableData?.sellPrice}</td>
                    <td>{tableData?.student.length}</td>
                    <td>
                      {/* Link to update a course */}
                      <Link to={`/ninja/Admin/course/updateCourse/${tableData?.name}`} className="rounded rounded-lg border border-2 border-success btn btn-outline-success p-1 pb-0 fw-bold me-1">
                        <i className="lni lni-pencil"></i>
                      </Link>

                      {/* Link to view a course */}
                      <Link to={`/ninja/Admin/course/viewCourse/${tableData?.name}`} className="rounded rounded-lg border border-2 border-dark btn btn-outline-dark p-1 pb-0 fw-bold ms-1">
                        <i className="lni lni-eye"></i>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Pagination */}
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center">
          {[...Array(Math.ceil(course.length / rowsPerPage)).keys()].map(number => (
            <li key={number} className={`page-item ${currentPage === number + 1 ? 'active' : ''}`}>
              <button onClick={() => paginate(number + 1)} className="page-link shadow-none">
                {number + 1}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}

export default CoursePanel;