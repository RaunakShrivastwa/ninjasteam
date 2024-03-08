import React from 'react'

function Course() {
    const course = [
        { name: "Data Structure", date: '2 jun 2024', info: "Learn How To arrange Data", enrolled: "100+ Students", img: '/imgage/dsa.png' },
        { name: "Python", date: '12 jun 2024', info: "What is Data, AI", enrolled: "200+ Students", img: '/image/python.png' },
        { name: "Javascript", date: '20 jun 2024', info: "Handle With World , Talk with Code", enrolled: "100+ Students", img: "/image/js.png" },

    ]
    return (
        <div>
            <h4>Upcoming Courses</h4>
            {
                course.map((data) => (
                    <div class="row row-cols-1 row-cols-md-3 g-4">
                        <div class="col">
                            <div class="card h-100">
                                <img src="..." class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                        <h5 class="card-title">Card title</h5>
                                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    </div>
                                    <div class="card-footer">
                                        <small class="text-muted">Last updated 3 mins ago</small>
                                    </div>
                            </div>
                        </div>
                        
                    </div>
                ))
            }
        </div>
    )
}

export default Course