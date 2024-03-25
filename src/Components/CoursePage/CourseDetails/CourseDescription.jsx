import React from 'react'
import ReactPlayer from 'react-player'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine } from '@fortawesome/free-solid-svg-icons';

const CourseDescription = ({course}) => {
    return (
        <>
            <div class="row">
                <div class="col-sm-5 mb-3 mb-sm-0 d-none d-md-block">
                    <div class="card h-100 py-0 border border-0 ">
                        <ReactPlayer url={course?.introVideo} width='100%' />
                    </div>
                </div>


                <div class="col-sm-7">
                    <div class="card h-100 border border-0 d-flex justify-content-center">
                        <div class="card-body border border-0">
                            <h4 class="card-title fw-bold mb-3 md-md-0"><span class="border border-success border-2 border-top-0 border-start-0 border-end-0">Course Description</span></h4>

                            <ReactPlayer url='/sample_video.mp4' width='100%' className="d-block d-md-none" />

                            <p class="card-text mt-3">{course?.description}</p>

                            <div class="mb-2 pt-0">
                                <FontAwesomeIcon icon={faChartLine} size='lg' className=''/>
                                <span className='fw-bold ms-1'>Beginner to Advance</span>
                            </div>

                            <button type="button" class="btn btn-success py-2 px-5 fw-bold">Sign up Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CourseDescription