import React from 'react';


function CourseHeading({name}) {
    return (
        <div class="row  no-gutters " style={{ background: '#2d3668' }}>
        <div class="col-sm-6 mb-sm-0 col-md-9">
            <div class="card border-0">
                <div class="card-body " style={{ background: '#2d3668' }}>
                    <div class="card" style={{ maxHeight: '540px', border: '0' }}>
                        <div class="row g-0">
                            <div className="col-md-2 d-flex justify-content-center justify-content-md-start" style={{ background: '#2d3668', border: '0' }}>
                                <img src="/image/icon/ninja.png" style={{borderRadius:'50%'}} className="p-3 img-fluid" alt="..." />
                            </div>
                            <div class="col-md-10">
                                <div class="card-body" style={{ background: '#2d3668' }}>
                                    <p class="card-title text-primary">MileStone 1 &#8594; Introduction to {name} Js</p>
                                    <h4 class="card-text text-white d-none d-sm-block">You try to read, we will leave you after learning, <span className='text-danger'>keep coding</span></h4>
                                    <p className='text-white d-none d-sm-block'>Yet to Score: <span>0</span></p>
                                    <p className='d-none d-sm-block'><img width='30px' src="https://cdn-icons-png.flaticon.com/128/615/615075.png" alt="" /><span className='text-white'>Total Course mates:</span> <span className='text-white'>0</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="d-none d-sm-block col-sm-6 col-md-3">
            <div class="card border-0" style={{ background: '#2d3668' }}>
                <div class="card-body border-0 text-center">
                    <img src="https://files.codingninjas.in/image1-1-1-24423.png" class="p-3 img-fluid rounded-start" alt="..." />
                </div>
            </div>
        </div>

    </div>
    )
}

export default CourseHeading