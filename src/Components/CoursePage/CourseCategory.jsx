import React from 'react'

const CourseCategory = ({ heading }) => {
    var caretogyData = [,{
        image: "/Image/algorithms.png",
        name: "DSA & Algorithms",
        color: "#F39893"
    },{
        image: "/Image/data-science.png",
        name: "Data Science",
        color: "#3079AC"
    },{
        image: "/Image/hiring.png",
        name: "Interview and prepration plan",
        color: "#F5A572"
    },{
        image: "/Image/backend.png",
        name: "Backend Development",
        color: "#21898C"
    },{
        image: "/Image/coding.png",
        name: "Fullstack Development",
        color: "#C9A8CE"
    },{
        image: "/Image/code.png",
        name: "Web Development",
        color: "#627A92"
    }]

    return (
        <>
            <h3 class='fw-bold mt-4 mb-3'>{heading}</h3>
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 mb-4">
                {
                    caretogyData.map((data) => (
                        <div class="col">
                            <div class="card h-100 py-2 text-light" style={{background: `${data.color}`}}>
                                <div class="d-flex justify-content-center align-items-center py-0 my-0 h-100">
                                    <div class="col-3">
                                        <div class="d-flex justify-content-center">
                                            <img src={data.image} alt={data.name+' image'} style={{ width: '50%' }} />
                                        </div>
                                    </div>
                                    <div class="col-9">
                                        <h5 class="card-title fw-bold">{data.name}</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }

            </div>
        </>
    )
}

export default CourseCategory