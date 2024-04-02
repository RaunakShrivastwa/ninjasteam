import React from 'react'

const AdminCard = ({ icon, title, number, color }) => {
    return (
        <>
            <div class="col">
                <div class="card h-100 py-0 rounded rounded-0 rounded-end"
                    style={{ borderLeft: `7px solid ${color}` }}>
                    <div class="d-flex justify-content-start align-items-center ps-3 my-o">
                        <i class={`${icon} fs-4`}></i>
                        <div class="card-body m-0">
                            <h5 class="card-title fw-bold my-0">{title}</h5>
                            <p class="my-0">{number}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminCard