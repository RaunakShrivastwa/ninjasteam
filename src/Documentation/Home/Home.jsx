import React, { useState, useEffect, useRef } from 'react';
import Editor from '@monaco-editor/react';
import Nav from '../../Components/NavigationBar/NavigationMenu';
import './Home.css'
import { Link } from 'react-router-dom';
function Home() {
    const [toggle, setToggle] = useState('true')
    const [lastScrollTop, setLastScrollTop] = useState(0);
    const [code, setCode] = useState(`
    //Learn Hard, Earn More👍
    (() => {
        let success = 'done';
        while (true) {
            if (success === 'done')
                break;
            continue;
        }console.log("Success")
    })()
`);

    const editorRef = useRef(null);

    useEffect(() => {
        if (editorRef.current) {
            console.log('Editor is focused');
            editorRef.current.focus();
        } else {
            console.log('Editor is not initialized yet');
        }
    }, []);


    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

            if (scrollTop > lastScrollTop) {
                // Scrolling down
                setToggle(false)
                document.getElementById("shape").style.transform = 'rotate(10deg)'
            } else {
                setToggle(true)
                document.getElementById("shape").style.transform = 'rotate(-10deg)'
            }

            setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop); // For Mobile or negative scrolling
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollTop]);


    const handleEditorDidMount = (editor, monaco) => {
        console.log('Editor mounted');
        editorRef.current = editor;
        editor.focus();
    };


    const runCode = () => {
        const iframe = document.getElementById('outputFrame');
        console.log(iframe);
        const iframeWindow = iframe.contentWindow;
        const iframeDocument = iframeWindow.document;

        // Clear previous output and styles
        iframeDocument.body.innerHTML = '';
        iframeDocument.head.innerHTML = '';


        // Redirect console.log to write to the iframe
        iframeWindow.console.log = function (message) {
            const pre = iframeDocument.createElement('pre');
            pre.textContent = message;
            iframeDocument.body.appendChild(pre);
        };

        // Append script to iframe and execute
        const script = iframeDocument.createElement('script');
        script.type = 'text/javascript';
        script.text = code;
        iframeDocument.body.appendChild(script);
    };



    return (
        <>
            <div class="containers">
                <div className='shape_container' id='shape'>
                    <div class="center">
                        <Editor
                            className='edditer'
                            height="100%"
                            defaultLanguage="javascript"
                            defaultValue={code}
                            onChange={(value) => setCode(value || '')}
                            theme="vs-dark"
                            onMount={handleEditorDidMount}
                            options={{
                                selectOnLineNumbers: true,
                                automaticLayout: true,
                                cursorBlinking: 'blink',
                                minimap: { enabled: false },
                            }} />

                        <iframe className='output' id='outputFrame'></iframe>
                    </div>
                    <div className='hello'>
                        <img onClick={runCode} src="https://cdn-icons-png.flaticon.com/128/702/702148.png" alt="" />
                    </div>
                </div>

                <div className="first_floating">
                    <div className='col-md-12 col-sm-12 overflow-hidden shadow-none border-0'>
                        {
                            toggle ? (
                                <>
                                <div className='nav1 container d-flex justify-content-between text-white'>
                                    <div className='p-3 d-flex column-gap-2'>
                                        <div><img className='logos' width='40px' src="https://res.cloudinary.com/dqarshyzz/image/upload/v1710520447/public/image/icon/mps96bl2hb2sjyxrgzyn.png" alt="ninjas" srcSet="" />
                                        </div>
                                        <div>OurNinjas</div>
                                    </div>
                                    <div className='p-3 d-flex column-gap-5 justify-content-end Nav'>

                                        <div><Link to='/ninja/auth/login' className='text-decoration-none text-warning'>Bootcamp</Link></div>
                                        <div><Link to='/ninja/auth/login' className='text-decoration-none text-white'>Explore</Link></div>
                                        <div><Link to='/ninja/auth/login' className='text-decoration-none text-white'>Practice Interview</Link></div>
                                        <div><Link to='/ninja/auth/login' className='text-decoration-none text-white'>Developers</Link></div>
                                        <div><Link to='/ninja/auth/login' className='text-decoration-none text-white'>SignIn</Link></div>
                                    </div>
                                </div>

                                <div className='d-none d-md-none nav2'>
                                    <Nav />
                                </div>
                                
                                </>
                                
                            ) : null
                        }
                        <div className='col-sm-12 banner1  d-flex  h-50 text-white'>
                            <div className='d-none d-md-block w-50'></div>
                            <div className='d-flex flex-column p-4 gap-4  justify-content-center align-items-center flex-grow-1'>
                                <div><h2>A New Way to Learn</h2></div>
                                <div className='px-5'>OurNinjas is the best platform to help you enhance your skills, expand your knowledge and prepare for technical interviews.</div>
                                 <button className='btn rounded text-white' style={{backgroundColor:'#6fd0f6'}}>Create Account</button>
                            </div>
                        </div>
                        <div className="floating_box_parents">
                            <div className='shape1'></div>
                            <div className='shape2' >shape2</div>
                        </div>
                    </div>
                </div>

                <div className="second_floating d-flex justify-content-around align-items-end">
                    <div className='d-flex column-gap-3'>
                        <div>Start Exploring</div>
                        <div><img width='30px' src="https://cdn-icons-png.flaticon.com/128/9618/9618128.png" alt="" /></div>
                    </div>
                    <div></div>
                </div>

                <div className='Round'>Round</div>

            </div>
        </>
    )
}

export default Home