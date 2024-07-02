import React, { useState } from 'react'
import './VisitHome123.css';
import SideBAr from './SideBAr';
import DefaultPage from './DefaultPage';

function VisitHome({ Doc , title }) {

    const [flag, setFlag] = useState(true);

    const menu = () => {
        flag ? setFlag(false) : setFlag(true)
    }

    return (

        <div className='vh-100 overflow-hidden d-flex flex-column'>

            <header className='p-3 text-white d-flex'>
                <div className='d-flex column-gap-5'>
                    <div onClick={menu}>@</div>
                    <div>Javascript</div>
                </div>
                <div className='flex-grow-1  text-center'>{title}</div>
            </header>

            <main className='flex-grow-1  d-flex text-white'>
                <div className={`bg-dark p-2 overflow-auto  d-none  col-md-3 d-md-${flag ? 'block' : 'none'}`} style={{height:'88vh'}}>
                    <SideBAr />
                </div>
                <div className={`overflow-auto `} style={{maxHeight:'83vh'}}>
                     {Doc ?  <Doc /> : <DefaultPage /> }
                </div>
            </main>

            <footer className='p-2 text-light bg-warning'>
                footer
            </footer>
        </div>

        
    )
}

export default VisitHome