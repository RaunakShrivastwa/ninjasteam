import React from 'react'
import './milestone.css'

function ListofStone({stone, setStone}) {
    console.log("list ",stone);
    return (
        <div className=''>

            <div className='p-4 text-center text-white b-dy'>
                {Array.from({ length: stone }).map((_, index) => (
                    <div className='py-2 liststonehove' key={index} onClick={() => setStone(index+1)} style={{cursor:'pointer'}}>
                        <img width='30px' src="https://cdn-icons-png.flaticon.com/128/13093/13093217.png" alt="" /> &nbsp;
                        <span>Milestone {index + 1}</span>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default ListofStone