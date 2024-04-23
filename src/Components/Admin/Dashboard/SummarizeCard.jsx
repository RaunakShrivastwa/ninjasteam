import React, { useEffect, useState } from 'react'
import AdminCard from './AdminCard'
import axios from 'axios'
import { urlFunction } from '../../../App'

const SummarizeCard = () => {
    const [studentCount, setStudentCount] = useState(0);
    const [teacherCount, setTeacherCount] = useState(0);
    useEffect(() => {
        loadStudent()
    }, [])

    const loadStudent = async () => {
        try {
            const getAllUser = await axios.get(urlFunction() + `user/getAll`);
            categoriesData(getAllUser);
            console.log(`studentCount : ${studentCount}  and teacherCount : ${teacherCount}`);
        } catch (error) {
            console.log(`we find the error during fetching student`);
        }
    }

    const categoriesData = (userData) => {
        for (let user of userData) {
            const userStatus = user?.status.toLowerCase();
            if (userStatus == "student")
                setStudentCount(studentCount + 1);
            else if (userStatus == "teacher")
                setTeacherCount(teacherCount + 1);
        }
    }

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
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 my-3">
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