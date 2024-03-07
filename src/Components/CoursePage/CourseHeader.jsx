import React from 'react'

const CourseHeader = ({ pageHeading, pageNarration }) => {
    return (
        <>
            <div className="row my-5 pt-4">
                <div className="col-sm-7 mb-3 mb-sm-0">
                    <div className="card border-0">
                        <h3 className="card-title fw-bold">{pageHeading}</h3>
                        <p className="card-text h6">{pageNarration}</p>
                    </div>
                </div>
                <div className="col-sm-5 border-0">
                    <div className="card border-0 pt-2">
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">
                                <i className="bi bi-search"></i>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CourseHeader