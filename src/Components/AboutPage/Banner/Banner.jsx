import React from "react";

function Banner() {
  return (
    <div class="row d-flex justify-content-around align-items-center">
      <div class="col-sm-6">
        <div class="card mt-4 border-0">
          <div class="card-body border-0 ">
            <div className="col-md-12 ">
            <div className="col-md-12">
                <img width='100%' src="https://www.almabetter.com/assets/images/About%20us%20Page/Rectangle%2021802@3x.png" alt="" srcset="" />
            </div>
             <div className="col-md-12 bg-danger mt-3">
              
               <img width= '100%' src="https://www.almabetter.com/assets/images/About%20us%20Page/Rectangle%2021743@3x.png"alt=""srcSet=""/>
               </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-sm-6 ">
        <div class="card border-0 ">
          <div class="card-body border-0  ">
            <img width='100%' src="https://www.almabetter.com/assets/images/About%20us%20Page/1624346912797%201@3x.png" alt="" srcset="" />
            {/* <h5 class="card-title">Special title treatment</h5> */}
            {/* <p class="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p> */}
            {/* <a href="#" class="btn btn-primary">
              Go somewhere
            </a> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
