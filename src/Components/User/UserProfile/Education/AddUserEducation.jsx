import React, { useState } from 'react';
import axios from 'axios';
import {urlFunction} from '../../../../App'

const AddUserEducation = ({user,updateWorkExperience,onCancel }) => {
    
    const [collegeName,setCollegeName] = useState('');
    const [course,setCourse] = useState('');
    const [grade,setGrade] = useState('');
    const [startYear,setStartYear] = useState('');
    const [endYear,setEndYear] = useState('');

    const handleSubmit = async (e)=>{
        e.preventDefault();
        const body = {
            collegeName,course,grade,startYear,endYear,user:user?.userEmail
        };
        console.log("education ",body);
       const res = await axios.post(urlFunction()+`education/add/${user?.userEmail}`,body)
       updateWorkExperience(res.data)
    }
    return (
        <div class="mb-3 border border-2 border-dark p-2">
            <h4>Add Eduaction</h4>
            <form class="row needs-validation g-3" novalidate onSubmit={handleSubmit}>

                {/* for the collegeName */}
                <div className="row g-2 ps-2">
                    <div class="col-12 col-md-6">
                        <div class="input-group has-validation">
                            <input type="text" value={collegeName} onChange={(e)=>setCollegeName(e.target.value)} class="form-control fw-bolder shadow-none" id="validationCustomUsername" aria-describedby="inputGroupPrepend" placeholder='College Name' required />
                            <div class="invalid-feedback">
                                Please enter a college name.
                            </div>
                        </div>
                    </div>
                </div>

                {/* for the course */}
                <div class="col-12 col-md-6">
                    <select class="form-select fs-6 fw-semibolder shadow-none" id="validationCustom04" required onChange={(e) => setCourse(e.target.value)} value={course}>
                        <option selected disabled value=""><em>Choose Specilization</em></option>
                        <option value='BCA'><em>BCA</em></option>
                        <option value='MCA'><em>MCA</em></option>
                        <option value='M-Tech'><em>M-Tech</em></option>
                        <option value='B-Tech'><em>B-Tech</em></option>
                        <option value='Computer Science'><em>Computer Science</em></option>
                    </select>
                    <div class="invalid-feedback">
                        Please select a valid Specilization.
                    </div>
                </div>

                {/* for the grade */}
                <div class="col-12 col-md-6">
                    <input value={grade} onChange={(e)=>setGrade(e.target.value)} type="text" class="form-control fw-bolder shadow-none" id="validationCustom03" placeholder='CGPA/Percentage' required />
                    <div class="invalid-feedback">
                        Please provide a valid percentage or CGPA.
                    </div>
                </div>

                {/* for the Start Year */}
                <div class="col-12 col-md-6">
                    <select class="form-select fs-6 fw-semibolder shadow-none" id="validationCustom04" required onChange={(e)=>setStartYear(e.target.value)} value={startYear}>
                        <option selected disabled value=""><em>Choose Starting Year</em></option>
                        <option value='2010'><em>2010</em></option>
                        <option value='2011'><em>2011</em></option>
                        <option value='2012'><em>2012</em></option>
                        <option value='2013'><em>2013</em></option>
                        <option value='2014'><em>2014</em></option>
                        <option value='2015'><em>2015</em></option>
                        <option value='2016'><em>2016</em></option>
                        <option value='2017'><em>2017</em></option>
                        <option value='2018'><em>2018</em></option>
                        <option value='2019'><em>2019</em></option>
                        <option value='2020'><em>2020</em></option>
                        <option value='2021'><em>2021</em></option>
                        <option value='2022'><em>2022</em></option>
                        <option value='2023'><em>2023</em></option>
                        <option value='2024'><em>2024</em></option>
                    </select>
                    <div class="invalid-feedback">
                        Please select a valid Year.
                    </div>
                </div>

                {/* for the End Year */}
                <div class="col-12 col-md-6">
                    <select class="form-select fs-6 fw-semibolder shadow-none" id="validationCustom04" required onChange={(e)=>setEndYear(e.target.value)} value={endYear}>
                        <option selected disabled value=""><em>Choose Ending Year</em></option>
                        <option value='2014'><em>2014</em></option>
                        <option value='2015'><em>2015</em></option>
                        <option value='2016'><em>2016</em></option>
                        <option value='2017'><em>2017</em></option>
                        <option value='2018'><em>2018</em></option>
                        <option value='2019'><em>2019</em></option>
                        <option value='2020'><em>2020</em></option>
                        <option value='2021'><em>2021</em></option>
                        <option value='2022'><em>2022</em></option>
                        <option value='2023'><em>2023</em></option>
                        <option value='2024'><em>2024</em></option>
                        <option value='2025'><em>2025</em></option>
                        <option value='2026'><em>2026</em></option>
                        <option value='2027'><em>2027</em></option>
                        <option value='2028'><em>2028</em></option>
                    </select>
                    <div class="invalid-feedback">
                        Please select a valid Year.
                    </div>
                </div>

                <div class="col-12">
                    <button class="btn btn-primary fw-bolder fs-6" type="submit">Submit</button>
                    <button className="btn btn-danger ms-2 fw-bolder fs-6"
                        type="button" onClick={onCancel}>Cancel</button>
                </div>
            </form>
        </div>
    )
}

export default AddUserEducation