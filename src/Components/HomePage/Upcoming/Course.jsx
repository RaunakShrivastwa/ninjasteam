import React from 'react'
import './Upcoming.css'

function Course() {
    const course = [
        { name: "Data Structure", date: '2 jun 2024', description: "Learn How To arrange Data", enrolled: "100+ Students", img: '/image/das.JPEG' },
        { name: "Python", date: '12 jun 2024', description: "What is Data, AI", enrolled: "200+ Students", img: '/image/python.JPEG' },
        { name: "Javascript", date: '20 jun 2024', description: "Handle With World , Talk with Code", enrolled: "100+ Students", img: "/image/js.JPEG" },

    ]
    return (
        <div className='mb-5'>
            <h4 className='mb-4'>Upcoming Courses</h4>
            <div class="row row-cols-1 row-cols-md-3 g-4">
                {
                    course.map((data) => (

                        <div class="col rounded border-0 shadow">
                            <div class="card v h-100 border-0 rounded p-2">
                                <img style={{height:'20vh'}} src={data.img} class="card-img-top" alt="..." />
                                <div class="card-body border-0 rounded">
                                    <span>{data.description}</span>
                                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    {/* add fees */}

                                </div>
                                <div className='col-md-12 col-sm-12 d-flex p-2'>
                                    <div className='col-md-7 col-sm-6'><img width='12px' src="https://cdn-icons-png.flaticon.com/128/2948/2948088.png" alt="" />
                                    <span className='px-2'>{data.date}</span>
                                    </div>
                                    <div className='col-md-5 col-sm-6'>₹3000 <del className='text-muted'>7500</del></div>

                                </div>

                            </div>
                        </div>

                    ))
                } </div>
        </div>
    )
}

export default Course