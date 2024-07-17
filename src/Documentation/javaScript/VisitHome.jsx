import React, { useState } from 'react'
import './VisitHome123.css';
import SideBAr from './SideBAr';
import DefaultPage from './DefaultPage';
import Footer from '../../Components/MainFooter/Footer'

function VisitHome({ Doc ,url, title }) {

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
                <div className={`bg-dark p-2 overflow-auto  d-none  col-md-3 d-md-${flag ? 'block' : 'none'}`} style={{height:'100vh'}}>
                    <SideBAr />
                </div>
                <div className={`overflow-auto d-flex`} style={{maxHeight:'100vh'}}>
                     {Doc ?  <Doc  url={url}/> : <DefaultPage /> }
                </div>
            </main>

            
        </div>

        
    )
}

export default VisitHome