import React, { useState } from 'react';
import './Header.css'
import EnquirePage from './EnquirePage';


function Home() {
  const [showToast, setShowToast] = useState(false);

  return (
    <>
      <div class='container-fluied mt-5 pt-2 Header-sec'>
        <div className=' p-3'>
          <div class="row">
            {/* for transparent */}
            <div class="card bg-transparent border-0 col-md-8 col-sm-12">
              <div class="card-body">
              </div>
            </div>

            {/* form */}
            <div class="col-sm-6 col-md-4 mt-3 rounded register end-0 position-fixed">
              <div class="card rounded">
                <div class=" card-body d-none rounded d-md-block  bg-white shadow ">
                  <EnquirePage />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

       {/* for the Small Size  */}
      <div className='d-md-none  p-4 shadow'>
        <EnquirePage />
      </div>
    </>
  );
}

export default Home;
