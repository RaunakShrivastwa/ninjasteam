import React from 'react';
import './Mentorship.css';

function MentorShip() {
    return (
        <div className='mb-5'>
            <h4 className='mb-3'>1:1 Mentorship sessions</h4>
            <p >Personalised guidance to prepare you for your interview needs</p>
            <div class="row row-cols-1 row-cols-md-3 g-4">
                <div class="col rounded border-0 mentor_card">
                    <div class="card v h-100 border-0 rounded p-2">
                        <img style={{ height: '20vh' }} src='https://res.cloudinary.com/dqarshyzz/image/upload/v1710520448/public/image/mentor/floplfby7blhe1pcioh0.webp' class="card-img-top" alt="..." />
                        <div class="card-body border-0 rounded shadow">
                            <p className='text-center text-danger'>Mock Interview</p>
                            <p className='our_facilities'>Nail coding assessments and technical challenges,Gain insights into problem-solving and algorithmic thinking</p>
                           
                        </div>                     

                    </div>
                </div>

                <div class="col rounded border-0  mentor_card">
                    <div class="card v h-100 border-0 rounded p-2">
                        <img style={{ height: '20vh' }} src='https://res.cloudinary.com/dqarshyzz/image/upload/v1710520448/public/image/mentor/xfavqb5pmdwjngbgsm04.webp' class="card-img-top" alt="..." />
                        <div class="card-body border-0 rounded shadow">
                            <p className='text-center text-danger'>Profile review</p>
                            <p className='our_facilities'>Get your profile & resume reviewed by industry leaders, Focus on different aspects of your job search.</p>
                        </div>                     

                    </div>
                </div>

                <div class="col rounded border-0  mentor_card">
                    <div class="card v h-100 border-0 rounded p-2">
                        <img style={{ height: '20vh' }} src='https://res.cloudinary.com/dqarshyzz/image/upload/v1710520448/public/image/mentor/pnoirn898vsykwc8ge8d.webp' class="card-img-top" alt="..." />
                        <div class="card-body border-0 rounded shadow">
                            <p className='text-center text-danger'>Project guidance</p>
                            <p className='our_facilities'>Career counselling with industry experts, Get assistance on how to build real time projects</p>

                        </div>                     

                    </div>
                </div>
            </div>
        </div>
    )
}

export default MentorShip