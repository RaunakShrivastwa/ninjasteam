import React from 'react';

const AddUserProject = ({ onCancel }) => {
    return (
        <div class="mb-3 border border-2 border-dark p-2 rounded rounded-lg">
            <h4>Add Project</h4>
            <form class="row needs-validation g-3" novalidate>
                <div class="col-12 col-md-6">
                    <div class="input-group has-validation">
                        <input type="text" class="form-control fw-bolder shadow-none"
                            id="validationCustomUsername" aria-describedby="inputGroupPrepend"
                            placeholder='Project title' required />
                        <div class="invalid-feedback">
                            Please enter a project name.
                        </div>
                    </div>
                </div>

                <div class="col-12 col-md-6">
                    <div class="input-group has-validation">
                        <input type="text" class="form-control fw-bolder shadow-none"
                            id="validationProject" aria-describedby="inputGroupPrepend"
                            placeholder='Guided By' required />
                        <div class="invalid-feedback">
                            Please enter a project name.
                        </div>
                    </div>
                </div>

                <div class="col-12 col-md-6">
                    <select class="form-select fs-6 fw-semibolder shadow-none" id="validationCustom04" required >
                        <option selected disabled value=""><em>Choose Starting Date</em></option>
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
                        <option selected disabled value=""><em>Choose Ending Date</em></option>
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
                        <option><em>Present</em></option>
                    </select>
                    <div class="invalid-feedback">
                        Please select a valid Year.
                    </div>
                </div>

                <div class="col-12">
                    <textarea class="form-control fw-bolder shadow-none" placeholder="About your work experiense" id="validationCustom03"></textarea>
                    <div class="invalid-feedback">
                        Please provide a valid work experiense.
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

export default AddUserProject