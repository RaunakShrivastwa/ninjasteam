import React from 'react'

function Codepen({ url }) {
    return (
        <div className='position-relative'>
             <div className='position-absolute' style={{width:'150px', height:'50px',right:'0',backgroundColor:'#111111'}}></div>
            <iframe height="300" style={{width:'100%'}} scrolling="no" title="Untitled" src={url} frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">

            </iframe>
        </div>
    )
}

export default Codepen