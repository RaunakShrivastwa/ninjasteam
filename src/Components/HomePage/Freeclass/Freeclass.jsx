import React from 'react'

function Freeclass() {
    const obj = [
        { img: '/image/student.png' ,info:'SDEs looking to upskill'},
        { img: '/image/chill.png',info:'SDEs wanting to change from Service to Product Companies' },
        { img: '/image/think.png',info:'SDEs wanting to learn System Design and DSA' }
    ]
    return (
        <div className='mt-4'>
            <h2 className='mb-4'>This Free Class is for</h2>
            {
                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 mb-4">
                      {
                        obj.map((data)=>(
                            <div class="col">
                            <div class="card h-100 py-2 border-0">
                                <div class="d-flex justify-content-center align-items-center py-0 my-0 h-100">
                                    <div class="col-3">
                                        <div class="d-flex justify-content-center">
                                            <img src={data.img} style={{ width: '50%' }} />
                                        </div>
                                    </div>
                                    <div class="col-9 border-0">
                                        <p class="card-title ">{data.info}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        ))
                      }  
                </div>

                
            }
        </div>
    )
}

export default Freeclass