import React from 'react'

const CourseCard = ({ courseData }) => {
    return (
        <>
            <div className="col">
                <div className="card mb-3 h-100">
                    <img src={courseData.imageLink} className="card-img-top" alt="..." />
                    <div className="card-body pb-0 mb-0">
                        <h6 className="card-title d-flex justify-content-between align-items-center">
                            <i className="bi bi-graph-up-arrow fw-bold"><span className="text-muted"> <span>{courseData.liked}</span> interested Geeks</span></i>

                            <i className="bi bi-star-fill p-1 rounded rounded-lg text-warning"> {courseData.rating} </i>
                        </h6>
                        <p className="card-text h6">{courseData.courseNaration}</p>

                        <h6 className="card-title d-flex align-items-center mb-0 pb-0">
                            <i className="bi bi-bar-chart-line-fill pe-2"></i><span className="text-muted"> Beginner to Advance</span>
                        </h6>
                    </div>

                    <div className="card-footer bg-transparent border-0 mt-0 pt-0">
                        <h5 className="card-title d-flex justify-content-between align-items-center m-0 p-0">
                            <span>₹{courseData.originalPrice}    <del className="text-muted"> ₹{courseData.discountedPrice}</del></span>

                            <button type="button" className="btn btn-outline-success px-3 py-1">Explore</button>
                        </h5>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CourseCard