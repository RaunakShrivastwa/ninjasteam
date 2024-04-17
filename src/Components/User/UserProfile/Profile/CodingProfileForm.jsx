import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faPlus } from '@fortawesome/free-solid-svg-icons';

const CodingProfileForm = ({noOfLinks}) => {
    const [abhiCount, setAbhiCount] = useState(1);

    const handleAddAbhi = () => {
        if (abhiCount < 4) {
            setAbhiCount(abhiCount + 1);
        }
    };

    const handleDeleteAbhi = () => {
        if (abhiCount > 1) {
            setAbhiCount(abhiCount - 1);
        }
    };

    return (
        <>
            <div className="card shuAbh">
                <div className="card-body">
                    <form className="row g-2 needs-validation" noValidate>
                        {[...Array(abhiCount)].map((_, index) => (
                            <div className="row mt-2" key={index}>
                                <div className="col-md-4">
                                    <div className="card h-100">
                                        <select className="form-select shadow-none" id={`validationCustom04-${index}`} required>
                                            <option selected>Leetcode</option>
                                            <option>Hackerrank</option>
                                            <option>Stack Overflow</option>
                                            <option>GreekForGreek</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-7">
                                    <div className="card h-100">
                                        <input type="text" className="form-control shadow-none" placeholder='Add Links' id={`validationCustom02-${index}`} value="" required />
                                        <div className="invalid-feedback">
                                            Please provide a valid link.
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-1">
                                    <div className="card h-100 d-flex justify-content-center border border-0 ">
                                        <button type="button" className="border border-0 bg-transparent" onClick={handleDeleteAbhi}>
                                            <FontAwesomeIcon icon={faTrashAlt} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                        {abhiCount < noOfLinks && (
                            <div className="col-md-3">
                                <button type="button" className="text-danger border border-0 btn bg-transparent fw-bolder" onClick={handleAddAbhi}>
                                    <FontAwesomeIcon icon={faPlus} /> Add
                                </button>
                            </div>
                        )}
                        <div className="col-12">
                            <button className="btn btn-success" type="submit">Submit</button>
                            <button className="btn btn-danger ms-2" type="submit">Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default CodingProfileForm;
