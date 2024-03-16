import React, { useState } from 'react';
import './Faculty.css'; // Import the CSS file
import { Link } from 'react-router-dom';

function Faculty() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="faculty-container" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <div className='mb-4'>
        <h4>Our Faculty</h4>
      </div>
      <div className={` row-cols-1 row-cols-md-3 g-4 ${isHovered ? 'paused' : 'moving-row'}`}>
      <div className="col p-3">
                    <div className="card h-100" style={{height:'40vh'}}>
                        <img height='200px' src="https://res.cloudinary.com/dqarshyzz/image/upload/v1710608870/btxxwsr4rdjaottnyzqe.jpg" className=" card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title text-center">Shubham Shrivastwa</h5>
                            <p className="card-text">Fullstack Developer , C.O. of Our Ninjas</p>
                        </div>
                        <button className='btn btn-primary'>
                            <a className='text-white text-decoration-none' href="https://www.linkedin.com/in/shubham-shrivastwa/"><strong>Connect</strong></a>
                        </button>
                    </div>
                </div>

                <div className="col  p-3">
                    <div className="card h-100" style={{height:'40vh'}}>
                        <img height='200px' src="https://res.cloudinary.com/dqarshyzz/image/upload/v1710608728/ats5lowklo5k0144q4pp.jpg" className=" card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title text-center">Manvi Baghel</h5>
                            <p className="card-text">Frontend Developer , Mentor</p>
                        </div>
                        <button className='btn btn-primary'>
                            <a className='text-white text-decoration-none' href="https://www.linkedin.com/in/java-abhijeet/"><strong>Connect</strong></a>
                        </button>
                       
                    </div>
                </div>

                <div className="col  p-3">
                    <div className="card h-100">
                        <img height='200px' src="https://res.cloudinary.com/dqarshyzz/image/upload/v1710608713/i4lhs48uukm7j0islumi.jpg" className=" card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title text-center">Abhijeet Singh</h5>
                            <p className="card-text">Fullstack Developer , Founder of Our Ninjas</p>
                        </div>
                        <button className='btn btn-primary'>
                            <a className='text-white text-decoration-none' href="https://www.linkedin.com/in/java-abhijeet/"><strong>Connect</strong></a>
                        </button>
                    </div>
                </div>

                <div className="col  p-3">
                    <div className="card h-100">
                        <img height='200px' src="https://res.cloudinary.com/dzhl7dmsp/image/upload/v1709644098/x2ep4mhxygww2huphu0r.jpg" className=" card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title text-center">Mentor</h5>
                            <p className="card-text">JOIN FREE DEMO SESSION</p>
                        </div>
                        <button className='btn btn-primary'>
                            <Link className='text-white text-decoration-none' to="/ninja/auth/login"><strong>JOIN</strong></Link>
                        </button>
                    </div>
                </div>
        {/* Repeat this structure for other faculty cards */}
      </div>
    </div>
  );
}

export default Faculty;
