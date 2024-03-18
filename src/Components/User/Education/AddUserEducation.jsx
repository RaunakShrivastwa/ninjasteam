import React from 'react';
import { Dropdown } from 'react-bootstrap';

const AddUserEducation = ({ onCancel }) => {
    return (
        <div class="mb-3 border border-2 border-dark p-2">
            <h4>Add Eduaction</h4>
            <form class="row needs-validation g-3" novalidate>
                <div className="row g-2 ps-2">
                    <div class="col-12 col-md-6">
                        <div class="input-group has-validation">
                            <input type="text" class="form-control fw-bolder shadow-none" id="validationCustomUsername" aria-describedby="inputGroupPrepend" placeholder='College Name' required />
                            <div class="invalid-feedback">
                                Please enter a college name.
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-12 col-md-6">
                    <select class="form-select fs-6 fw-semibolder shadow-none" id="validationCustom04" required >
                        <option selected disabled value=""><em>Choose Specilization</em></option>
                        <option><em>BCA</em></option>
                        <option><em>MCA</em></option>
                        <option><em>M-Tech</em></option>
                        <option><em>B-Tech</em></option>
                        <option><em>Computer Science</em></option>
                    </select>
                    <div class="invalid-feedback">
                        Please select a valid Specilization.
                    </div>
                </div>

                <div class="col-12 col-md-6">
                    <input type="text" class="form-control fw-bolder shadow-none" id="validationCustom03" placeholder='CGPA/Percentage' required />
                    <div class="invalid-feedback">
                        Please provide a valid percentage or CGPA.
                    </div>
                </div>

                <div class="col-12 col-md-6">
                    <select class="form-select fs-6 fw-semibolder shadow-none" id="validationCustom04" required >
                        <option selected disabled value=""><em>Choose Starting Year</em></option>
                        <option><em>2010</em></option>
                        <option><em>2011</em></option>
                        <option><em>2012</em></option>
                        <option><em>2013</em></option>
                        <option><em>2014</em></option>
                        <option><em>2015</em></option>
                        <option><em>2016</em></option>
                        <option><em>2017</em></option>
                        <option><em>2018</em></option>
                        <option><em>2019</em></option>
                        <option><em>2020</em></option>
                        <option><em>2021</em></option>
                        <option><em>2022</em></option>
                        <option><em>2023</em></option>
                        <option><em>2024</em></option>
                    </select>
                    <div class="invalid-feedback">
                        Please select a valid Year.
                    </div>
                </div>

                <div class="col-12 col-md-6">
                    <select class="form-select fs-6 fw-semibolder shadow-none" id="validationCustom04" required >
                        <option selected disabled value=""><em>Choose Ending Year</em></option>
                        <option><em>2014</em></option>
                        <option><em>2015</em></option>
                        <option><em>2016</em></option>
                        <option><em>2017</em></option>
                        <option><em>2018</em></option>
                        <option><em>2019</em></option>
                        <option><em>2020</em></option>
                        <option><em>2021</em></option>
                        <option><em>2022</em></option>
                        <option><em>2023</em></option>
                        <option><em>2024</em></option>
                        <option><em>2025</em></option>
                        <option><em>2026</em></option>
                        <option><em>2027</em></option>
                        <option><em>2028</em></option>
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