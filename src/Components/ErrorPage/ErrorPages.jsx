import React from 'react'
import NavigationMenu from '../NavigationBar/NavigationMenu'

function ErrorPages() {
    return (
        <>
           <NavigationMenu />
            <div className='container d-flex justify-content-around align-items-center' style={{ height: "100vh", width: '100%' }}>
                <button className='btn r room'><h3 className='mt-1'>Permission Denied</h3></button>
            </div>
        </>
    )
}

export default ErrorPages