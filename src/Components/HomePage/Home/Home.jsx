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
import NavigationMenu from '../../NavigationBar/NavigationMenu'
import Faculty from '../../Faculty/Faculty';
import Cookies from 'js-cookie';
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react'

function Home() {
  const user = Cookies.get('yourData');
  const {name} = useParams();
  const history = useNavigate();
  useEffect(() => {
    if (user) {
      const u = JSON.parse(user);
      if (u.status == 'admin' && !name) {
        console.log("u for admin", u.status);
        history('/ninja/Admin/dashboard')
      }
    }
  }, [user])
  return (
    <>
      <NavigationMenu />
      <Header />
      <div className='container-lg container-xl p-3 mb-3'>
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-10">
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
                <Faculty />
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
