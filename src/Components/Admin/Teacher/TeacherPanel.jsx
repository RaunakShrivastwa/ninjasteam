import React, { useEffect, useState } from 'react'
import TeacherProfile from './TeacherProfile';
import {urlFunction} from '../../../App';
import axios from 'axios';

const TeacherPanel = () => {
    const [rowData, setRowData] = useState(0);
    const [nameValue, setNameValue] = useState("");

    // const teacherData = [
    //     {
    //         name: "AK",
    //         Joining_Data: "25/03/2002",
    //         Corse_Duration: "21 Month",
    //         Registration_Fee: 999,
    //     }, {
    //         name: "AK",
    //         Joining_Data: "25/03/2002",
    //         Corse_Duration: "21 Month",
    //         Registration_Fee: 999,
    //     }, {
    //         name: "AK",
    //         Joining_Data: "25/03/2002",
    //         Corse_Duration: "21 Month",
    //         Registration_Fee: 999,
    //     }, {
    //         name: "AK",
    //         Joining_Data: "25/03/2002",
    //         Corse_Duration: "21 Month",
    //         Registration_Fee: 999,
    //     }, {
    //         name: "AK",
    //         Joining_Data: "25/03/2002",
    //         Corse_Duration: "21 Month",
    //         Registration_Fee: 999,
    //     }, {
    //         name: "AK",
    //         Joining_Data: "25/03/2002",
    //         Corse_Duration: "21 Month",
    //         Registration_Fee: 999,
    //     }, {
    //         name: "AK",
    //         Joining_Data: "25/03/2002",
    //         Corse_Duration: "21 Month",
    //         Registration_Fee: 999,
    //     }, {
    //         name: "AK",
    //         Joining_Data: "25/03/2002",
    //         Corse_Duration: "21 Month",
    //         Registration_Fee: 999,
    //     }, {
    //         name: "AK",
    //         Joining_Data: "25/03/2002",
    //         Corse_Duration: "21 Month",
    //         Registration_Fee: 999,
    //     }, {
    //         name: "AK",
    //         Joining_Data: "25/03/2002",
    //         Corse_Duration: "21 Month",
    //         Registration_Fee: 999,
    //     }, {
    //         name: "AK",
    //         Joining_Data: "25/03/2002",
    //         Corse_Duration: "21 Month",
    //         Registration_Fee: 999,
    //     }, {
    //         name: "AK",
    //         Joining_Data: "25/03/2002",
    //         Corse_Duration: "21 Month",
    //         Registration_Fee: 999,
    //     }, {
    //         name: "AK",
    //         Joining_Data: "25/03/2002",
    //         Corse_Duration: "21 Month",
    //         Registration_Fee: 999,
    //     }, {
    //         name: "AK",
    //         Joining_Data: "25/03/2002",
    //         Corse_Duration: "21 Month",
    //         Registration_Fee: 999,
    //     }, {
    //         name: "AK",
    //         Joining_Data: "25/03/2002",
    //         Corse_Duration: "21 Month",
    //         Registration_Fee: 999,
    //     }, {
    //         name: "AK",
    //         Joining_Data: "25/03/2002",
    //         Corse_Duration: "21 Month",
    //         Registration_Fee: 999,
    //     }, {
    //         name: "AK",
    //         Joining_Data: "25/03/2002",
    //         Corse_Duration: "21 Month",
    //         Registration_Fee: 999,
    //     }, {
    //         name: "AK",
    //         Joining_Data: "25/03/2002",
    //         Corse_Duration: "21 Month",
    //         Registration_Fee: 999,
    //     }, {
    //         name: "AK",
    //         Joining_Data: "25/03/2002",
    //         Corse_Duration: "21 Month",
    //         Registration_Fee: 999,
    //     }, {
    //         name: "AK",
    //         Joining_Data: "25/03/2002",
    //         Corse_Duration: "21 Month",
    //         Registration_Fee: 999,
    //     }, {
    //         name: "AK",
    //         Joining_Data: "25/03/2002",
    //         Corse_Duration: "21 Month",
    //         Registration_Fee: 999,
    //     }, {
    //         name: "AK",
    //         Joining_Data: "25/03/2002",
    //         Corse_Duration: "21 Month",
    //         Registration_Fee: 999,
    //     }, {
    //         name: "AK",
    //         Joining_Data: "25/03/2002",
    //         Corse_Duration: "21 Month",
    //         Registration_Fee: 999,
    //     }, {
    //         name: "AK",
    //         Joining_Data: "25/03/2002",
    //         Corse_Duration: "21 Month",
    //         Registration_Fee: 999,
    //     }, {
    //         name: "AK",
    //         Joining_Data: "25/03/2002",
    //         Corse_Duration: "21 Month",
    //         Registration_Fee: 999,
    //     }, {
    //         name: "AK",
    //         Joining_Data: "25/03/2002",
    //         Corse_Duration: "21 Month",
    //         Registration_Fee: 999,
    //     }, {
    //         name: "AK",
    //         Joining_Data: "25/03/2002",
    //         Corse_Duration: "21 Month",
    //         Registration_Fee: 999,
    //     }, {
    //         name: "AK",
    //         Joining_Data: "25/03/2002",
    //         Corse_Duration: "21 Month",
    //         Registration_Fee: 999,
    //     }, {
    //         name: "AK",
    //         Joining_Data: "25/03/2002",
    //         Corse_Duration: "21 Month",
    //         Registration_Fee: 999,
    //     }, {
    //         name: "AK",
    //         Joining_Data: "25/03/2002",
    //         Corse_Duration: "21 Month",
    //         Registration_Fee: 999,
    //     }, {
    //         name: "AK",
    //         Joining_Data: "25/03/2002",
    //         Corse_Duration: "21 Month",
    //         Registration_Fee: 999,
    //     }, {
    //         name: "AK",
    //         Joining_Data: "25/03/2002",
    //         Corse_Duration: "21 Month",
    //         Registration_Fee: 999,
    //     }, {
    //         name: "AK",
    //         Joining_Data: "25/03/2002",
    //         Corse_Duration: "21 Month",
    //         Registration_Fee: 999,
    //     }, {
    //         name: "AK",
    //         Joining_Data: "25/03/2002",
    //         Corse_Duration: "21 Month",
    //         Registration_Fee: 999,
    //     }, {
    //         name: "AK",
    //         Joining_Data: "25/03/2002",
    //         Corse_Duration: "21 Month",
    //         Registration_Fee: 999,
    //     }, {
    //         name: "AK",
    //         Joining_Data: "25/03/2002",
    //         Corse_Duration: "21 Month",
    //         Registration_Fee: 999,
    //     }, {
    //         name: "AK",
    //         Joining_Data: "25/03/2002",
    //         Corse_Duration: "21 Month",
    //         Registration_Fee: 999,
    //     }, {
    //         name: "AK",
    //         Joining_Data: "25/03/2002",
    //         Corse_Duration: "21 Month",
    //         Registration_Fee: 999,
    //     }, {
    //         name: "AK",
    //         Joining_Data: "25/03/2002",
    //         Corse_Duration: "21 Month",
    //         Registration_Fee: 999,
    //     }, {
    //         name: "AK",
    //         Joining_Data: "25/03/2002",
    //         Corse_Duration: "21 Month",
    //         Registration_Fee: 999,
    //     }, {
    //         name: "AK",
    //         Joining_Data: "25/03/2002",
    //         Corse_Duration: "21 Month",
    //         Registration_Fee: 999,
    //     }, {
    //         name: "AK",
    //         Joining_Data: "25/03/2002",
    //         Corse_Duration: "21 Month",
    //         Registration_Fee: 999,
    //     }, {
    //         name: "AK",
    //         Joining_Data: "25/03/2002",
    //         Corse_Duration: "21 Month",
    //         Registration_Fee: 999,
    //     }, {
    //         name: "AK",
    //         Joining_Data: "25/03/2002",
    //         Corse_Duration: "21 Month",
    //         Registration_Fee: 999,
    //     }, {
    //         name: "AK",
    //         Joining_Data: "25/03/2002",
    //         Corse_Duration: "21 Month",
    //         Registration_Fee: 999,
    //     }
    // ]

    const [teacherData,setTeacherData] =  useState([]);

    useEffect(()=>{
        loadTeacher();
    },[]);

    const loadTeacher = async ()=>{
        try{
              const teacher =  await axios.get(urlFunction()+'user/getAll');
              setTeacherData(teacher.data.filter((data)=> data?.status=='teacher'));
        }catch(err){
            return console.log("There is Error while Loading Teachers",err);
        }
    }
    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage] = useState(10);

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
                                            <th scope="col">Email</th>
                                            <th scope="col">BIO</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {currentRows.map((tableData, index) => {
                                            return (
                                                <tr key={index} onClick={() => handleRowClick(tableData?.userEmail, index + 1 + indexOfFirstRow)} style={{ cursor: 'pointer' }}>
                                                    <td>{index + 1 + indexOfFirstRow}</td>
                                                    <td>{tableData.userName}</td>
                                                    <td>{tableData?.createdAt}</td>
                                                    <td>{tableData.userEmail}</td>
                                                    <td>{tableData?.userBio}</td>
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