import React from 'react'
import { Link } from 'react-router-dom'

function Feedback({ mentor }) {

    return (
        <div className='' id='en2'>
            <h4>Write Your Feedback , for Mentor {mentor?.mentor?.userName}</h4>
            <span className='text-primary mb-5'>Already have an Account? Click Here</span>
            <form className='mt-4'>

                {/* for name */}
                <div class="form-floating mb-4  shadow ">
                    <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{height:'100px'}}></textarea>
                    <label for="floatingTextarea2">Comments</label>
                </div>

                <button type="submit" style={{ background: '#7fdf98' }} class="btn  mb-5 border border-none form-control shadow-none py-3">Submit</button>
                <div class="">
                    <small className=''>By clicking Register, I have read and agree to Ninjas's <Link to='/'>Terms</Link> and <Link to='/'>Privacy Policy</Link></small>
                </div>
            </form>
        </div>
    )
}

export default Feedback