import React, { useEffect, useState } from 'react'
import StudentProfile from './StudentProfile';
import {urlFunction} from '../../../App'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const StudentPanel = () => {
    // const studentData = [
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
    //     }
    // ]

    const [ids,setIds] = useState('');

    const [studentData,setStudentData] =  useState([]);

    const history =  useNavigate();

    useEffect(()=>{
        loadStudents();
    },[]);

    const loadStudents = async ()=>{
        try{
              const student =  await axios.get(urlFunction()+'user/getAll');
              setStudentData(student.data.filter((data)=> data?.status=='student'));
        }catch(err){
            return console.log("There is Error while Loading students",err);
        }
    }
    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage] = useState(10);


    // Pagination Logic
    const indexOfLastRow = currentPage * rowsPerPage;
    const indexOfFirstRow = indexOfLastRow - rowsPerPage;
    const currentRows = studentData.slice(indexOfFirstRow, indexOfLastRow);
    const paginate = pageNumber => setCurrentPage(pageNumber);

    const [studentProfile, setStudentProfile] = useState(true);


    const handleRowClick = (rowData,id) => {
        console.log(rowData);
        setIds('');
        setIds(id);
        // setStudentProfile(false);
        history(`/ninja/user/profile/${id}`)
        
    };

    return (
        <>
            {studentProfile && (
                <>
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
                                            <th scope="col">Contact</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {currentRows.map((tableData, index) => {
                                            return (
                                                <tr key={index} onClick={() => handleRowClick(index + 1 + indexOfFirstRow,tableData.userEmail)} style={{ cursor: 'pointer' }}>
                                                    <td>{index + 1 + indexOfFirstRow}</td>
                                                    <td>{tableData?.userName}</td>
                                                    <td>{tableData?.createdAt}</td>
                                                    <td>{tableData?.userEmail}</td>
                                                    <td>{tableData?.userMob}</td>
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
                </>
            )}

            {!studentProfile && (
                <StudentProfile id={ids}/>
            )}
        </>
    )
}

export default StudentPanel