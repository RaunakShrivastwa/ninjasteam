import React from 'react'

function MentorShip() {
    return (
        <div className='mb-4'>
            <h4 className='mb-3'>1:1 Mentorship sessions</h4>
            <p >Personalised guidance to prepare you for your interview needs</p>
            <div class="row row-cols-1 row-cols-md-3 g-4">
                <div class="col rounded border-0">
                    <div class="card v h-100 border-0 rounded p-2">
                        <img style={{ height: '20vh' }} src='/image/mentor/mock.webp' class="card-img-top" alt="..." />
                        <div class="card-body border-0 rounded shadow">
                            <div className='text-center'><strong>Mock Interview</strong></div>
                            <p>Nail coding assessments and technical challenges</p>
                            <p class="card-text">Gain insights into problem-solving and algorithmic thinking</p>
                            {/* add fees */}

                        </div>                     

                    </div>
                </div>

                <div class="col rounded border-0">
                    <div class="card v h-100 border-0 rounded p-2">
                        <img style={{ height: '20vh' }} src='/image/mentor/profile.webp' class="card-img-top" alt="..." />
                        <div class="card-body border-0 rounded shadow">
                            <div className='text-center'><strong>Profile review</strong></div>
                            <p>Get your profile & resume reviewed by industry leaders</p>
                            <p class="card-text">Focus on different aspects of your job search.</p>
                            {/* add fees */}

                        </div>                     

                    </div>
                </div>

                <div class="col rounded border-0">
                    <div class="card v h-100 border-0 rounded p-2">
                        <img style={{ height: '20vh' }} src='/image/mentor/project.webp' class="card-img-top" alt="..." />
                        <div class="card-body border-0 rounded shadow">
                            <div className='text-center'><strong>Project guidance</strong></div>
                            <p>Career counselling with industry experts</p>
                            <p class="card-text">Get assistance on how to build real time projects</p>
                            {/* add fees */}

                        </div>                     

                    </div>
                </div>
            </div>
        </div>
    )
}

export default MentorShip