import React from 'react'
import { Link } from 'react-router-dom'

function EnquirePage() {
    return (
        <div className=''>
            <h4>Register For Enquiry !!</h4>
            <span className='text-primary mb-5'>Already have an Account? Click Here</span>
            <form className='mt-4'>

                {/* for name */}
                <div class="mb-4 mt-3">
                    <input type="text" placeholder='Name'  class="py-2 border border-none form-control shadow-none" id="nameExample" aria-describedby="emailHelp" />
                </div>
                <div class="mb-4">
                    <input type="email" placeholder='Email' class="py-2 border border-none form-control shadow-none" id="exampleInputPassword1" />
                </div>
                <div class="mb-5">
                    <input type="text" placeholder='Phone' class="py-2 border border-none form-control shadow-none" id="exampleInputPassword1" />
                </div>
                <button type="submit" style={{background:'#7fdf98'}} class="btn  mb-5 border border-none form-control shadow-none py-3">Submit</button>
                <div class="">
                    <small className=''>By clicking Register, I have read and agree to Ninjas's <Link to='/'>Terms</Link> and <Link to='/'>Privacy Policy</Link></small>
                </div>
            </form>
        </div>
    )
}

export default EnquirePage