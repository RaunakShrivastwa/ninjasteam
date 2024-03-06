import React from 'react'

const CourseHeader = () => {
    return (
        <>
            <div class="row mt-5 pt-4">
                <div class="col-sm-7 mb-3 mb-sm-0">
                    <div class="card border-0">
                        <div class="card-body border-0">
                            <h3 class="card-title fw-bold">Ninjas Course</h3>
                            <p class="card-text h5">Interactive LIVE & Self-Paced Courses</p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-5 border-0">
                    <div class="card border-0">
                        <form class="d-flex" role="search">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CourseHeader