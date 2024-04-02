import React from 'react'
import AdminIncomeGraph from './AdminIncomeGraph'
import AdminCAC from './AdminCAC'

const AdminGraph = () => {
    return (
        <>
            <div class="row row-cols-1 row-cols-md-2 g-2 my-3">
                <div class="col">
                    <div class="card h-100">
                        <div class="card-header bg-transparent border-success fw-bold h5">Income</div>
                        <div class="card-body">
                            <AdminIncomeGraph />
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <div class="card-header bg-transparent border-success fw-bold h5">Marketing</div>
                        <div class="card-body">
                            <AdminCAC />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminGraph