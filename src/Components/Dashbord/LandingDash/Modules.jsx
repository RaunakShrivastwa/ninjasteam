import React from 'react'
import { Link } from 'react-router-dom';
import './milestone.css';

function Modules({ course, log }) {
    console.log(course);
    return (
        <div className='cp' style={{height:'60vh',overflow:'auto'}}>

            <div className='p-1 table-div'>
                <Link title='Click To Start Learning' className='chapter-title' to={`/chapter/Dashboard`}>
                    <table className="table chapter-body">
                        <tbody>
                            <tr className='heart' style={{ borderLeft: 0, borderRight: 0, borderBottom: 0 }}>
                                <td className='bo p-3 d-none d-sm-block'>
                                    <span className="tt1 rr"><img width='40px' src="https://cdn-icons-png.flaticon.com/128/919/919825.png" alt="" /></span>
                                    <br />
                                </td>
                                <td className='bo'></td>
                                <td className='bo p-4'>
                                    <span className=""><strong className=''>Spring boot</strong></span>
                                </td>
                                <td className="tt1 bo p-4">
                                    <span className="text-danger">Deadline: 2 Dec 2022</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </Link>
            </div>

            <div className='p-1 table-div'>
                <Link title='Click To Start Learning' className='chapter-title' to={`/chapter/Dashboard`}>
                    <table className="table chapter-body">
                        <tbody>
                            <tr className='heart' style={{ borderLeft: 0, borderRight: 0, borderBottom: 0 }}>
                                <td className='bo p-3 d-none d-sm-block'>
                                    <span className="tt1 rr"><img width='40px' src="https://cdn-icons-png.flaticon.com/128/919/919825.png" alt="" /></span>
                                    <br />
                                </td>
                                <td className='bo'></td>
                                <td className='bo p-4'>
                                    <span className=""><strong className=''>Spring boot</strong></span>
                                </td>
                                <td className="tt1 bo p-4">
                                    <span className="text-danger">Deadline: 2 Dec 2022</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </Link>
            </div>

            <div className='p-1 table-div'>
                <Link title='Click To Start Learning' className='chapter-title' to={`/chapter/Dashboard`}>
                    <table className="table chapter-body">
                        <tbody>
                            <tr className='heart' style={{ borderLeft: 0, borderRight: 0, borderBottom: 0 }}>
                                <td className='bo p-3 d-none d-sm-block'>
                                    <span className="tt1 rr"><img width='40px' src="https://cdn-icons-png.flaticon.com/128/919/919825.png" alt="" /></span>
                                    <br />
                                </td>
                                <td className='bo'></td>
                                <td className='bo p-4'>
                                    <span className=""><strong className=''>Spring boot</strong></span>
                                </td>
                                <td className="tt1 bo p-4">
                                    <span className="text-danger">Deadline: 2 Dec 2022</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </Link>
            </div>

            <div className='p-1 table-div'>
                <Link title='Click To Start Learning' className='chapter-title' to={`/chapter/Dashboard`}>
                    <table className="table chapter-body">
                        <tbody>
                            <tr className='heart' style={{ borderLeft: 0, borderRight: 0, borderBottom: 0 }}>
                                <td className='bo p-3 d-none d-sm-block'>
                                    <span className="tt1 rr"><img width='40px' src="https://cdn-icons-png.flaticon.com/128/919/919825.png" alt="" /></span>
                                    <br />
                                </td>
                                <td className='bo'></td>
                                <td className='bo p-4'>
                                    <span className=""><strong className=''>Spring boot</strong></span>
                                </td>
                                <td className="tt1 bo p-4">
                                    <span className="text-danger">Deadline: 2 Dec 2022</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </Link>
            </div>

            <div className='p-1 table-div'>
                <Link title='Click To Start Learning' className='chapter-title' to={`/chapter/Dashboard`}>
                    <table className="table chapter-body">
                        <tbody>
                            <tr className='heart' style={{ borderLeft: 0, borderRight: 0, borderBottom: 0 }}>
                                <td className='bo p-3 d-none d-sm-block'>
                                    <span className="tt1 rr"><img width='40px' src="https://cdn-icons-png.flaticon.com/128/919/919825.png" alt="" /></span>
                                    <br />
                                </td>
                                <td className='bo'></td>
                                <td className='bo p-4'>
                                    <span className=""><strong className=''>Spring boot</strong></span>
                                </td>
                                <td className="tt1 bo p-4">
                                    <span className="text-danger">Deadline: 2 Dec 2022</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </Link>
            </div>

            <div className='p-1 table-div'>
                <Link title='Click To Start Learning' className='chapter-title' to={`/chapter/Dashboard`}>
                    <table className="table chapter-body">
                        <tbody>
                            <tr className='heart' style={{ borderLeft: 0, borderRight: 0, borderBottom: 0 }}>
                                <td className='bo p-3 d-none d-sm-block'>
                                    <span className="tt1 rr"><img width='40px' src="https://cdn-icons-png.flaticon.com/128/919/919825.png" alt="" /></span>
                                    <br />
                                </td>
                                <td className='bo'></td>
                                <td className='bo p-4'>
                                    <span className=""><strong className=''>Spring boot</strong></span>
                                </td>
                                <td className="tt1 bo p-4">
                                    <span className="text-danger">Deadline: 2 Dec 2022</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </Link>
            </div>

        </div>

    )
}

export default Modules