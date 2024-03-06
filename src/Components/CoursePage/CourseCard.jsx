import React from 'react'

const CourseCard = ({ courseData }) => {
    return (
        <>
            <div class="col">
                <div class="card mb-3 h-100">
                    <img src={courseData.imageLink} class="card-img-top" alt="..." />
                    <div class="card-body pb-0 mb-0">
                        <h6 class="card-title d-flex justify-content-between align-items-center">
                            <i class="bi bi-graph-up-arrow fw-bold"><span class="text-muted"> <span>{courseData.liked}</span> interested Geeks</span></i>

                            <i class="bi bi-star-fill p-1 rounded rounded-lg text-warning"> {courseData.rating} </i>
                        </h6>
                        <p class="card-text h6">{courseData.courseNaration}</p>

                        <h6 class="card-title d-flex align-items-center mb-0 pb-0">
                            <i class="bi bi-bar-chart-line-fill pe-2"></i><span class="text-muted"> Beginner to Advance</span>
                        </h6>
                    </div>

                    <div class="card-footer bg-transparent border-0 mt-0 pt-0">
                        <h5 class="card-title d-flex justify-content-between align-items-center m-0 p-0">
                            <span>₹{courseData.originalPrice}    <del class="text-muted"> ₹{courseData.discountedPrice}</del></span>

                            <button type="button" class="btn btn-outline-success">Explore</button>
                        </h5>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CourseCard