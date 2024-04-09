import React, { useState } from 'react'
import TeacherProfile from './TeacherProfile';

const TeacherPanel = () => {
    const [rowData, setRowData] = useState(0);
    const [nameValue, setNameValue] = useState("");

    const teacherData = [
        {
            name: "AK",
            Joining_Data: "25/03/2002",
            Corse_Duration: "21 Month",
            Registration_Fee: 999,
        }, {
            name: "AK",
            Joining_Data: "25/03/2002",
            Corse_Duration: "21 Month",
            Registration_Fee: 999,
        }, {
            name: "AK",
            Joining_Data: "25/03/2002",
            Corse_Duration: "21 Month",
            Registration_Fee: 999,
        }, {
            name: "AK",
            Joining_Data: "25/03/2002",
            Corse_Duration: "21 Month",
            Registration_Fee: 999,
        }, {
            name: "AK",
            Joining_Data: "25/03/2002",
            Corse_Duration: "21 Month",
            Registration_Fee: 999,
        }, {
            name: "AK",
            Joining_Data: "25/03/2002",
            Corse_Duration: "21 Month",
            Registration_Fee: 999,
        }, {
            name: "AK",
            Joining_Data: "25/03/2002",
            Corse_Duration: "21 Month",
            Registration_Fee: 999,
        }, {
            name: "AK",
            Joining_Data: "25/03/2002",
            Corse_Duration: "21 Month",
            Registration_Fee: 999,
        }, {
            name: "AK",
            Joining_Data: "25/03/2002",
            Corse_Duration: "21 Month",
            Registration_Fee: 999,
        }, {
            name: "AK",
            Joining_Data: "25/03/2002",
            Corse_Duration: "21 Month",
            Registration_Fee: 999,
        }, {
            name: "AK",
            Joining_Data: "25/03/2002",
            Corse_Duration: "21 Month",
            Registration_Fee: 999,
        }, {
            name: "AK",
            Joining_Data: "25/03/2002",
            Corse_Duration: "21 Month",
            Registration_Fee: 999,
        }, {
            name: "AK",
            Joining_Data: "25/03/2002",
            Corse_Duration: "21 Month",
            Registration_Fee: 999,
        }, {
            name: "AK",
            Joining_Data: "25/03/2002",
            Corse_Duration: "21 Month",
            Registration_Fee: 999,
        }, {
            name: "AK",
            Joining_Data: "25/03/2002",
            Corse_Duration: "21 Month",
            Registration_Fee: 999,
        }, {
            name: "AK",
            Joining_Data: "25/03/2002",
            Corse_Duration: "21 Month",
            Registration_Fee: 999,
        }, {
            name: "AK",
            Joining_Data: "25/03/2002",
            Corse_Duration: "21 Month",
            Registration_Fee: 999,
        }, {
            name: "AK",
            Joining_Data: "25/03/2002",
            Corse_Duration: "21 Month",
            Registration_Fee: 999,
        }, {
            name: "AK",
            Joining_Data: "25/03/2002",
            Corse_Duration: "21 Month",
            Registration_Fee: 999,
        }, {
            name: "AK",
            Joining_Data: "25/03/2002",
            Corse_Duration: "21 Month",
            Registration_Fee: 999,
        }, {
            name: "AK",
            Joining_Data: "25/03/2002",
            Corse_Duration: "21 Month",
            Registration_Fee: 999,
        }, {
            name: "AK",
            Joining_Data: "25/03/2002",
            Corse_Duration: "21 Month",
            Registration_Fee: 999,
        }, {
            name: "AK",
            Joining_Data: "25/03/2002",
            Corse_Duration: "21 Month",
            Registration_Fee: 999,
        }, {
            name: "AK",
            Joining_Data: "25/03/2002",
            Corse_Duration: "21 Month",
            Registration_Fee: 999,
        }, {
            name: "AK",
            Joining_Data: "25/03/2002",
            Corse_Duration: "21 Month",
            Registration_Fee: 999,
        }, {
            name: "AK",
            Joining_Data: "25/03/2002",
            Corse_Duration: "21 Month",
            Registration_Fee: 999,
        }, {
            name: "AK",
            Joining_Data: "25/03/2002",
            Corse_Duration: "21 Month",
            Registration_Fee: 999,
        }, {
            name: "AK",
            Joining_Data: "25/03/2002",
            Corse_Duration: "21 Month",
            Registration_Fee: 999,
        }, {
            name: "AK",
            Joining_Data: "25/03/2002",
            Corse_Duration: "21 Month",
            Registration_Fee: 999,
        }, {
            name: "AK",
            Joining_Data: "25/03/2002",
            Corse_Duration: "21 Month",
            Registration_Fee: 999,
        }, {
            name: "AK",
            Joining_Data: "25/03/2002",
            Corse_Duration: "21 Month",
            Registration_Fee: 999,
        }, {
            name: "AK",
            Joining_Data: "25/03/2002",
            Corse_Duration: "21 Month",
            Registration_Fee: 999,
        }, {
            name: "AK",
            Joining_Data: "25/03/2002",
            Corse_Duration: "21 Month",
            Registration_Fee: 999,
        }, {
            name: "AK",
            Joining_Data: "25/03/2002",
            Corse_Duration: "21 Month",
            Registration_Fee: 999,
        }, {
            name: "AK",
            Joining_Data: "25/03/2002",
            Corse_Duration: "21 Month",
            Registration_Fee: 999,
        }, {
            name: "AK",
            Joining_Data: "25/03/2002",
            Corse_Duration: "21 Month",
            Registration_Fee: 999,
        }, {
            name: "AK",
            Joining_Data: "25/03/2002",
            Corse_Duration: "21 Month",
            Registration_Fee: 999,
        }, {
            name: "AK",
            Joining_Data: "25/03/2002",
            Corse_Duration: "21 Month",
            Registration_Fee: 999,
        }, {
            name: "AK",
            Joining_Data: "25/03/2002",
            Corse_Duration: "21 Month",
            Registration_Fee: 999,
        }, {
            name: "AK",
            Joining_Data: "25/03/2002",
            Corse_Duration: "21 Month",
            Registration_Fee: 999,
        }, {
            name: "AK",
            Joining_Data: "25/03/2002",
            Corse_Duration: "21 Month",
            Registration_Fee: 999,
        }, {
            name: "AK",
            Joining_Data: "25/03/2002",
            Corse_Duration: "21 Month",
            Registration_Fee: 999,
        }, {
            name: "AK",
            Joining_Data: "25/03/2002",
            Corse_Duration: "21 Month",
            Registration_Fee: 999,
        }, {
            name: "AK",
            Joining_Data: "25/03/2002",
            Corse_Duration: "21 Month",
            Registration_Fee: 999,
        }, {
            name: "AK",
            Joining_Data: "25/03/2002",
            Corse_Duration: "21 Month",
            Registration_Fee: 999,
        }
    ]

    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage] = useState(8);

    // Pagination Logic
    const indexOfLastRow = currentPage * rowsPerPage;
    const indexOfFirstRow = indexOfLastRow - rowsPerPage;
    const currentRows = teacherData.slice(indexOfFirstRow, indexOfLastRow);
    const paginate = pageNumber => setCurrentPage(pageNumber);

    const [teacherSelected, setTeacherSelected] = useState(false);

    const handleRowClick = (name, rowIndex) => {
        setRowData(rowIndex);
        setNameValue(name);
        console.log(nameValue);
        setTeacherSelected(true);
    };

    return (
        <>
            {!teacherSelected && (
                <div>
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
                                            <th scope='col'>
                                                <button type="button" class="btn btn-outline-info py-1 px-2 fw-bold">
                                                    Option
                                                </button>
                                            </th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {currentRows.map((tableData, index) => {
                                            return (
                                                <tr key={index} onClick={() => handleRowClick(tableData.name, index + 1 + indexOfFirstRow)} style={{ cursor: 'pointer' }}>
                                                    <td>{index + 1 + indexOfFirstRow}</td>
                                                    <td>{tableData.name}</td>
                                                    <td>{tableData.Joining_Data}</td>
                                                    <td>{tableData.Corse_Duration}</td>
                                                    <td>{tableData.Registration_Fee}</td>
                                                    <td>
                                                        <button type="button" class="btn btn-outline-danger py-1 px-2 me-2">
                                                            <i class="fa-solid fa-trash"></i>
                                                        </button>
                                                        <button type="button" class="btn btn-outline-success py-1 px-2">
                                                            <i class="fa-solid fa-pencil"></i>
                                                        </button>
                                                    </td>
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
                            {[...Array(Math.ceil(teacherData.length / rowsPerPage)).keys()].map(number => (
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

            {teacherSelected && (
                <TeacherProfile data={rowData} identity={nameValue} />
            )}
        </>
    )
}

export default TeacherPanel