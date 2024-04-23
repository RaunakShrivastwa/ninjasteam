import React from 'react'

const UserGeneralSetting = () => {
    return (
        <>
            <h3 class="fw-bolder">Personal Details</h3>



            <form class="row g-3 needs-validation" novalidate>
                <div class="col-md-6">
                    <div className="row border border-2 border-dark mt-3 rounded rounded-lg w-100" style={{ position: 'relative' }} key="phase.phaseNo">
                        <label className="d-inline" style={{ position: 'absolute', left: '50%', transform: 'translate(-50%, -50%)' }}>
                            <span className="fs-5 px-2" style={{ background: '#fff' }}>Name </span>
                        </label>
                        <input type="text" class="form-control fw-bold mt-2 border border-0 shadow-none" id="validationCustom03" required />
                        <div class="invalid-feedback">
                            Please provide a valid city.
                        </div>
                    </div>
                </div>

                <div class="col-md-6">
                    <div className="row border border-2 border-dark mt-3 rounded rounded-lg w-100" style={{ position: 'relative' }} key="phase.phaseNo">
                        <label className="d-inline" style={{ position: 'absolute', left: '50%', transform: 'translate(-50%, -50%)' }}>
                            <span className="fs-5 px-2" style={{ background: '#fff' }}>Email</span>
                        </label>
                        <input type="text" class="form-control fw-bold mt-2 border border-0 shadow-none" value="abhijeetkumar2532002@gmail.com" id="validationCustom03" readOnly />
                    </div>
                </div>

                <div class="col-md-6">
                    <div className="row border border-2 border-dark mt-3 rounded rounded-lg w-100" style={{ position: 'relative' }} key="phase.phaseNo">
                        <label className="d-inline" style={{ position: 'absolute', left: '50%', transform: 'translate(-50%, -50%)' }}>
                            <span className="fs-5 px-2" style={{ background: '#fff' }}>Contract</span>
                        </label>
                        <input type="text" class="form-control fw-bold mt-2 border border-0 shadow-none" id="validationCustom03" required />
                        <div class="invalid-feedback">
                            Please provide a valid city.
                        </div>
                    </div>
                </div>

                <div class="col-md-6">
                    <div className="row border border-2 border-dark mt-3 rounded rounded-lg w-100" style={{ position: 'relative' }} key="phase.phaseNo">
                        <label className="d-inline" style={{ position: 'absolute', left: '50%', transform: 'translate(-50%, -50%)' }}>
                            <span className="fs-5 px-2" style={{ background: '#fff' }}>Time-Zone</span>
                        </label>
                        <input type="text" class="form-control fw-bold mt-2 border border-0 shadow-none" id="validationCustom03" required />
                        <div class="invalid-feedback">
                            Please provide a valid city.
                        </div>
                    </div>
                </div>

                <hr />

                <div class="col-md-6">
                    <div className="row border border-2 border-dark mt-2 rounded rounded-lg w-100" style={{ position: 'relative' }} key="phase.phaseNo">
                        <label className="d-inline" style={{ position: 'absolute', left: '50%', transform: 'translate(-50%, -50%)' }}>
                            <span className="fs-5 px-2" style={{ background: '#fff' }}>OTP</span>
                        </label>
                        <div className="d-flex justify-content-center w-100">
                            <input type="text" class="form-control fw-bold mt-2 border border-0 shadow-none w-100" id="validationCustom03" placeholder='Enter your verify OTP' required />
                            <button class="btn btn-primary my-1" type="submit">Verify</button>
                            <div class="invalid-feedback">
                                Please provide a valid city.
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-md-6">
                    <div className="row border border-2 border-dark mt-2 rounded rounded-lg w-100" style={{ position: 'relative' }} key="phase.phaseNo">
                        <label className="d-inline" style={{ position: 'absolute', left: '50%', transform: 'translate(-50%, -50%)' }}>
                            <span className="fs-5 px-2" style={{ background: '#fff' }}>Number</span>
                        </label>
                        <div className="d-flex justify-content-center w-100">
                            <input type="text" class="form-control fw-bold mt-2 border border-0 shadow-none w-100" id="validationCustom03" placeholder='Enter your Number' required />
                            <button class="btn btn-primary my-1" type="submit">Verify</button>
                            <div class="invalid-feedback">
                                Please provide a valid city.
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-md-6">
                    <div className="row border border-2 border-dark mt-2 rounded rounded-lg w-100" style={{ position: 'relative' }} key="phase.phaseNo">
                        <label className="d-inline" style={{ position: 'absolute', left: '50%', transform: 'translate(-50%, -50%)' }}>
                            <span className="fs-5 px-2" style={{ background: '#fff' }}>Reset Password</span>
                        </label>
                        <input type="text" class="form-control fw-bold mt-2 border border-0 shadow-none" id="validationCustom03" required />
                        <div class="invalid-feedback">
                            Please provide a valid city.
                        </div>
                    </div>
                </div>
                <div class="d-grid gap-2 d-md-flex justify-content-md-between">
                    <button class="btn btn-outline-success me-md-2 fw-bold" type="Submit">Submit</button>
                    <button class="btn btn-outline-warning fw-bold" type="button">Reset Password</button>
                </div>
            </form>
        </>
    )
}

export default UserGeneralSetting