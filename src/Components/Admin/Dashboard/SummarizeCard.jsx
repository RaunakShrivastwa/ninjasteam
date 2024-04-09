import React from 'react'
import AdminCard from './AdminCard'

const SummarizeCard = () => {
    const cardData = [{
        icon: 'fa-solid fa-graduation-cap',
        title: 'Student',
        number: 100,
        color: 'orange'
    }, {
        icon: 'fa-solid fa-chalkboard-user',
        title: 'Teacher',
        number: 100,
        color: 'green'
    }, {
        icon: 'fa-solid fa-wallet',
        title: 'Income',
        number: 100,
        color: 'red'
    }, {
        icon: 'fa-solid fa-circle-dollar-to-slot',
        title: 'Expenses',
        number: 100,
        color: 'blue'
    }]

    return (
        <>
            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3 my-3">
                {
                    cardData.map((cardValue) => {
                        return <AdminCard icon={cardValue.icon} title={cardValue.title} number={cardValue.number} color={cardValue.color} />
                    })
                }
            </div>
        </>
    )
}

export default SummarizeCard