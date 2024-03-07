import React from 'react';
import './Licence.css';
import { Link } from 'react-router-dom';

function Licence() {
    return (
        <div class="fixed-bottom bg-danger shadow p-2 licence text-center d-none d-md-block mt-4">
            <span>Need Help? Talk to us at 01205096012 &nbsp; or &nbsp;
                <Link to='/' className='text-black'>Request Call back</Link>
            </span>
        </div>
    )
}

export default Licence