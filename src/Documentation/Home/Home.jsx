import React, { useState, useEffect, useRef } from 'react';
import Editor from '@monaco-editor/react';
import Nav from '../../Components/NavigationBar/NavigationMenu';
import './Home.css'
function Home() {
    const [toggle,setToggle]= useState('true')
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
                    <div className='col-md-12 col-sm-12 overflow-hidden'>
                      {
                        toggle ? (<Nav />) :null
                      }
                        <div className="floating_box_parents">
                        <div className='shape1'></div>
                        <div className='shape2' >shape2</div>
                    </div>
                    </div>
                </div>

                <div className="second_floating"></div>

                <div className='Round'>Round</div>

            </div>
        </>
    )
}

export default Home