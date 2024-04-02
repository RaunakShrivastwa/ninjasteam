import React from 'react'
import AdminSidebarList from './AdminSidebarList'

const SmallScreeSidebar = ({heading}) => {
    return (
        <>
            <button class="btn d-inline-block d-md-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">
                <i class="fs-5 fa-solid fa-bars text-dark "></i>
            </button>
            <span class="h3 fw-bold fs-4 mb-3">{heading}</span>
            <div class="offcanvas offcanvas-start text-bg-dark" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
                <div class="offcanvas-header">
                    <i class="fs-5 fa-solid fa-bars me-2"></i>
                    <span class="h4 offcanvas-title" id="staticBackdropLabel">Our Ninja</span>
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <div>
                        <AdminSidebarList />
                    </div>
                </div>
            </div>
        </>
    )
}

export default SmallScreeSidebar