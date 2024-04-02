import axios from 'axios';
import React, { useState } from 'react'

const AddUserWorkExperse = ({updateWorkExperience,user,onCancel }) => {
    const [name, setName] = useState();
    const [start, SetStart] = useState();
    const [end, setEnd] = useState();
    const [desc, setDesc] = useState();
    const [role, setRole] = useState();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const body = {
            name: name,
            role: role,
            join_year:start,
            end_year:end,
            summry:desc,
            user:user?.userEmail
        }
        try{
             const addExp = await axios.post(`http://localhost:4000/exprience/add/${user?.userEmail}`,body);
             console.log(addExp.data);
             updateWorkExperience(addExp.data)
             setName('');
             setRole('');
             SetStart('');
             setEnd('');
             setDesc('');
        }catch(err){
            return console.log("There is Error ",err);
        }
    }

    return (
        <div class="mb-3 border border-2 border-dark p-2 rounded rounded-lg">
            <h4>Add Working Experience</h4>
            <form class="row needs-validation g-3" novalidate onSubmit={handleSubmit}>
                <div class="col-12 col-md-6">
                    <div class="input-group has-validation">
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} class="form-control fw-bolder shadow-none"
                            id="validationCustomUsername" aria-describedby="inputGroupPrepend"
                            placeholder='Originsation Name' required />
                        <div class="invalid-feedback">
                            Please enter a college name.
                        </div>
                    </div>
                </div>

                <div className="col-12 col-md-6">
                    {/* for the name */}
                    <select className="form-select fs-6 fw-semibolder shadow-none" id="validationCustom04" required onChange={(e) => setRole(e.target.value)} value={role}>
                        <option selected disabled><em>Choose Role</em></option>
                        <option value="Frontend developer"><em>Frontend developer</em></option>
                        <option value="Backend developer"><em>Backend developer</em></option>
                        <option value="Fullstack developer"><em>Fullstack developer</em></option>
                    </select>
                    <div className="invalid-feedback">
                        Please select a valid Role.
                    </div>
                </div>

                {/* for the start year */}
                <div class="col-12 col-md-6">
                    <select class="form-select fs-6 fw-semibolder shadow-none" id="validationCustom04" required onChange={(e) => SetStart(e.target.value)} value={start}>
                        <option selected disabled value=""><em>Choose Joining Year</em></option>
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

                    {/* for the end */}
                <div class="col-12 col-md-6">
                    <select class="form-select fs-6 fw-semibolder shadow-none" id="validationCustom04" required onChange={(e) => setEnd(e.target.value)} value={end}>
                        <option selected disabled value=""><em>Choose Ending Year</em></option>
                        <option value='2014'><em>2014</em></option>
                        <option value='2015'><em>2015</em></option>
                        <option value='2016'><em>2016</em></option>
                        <option value='2017'><em>2017</em></option>
                        <option value='2018'><em>2018</em></option>
                        <option value='2019'><em>2019</em></option>
                        <option value='2020'><em>2020</em></option>
                        <option  value='2021'><em>2021</em></option>
                        <option  value='2022'><em>2022</em></option>
                        <option  value='2023'><em>2023</em></option>
                        <option  value='2024'><em>2024</em></option>
                        <option  value='2025'><em>2025</em></option>
                        <option  value='2026'><em>2026</em></option>
                        <option  value='2027'><em>2027</em></option>
                        <option  value='2028'><em>2028</em></option>
                        <option  value='present'><em>Present</em></option>
                    </select>
                    <div class="invalid-feedback">
                        Please select a valid Year.
                    </div>
                </div>

                {/* for the desc */}
                <div class="col-12">
                    <textarea class="form-control fw-bolder shadow-none" value={desc} onChange={(e)=>setDesc(e.target.value)} placeholder="About your work experiense" id="validationCustom03"></textarea>
                    
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

export default AddUserWorkExperse