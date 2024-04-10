import React from 'react';

function SupportForm() {
    return (
        <div className='container' id=''>
            <h4>Technical Support ?</h4>
            <form className='mt-4'>
                {/* for name */}
                <div className="mb-4 mt-3" >
                    
                    <textarea
                        type="text"
                        required
                        cols='30'
                        rows='7'
                        placeholder='Write Your Query'
                        className="py-2 border border-none form-control shadow-none"
                        id="nameExample"
                        aria-describedby="emailHelp"
                        style={{ width: '100%', padding: '0.5rem', maxWidth: '100%', resize: 'horizontal' }} // Adjust width here

                    />
                    <a href="#">
                        <small>ourninja.support@gmail.com</small>
                    </a>
                </div>
                <button
                    type="submit"
                    style={{ background: '#7fdf98', width: '100%', borderRadius: '5px', padding: '0.5rem' }} // Apply custom styles using style prop
                    className="btn"
                >
                    Submit
                </button>
                <div className='py-3'>
                    <marquee behavior="" direction="">
                        <small className='text-danger'>Drag right/left For Close</small>
                    </marquee>
                </div>
            </form>
        </div>
    );
}

export default SupportForm;
