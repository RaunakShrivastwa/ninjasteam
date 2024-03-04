import React from 'react';

function Fotter(props) {
    return (
        <div>
        <div className="man justify-content-around align-items-center d-flex mt-5  ">
        <button type="button" class="btn btn-success btn-lg  mt-4">Large button</button>
        
    </div>
    <div class="card text-center border-0 ">
  
  <div class="card-body border-0">
    <h5 class="card-title fs-3">AlmaBetter news</h5>
    <p class="card-text fs-4">We are building an A team of passionate engineers, product managers, business & growth hustlers and ops ninjas.</p>

  </div>
</div>
<div class="card  text-white border-0 mt-4">
  <img src="https://www.almabetter.com/assets/images/About%20us%20Page/Group%201000002297@3x.png" class="card-img" alt="..."/>
 
 
</div>
<div className="bag  justify-content-around align-items-center d-flex mt-5">
<button type="button" class="btn btn-outline-danger btn-lg">Explore Carres Opportiunity</button>
</div>
<div class="row row-cols-1 row-cols-md-2 g-4 mt-4 bg-dark">
  <div class="col">
    <div class="card border-0 ">
     
      <div class="card-body border-0">
        <h2 class="card-title fs-1">learinig is better width alambetter</h2>

        <p className='mm fs-3'> We believe in collaboration over competition. This is important for our community to collaborate and learn with each other.</p>
        <button type="button" class="btn btn-danger btn-lg  mt-6">join whataspp community</button>
        {/* <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
      </div>

    </div>
  </div>
  <div class="col">
    <div class="card border-0 bg-dark">
      <img width="100%" src="https://www.almabetter.com/assets/courses/banner/whatsapp-banner.png" class="card-img-top" alt="..."/>
     
    </div>
  </div>
  
    </div>
    </div>
        
    );
}

export default Fotter;