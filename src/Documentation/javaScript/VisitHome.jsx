import React, { useState } from 'react'
import './VisitHome123.css';

function VisitHome() {

    const [flag,setFlag] = useState(true);

    const menu = ()=>{
        flag ? setFlag(false) : setFlag(true)
    }

    return (
        <div className='vh-100 w-100 bg-primary d-flex flex-column overflow-hidden'>
            <header className='text-white p-3 header_1'>
                <div className='d-flex'>
                     <div id='menu_1' onClick={menu}>@</div>
                     <div className='flex-grow-1  text-center'>Java Script</div>
                </div>
            </header>
            <main className='flex-grow-1 bg-light d-flex'>
                <div id='iid' className={`sidebar_1 col-md-3 col-sm-5`} style={{width:`${flag ? '300px' : '0'}`, display:`${flag ? 'block' : 'none'}`}}>
                    <div class="body_sidebar text-white">
                        <ul class="tree ul">
                            <li><details open >
                                <summary><img className='img' width="10px" style={{marginLeft:'15px'}} src="https://cdn-icons-png.flaticon.com/128/3767/3767084.png" alt="" /> Getting Started With JS 
                                </summary>
                                <ul className='ul'>
                                    <li><details open >
                                        <summary><img className='img' width="10px" src="https://cdn-icons-png.flaticon.com/128/3767/3767084.png" alt=""/> Student1</summary>
                                        <ul className='ul'>
                                            <li><div class="icon"></div>Shubham
                                            </li>
                                            <li><div class="icon"></div>Abhijeet</li>
                                            <li><details open >
                                                <summary><img className='img' width="10px" src="https://cdn-icons-png.flaticon.com/128/3767/3767084.png" alt="" /> Student1</summary>
                                                <ul className='ul'>
                                                    <li><div class="icon"></div>Shubham
                                                    </li>
                                                    <li><div class="icon"></div>Abhijeet</li>
                                                    <li><div class="icon"></div>
                                                        gg
                                                    </li>
                                                </ul>
                                            </details>

                                            </li>
                                        </ul>
                                    </details>
                                    </li>
                                    <li><div class="icon"></div>Student2</li>
                                    <li><div class="icon"></div>Student3</li>
                                </ul>
                            </details>
                            </li>

                        </ul>
                    </div>
                </div>
                <section  className='flex-grow-1 body_1'>body</section>
            </main>
            <footer className='text-white p-3 footer1'>footer</footer>
        </div>
    )
}

export default VisitHome