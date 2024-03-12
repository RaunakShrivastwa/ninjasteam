import React from 'react'
import './milestone.css'

function ListofStone({setStone}) {
  return (
    <div>

        <div className='p-3 text-center text-white b-dy'>
            <div className='py-2 liststonehove' onClick={() => setStone(1)}>
                <img width='30px' src="https://cdn-icons-png.flaticon.com/128/13093/13093217.png" alt="" /> &nbsp;
                <span>Milestone 1</span>
            </div>

            <div className='py-2 liststonehove' onClick={() => setStone(2)} >
                <img width='30px' src="https://cdn-icons-png.flaticon.com/128/13093/13093217.png" alt="" /> &nbsp;
                <span>Milestone 2</span>
            </div>

            <div className='py-2 liststonehove' onClick={() => setStone(3)}>
                <img width='30px' src="https://cdn-icons-png.flaticon.com/128/13093/13093217.png" alt="" /> &nbsp;
                <span>Milestone 3</span>
            </div>

            <div className='py-2 liststonehove' onClick={() => setStone(4)}>
                <img width='30px' src="https://cdn-icons-png.flaticon.com/128/13093/13093217.png" alt="" /> &nbsp;
                <span>Milestone 4</span>
            </div>

            <div className='py-2 liststonehove' onClick={() => setStone(5)}>
                <img width='30px' src="https://cdn-icons-png.flaticon.com/128/13093/13093217.png" alt="" /> &nbsp;
                <span>Milestone 5</span>
            </div>

            <div className='py-2 liststonehove' onClick={() => setStone(6)}>
                <img width='30px' src="https://cdn-icons-png.flaticon.com/128/13093/13093217.png" alt="" /> &nbsp;
                <span>Milestone 6</span>
            </div>

            <div className='py-2 liststonehove' onClick={() => setStone(7)}>
                <img width='30px' src="https://cdn-icons-png.flaticon.com/128/13093/13093217.png" alt="" /> &nbsp;
                <span>Milestone 7</span>
            </div>

            <div className='py-2 liststonehove'>
                <img width='30px' src="https://cdn-icons-png.flaticon.com/128/13093/13093217.png" alt="" /> &nbsp;
                <span>Milestone 8</span>
            </div>

            <div className='py-2 liststonehove'>
                <img width='30px' src="https://cdn-icons-png.flaticon.com/128/13093/13093217.png" alt="" /> &nbsp;
                <span>Milestone 9</span>
            </div>

            <div className='py-2 liststonehove'>
                <img width='30px' src="https://cdn-icons-png.flaticon.com/128/13093/13093217.png" alt="" /> &nbsp;
                <span>Milestone 10</span>
            </div>
      
        </div>
    </div>
  )
}

export default ListofStone