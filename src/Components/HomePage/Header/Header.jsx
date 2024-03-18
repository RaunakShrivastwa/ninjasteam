import './Header.css'
import EnquirePage from './EnquirePage';


function Home() {
  return (
    <>
      <div class='container-fluied mt-5 pt-2 Header-sec'>
        <div className=' p-3'>
          <div class="row">
            {/* for transparent */}
            <div class="card border-0 bg-transparent border-0 col-md-8 col-sm-12">
              <div class="card-body border-0">
              </div>
            </div>

            {/* form */}
            <div class="col-sm-6 col-md-4 mt-3 rounded register position-fixed  end-0  py-5" style={{zIndex:'100'}} >
              <div class="card rounded border-0">
                <div class="border-0 card-body d-none rounded d-md-block bg-white shadow " >
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
