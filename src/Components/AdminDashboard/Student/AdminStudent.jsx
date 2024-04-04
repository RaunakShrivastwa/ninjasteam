import React, { useState } from 'react'
import StudentProfile from './StudentProfile';

const AdminStudent = ({studentData}) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage] = useState(10);


    // Pagination Logic
    const indexOfLastRow = currentPage * rowsPerPage;
    const indexOfFirstRow = indexOfLastRow - rowsPerPage;
    const currentRows = studentData.slice(indexOfFirstRow, indexOfLastRow);
    const paginate = pageNumber => setCurrentPage(pageNumber);

    const handleRowClick = (rowData) => {
        // <StudentProfile id={rowData} />
        console.log(rowData);
    };
    return (
        <>
            <div class="rounded rounded-lg float-end d-inline-block border border-2 border-dark">
                <div class="input-group">
                    <input type="text" class="border border-0 shadow-none form-control" placeholder="Email ID" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                    <span class="border border-0 input-group-text bg-transparent" id="basic-addon2">
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </span>
                </div>
            </div>
            <div class="">
                <div class="row mt-5">
                    <div class="col">
                        <div class="table-responsive">
                            <table class="table table-hover">
                                <thead class="sticky-top bg-white">
                                    <tr>
                                        <th scope="col">S.NO</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Joining Data</th>
                                        <th scope="col">Corse Duration</th>
                                        <th scope="col">Registration Fee</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {currentRows.map((tableData, index) => {
                                        return (
                                            <tr key={index} onClick={() => handleRowClick(index + 1 + indexOfFirstRow)} style={{ cursor: 'pointer' }}>
                                                <td>{index + 1 + indexOfFirstRow}</td>
                                                <td>{tableData.name}</td>
                                                <td>{tableData.Joining_Data}</td>
                                                <td>{tableData.Corse_Duration}</td>
                                                <td>{tableData.Registration_Fee}</td>
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
                        {[...Array(Math.ceil(studentData.length / rowsPerPage)).keys()].map(number => (
                            <li key={number} className={`page-item ${currentPage === number + 1 ? 'active' : ''}`}>
                                <button onClick={() => paginate(number + 1)} className="page-link shadow-none">
                                    {number + 1}
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>

            <StudentProfile />
        </>
    )
}

export default AdminStudent