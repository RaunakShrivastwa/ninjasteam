import React, { useState } from 'react';
 // Import the CSS file
import { Link } from 'react-router-dom';

function Faculty() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="faculty-container">
      <div>
        <h4>Our Faculty</h4>
      </div>
      <div className={`row row-cols-1 row-cols-md-3 g-4 ${isHovered ? 'animate' : ''}`}>
        <div className="p-3 mentor_div">
          <div className="card h-100" style={{ height: '40vh' }}>
            <img height='200px' src="https://th.bing.com/th/id/OIP.fgJo-1LNpHQ4_c-cFI_hdQHaE7?w=216&h=180&c=7&r=0&o=5&pid=1.7" className=" card-img-top" alt="..." />
            <div className="card-body">
              <p className='text-center h6'><u>Shubham Shrivastwa</u></p>
              <small className='our_facilities'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. At perspiciatis dolor illo aliquid esse dignissimos eum et velit facere ipsum.</small>
              {/* <button className='px-2 mx-2 btn btn-warning'>Connnect</button> */}
            </div>
          </div>
        </div>

        <div className="p-3 mentor_div">
          <div className="card h-100" style={{ height: '40vh' }}>
            <img height='200px' src="https://th.bing.com/th/id/OIP.fgJo-1LNpHQ4_c-cFI_hdQHaE7?w=216&h=180&c=7&r=0&o=5&pid=1.7" className=" card-img-top" alt="..." />
            <div className="card-body">
              <p className='text-center h6'><u>Shubham Shrivastwa</u></p>
              <small className='our_facilities'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. At perspiciatis dolor illo aliquid esse dignissimos eum et velit facere ipsum.</small>
              {/* <button className='px-2 mx-2 btn btn-warning'>Connnect</button> */}
            </div>
          </div>
        </div>

        <div className="p-3 mentor_div">
          <div className="card h-100" style={{ height: '40vh' }}>
            <img height='200px' src="https://th.bing.com/th/id/OIP.fgJo-1LNpHQ4_c-cFI_hdQHaE7?w=216&h=180&c=7&r=0&o=5&pid=1.7" className=" card-img-top" alt="..." />
            <div className="card-body">
              <p className='text-center h6'><u>Shubham Shrivastwa</u></p>
              <small className='our_facilities'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. At perspiciatis dolor illo aliquid esse dignissimos eum et velit facere ipsum.</small>
              {/* <button className='px-2 mx-2 btn btn-warning'>Connnect</button> */}
            </div>
          </div>
        </div>        {/* Repeat this structure for other faculty cards */}
      </div>
    </div>
  );
}

export default Faculty;
