import React from 'react';
import { useLocation } from 'react-router-dom';

const AddCourseMilestone = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);

    const courseName = searchParams.get('courseName');
    const noOfMilestone = searchParams.get('noOfMilestone');

    var module = noOfMilestone;
    let options = [];
    (
        (iteration) => {
            for (let index = 0; index < iteration; index++) {
                if (index != 0) {
                    options.push(
                        <option class="fs-6 fw-bold"> Milestone {index + 1} </option>
                    )
                } else {
                    options.push(
                        <option class="fs-6 fw-bold" selected> Milestone {index + 1} </option>
                    )
                }
            }
        }
    )(module)


    return (
        <>
            <div class="mx-3">
                <div className="d-flex justify-content-between mt-5">
                    <span className="h4 fw-bold">
                        Course / <span class="text-info">Add Module</span>
                    </span>
                </div>

                <form>
                    <div className="card mt-4 border border-2 border-dark">
                        <div className="card-body my-0 py-0">
                            {/* Display course name and number of milestones */}
                            <div className="row my-1">
                                <div className="col-md">
                                    <div className="form-floating mb-1">
                                        <input type="email" className="form-control shadow-none border border-2 border-dark border-top-0 border-end-0 border-start-0 rounded rounded-0" id="floatingInput" value={courseName} readOnly />
                                        <label htmlFor="floatingInput">Course Name</label>
                                    </div>
                                </div>
                                <div className="col-md">
                                    <div className="form-floating mb-1">
                                        <input type="email" className="form-control shadow-none border border-2 border-dark border-top-0 border-end-0 border-start-0 rounded rounded-0" id="floatingInput" value={module} readOnly />
                                        <label htmlFor="floatingInput">No of Milestone</label>
                                    </div>
                                </div>
                            </div>

                            {/* Render milestones */}
                            <div className="row row-cols-1 my-2 mx-0 ">
                                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 my-2">
                                    <div className="col">
                                        <div class="input-group mt-2 pt-2">
                                            <select class="fs-5 fw-bold form-select border border-2 border-dark border-top-0 border-end-0 border-start-0 rounded rounded-0 shadow shadow-none" id="inputGroupSelect01">
                                                <option selected class="fs-6">Milestone</option>
                                                {options}
                                            </select>

                                            <input type="text" className="form-control shadow-none border border-2 border-dark border-top-0 border-end-0 border-start-0 rounded rounded-0" id="milestoneDescription" placeholder='Write title ' />
                                        </div>
                                    </div>

                                    <div className="col">
                                        <div className="form-floating mb-1">
                                            <input type="text" className="form-control shadow-none border border-2 border-dark border-top-0 border-end-0 border-start-0 rounded rounded-0" id="milestoneDescription" placeholder='Enter title for milestone' />

                                            <label htmlFor="milestoneDescription">Description</label>
                                        </div>
                                    </div>

                                    <div className="col">
                                        <div class="input-group mt-2 pt-2">
                                            <label class="input-group-text border border-2 border-dark border-top-0 border-end-0 border-start-0 rounded rounded-0 shadow shadow-none bg-transparent fw-bold fs-5" for="inputGroupSelect01"> Mentor
                                            </label>

                                            <select class="fw-bold form-select border border-2 border-dark border-top-0 border-end-0 border-start-0 rounded rounded-0 shadow shadow-none" id="inputGroupSelect01">
                                                <option selected>Choose Mentor</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Form control button */}
                            <div class="d-flex justify-content-end my-1">
                                <button class="btn btn-danger m-1 fw-bold d-flex align-items-center" type="reset">
                                    <i class="lni lni-cross-circle me-1"></i> Reset
                                </button>

                                <button class="btn btn-success m-1 fw-bold d-flex align-items-center" type="submit">
                                    <i class="lni lni-save me-1"></i> Save
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
};

export default AddCourseMilestone;
