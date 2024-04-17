import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import CourseMilestone from './Module/CourseMilestone';
import axios from 'axios';
import {urlFunction} from '../../../App'

const CoursePanel = () => {
  const [course, setCourse] = useState([]);
  useEffect(() => {
    loadCourse();
  }, []);

  const loadCourse = async () => {
    try {
      const courseInf0 = await axios.get(urlFunction()+`course`);
      setCourse(courseInf0?.data?.course);
    } catch (err) {
      return console.log("error in creating gather course info", err);
    }
  }

  console.log("course data ", course);

  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage] = useState(10);

  // Pagination Logic
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = course?.slice(indexOfFirstRow, indexOfLastRow);
  const paginate = pageNumber => setCurrentPage(pageNumber);

  const [courseName, setCourseName] = useState("");
  const handleRowClick = (rowIndex) => {
    setCourseName(rowIndex);
    selectedCoursePage(true);
  };

  const [coursePage, selectedCoursePage] = useState(false);

  return (
    <>
      {!coursePage && (
        <div>
          <div class="row mt-3">
            <div class="d-flex justify-content-end mb-3">
              <Link to="/ninja/Admin/course/addCourse" className="btn btn-outline-success p-0 px-2 fw-bold rounded roumded-circle">
                <span class="fs-5">Add </span>
                <i class="lni lni-circle-plus"></i>
              </Link>
            </div>

            <div class="col">
              <div class="table-responsive">
                <table class="table table-hover">
                  <thead class="sticky-top bg-white">
                    <tr>
                      <th scope="col">S.NO</th>
                      <th scope="col">Course Name</th>
                      <th scope="col">No Of Milestone</th>
                      <th scope="col">Corse Duration</th>
                      <th scope="col">Fee</th>
                      <th scope='col'>No of Student</th>
                    </tr>
                  </thead>

                  <tbody>
                    {currentRows.map((tableData, index) => {
                      return (
                        <tr key={tableData.name} onClick={() => handleRowClick(tableData?.name)} style={{ cursor: 'pointer' }}>
                          <td>{index + 1 + indexOfFirstRow}</td>
                          <td>{tableData.name}</td>
                          <td>{tableData.milestone}</td>
                          <td>{tableData.duration}</td>
                          <td>{tableData.sellPrice}</td>
                          <td>{tableData.student.length}</td>
                        </tr>
                      );
                    })}
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
        </div>
      )}

      {coursePage && (
        <CourseMilestone name={courseName} />
      )}
    </>
  )
}

export default CoursePanel