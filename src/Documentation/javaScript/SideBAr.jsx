import React from 'react'
import { Link } from 'react-router-dom'

function SideBAr() {
  return (
    <div class="body_sidebar text-white">
                        <ul class="tree ul">
                            
                            {/* for the js BAsics */}
                            <li><details open >
                                <summary><img className='img' width="10px" style={{marginLeft:'15px'}} src="https://cdn-icons-png.flaticon.com/128/3767/3767084.png" alt="" /> Basics of Javascript 
                                </summary>
                                <ul className='ul'>
                                    <li><div class="icon"></div><Link className='text-light' to='/ninjas/documentation/js/intro'>Introduction to Javascript</Link></li>
                                    <li><div class="icon"></div><Link className='text-light' to='/ninjas/documentation/js/version'>Javascript Version</Link></li>
                                    <li><div class="icon"></div><Link className='text-light' to='/ninjas/documentation/js/html'>How To Use JS in HTML?</Link></li>
                                    <li><div class="icon"></div><Link className='text-light' to='/ninjas/documentation/js/statement'>Javascript Statement</Link></li>
                                    <li><div class="icon"></div><Link className='text-light' to='/ninjas/documentation/js/syntax'>Javascript Syntax</Link></li>
                                    <li><div class="icon"></div><Link className='text-light' to='/ninjas/documentation/js/output'>Javascript Output</Link></li>
                                    <li><div class="icon"></div><Link className='text-light' to='/ninjas/documentation/js/comment'>Javascript Comments</Link></li>
                                </ul>
                            </details>
                            </li>

                            

                            





                        </ul>
                    </div>
  )
}

export default SideBAr