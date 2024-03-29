import React, { useEffect } from 'react'
import Header from '../Header/Header'
import Content from '../Content/Content'
import Licence from '../Licence/Licence'
import AboutInstructor from '../AboutInstructor/AboutInstructor'
import Freeclass from '../Freeclass/Freeclass'
import About from '../About/About'
import Curriculum from '../Curriculum/Curriculum'
import Certificate from '../Certificate/Certificate'
import Course from '../Upcoming/Course'
import MentorShip from '../Mentorship/MentorShip'
import Footer from '../../MainFooter/Footer'

function Home() {
  return (
    <>
      <Header />
      <div className='container p-3 mb-3'>
        <div className="row">
          <div className="col-sm-6 col-md-8">
            <div className="card border-0">
              <div className="card-body border-0">
                <Content />
                <AboutInstructor />
                <div className='mt-4 mb-4'><Freeclass /></div>
                <About />
                <Curriculum />
                <Certificate />
                <Course />
                <MentorShip />
              </div>
            </div>
          </div>         
        </div>
      </div> 
      <Footer />
      <Licence />
     
    </>
  )
}

export default Home
