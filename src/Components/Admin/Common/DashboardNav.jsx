import React from 'react'

const DashboardNav = ({title}) => {
    return (
        <>
            <nav className="navbar navbar-light bg-transparent shadow shadow">
                <div className="container-fluid">
                    <a className="navbar-brand">{title}</a>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        </>
    )
}

export default DashboardNav