import React, { useEffect, useState } from 'react';
import CourseCard from '../../CourseCommon/CourseCard';
import axios from 'axios';

const CourseSlideContent = ({ content }) => {
    const [course, setCourse] = useState([]);
    const [filterCourse, setFilterCourse] = useState([]);

    useEffect(() => {
        const loadCourses = async () => {
            try {
                const response = await axios.get(`http://localhost:4000/course`);
                setCourse(response.data.course);
            } catch (err) {
                console.log("There is an error: ", err);
            }
        };
        loadCourses();
    }, []);

    useEffect(() => {
        console.log("Content:", content);
        console.log("Courses:", course);
        if (content === "All") {
            // No need to filter, set all courses
            setFilterCourse(course);
        } else {
            // Filter courses based on the content/tag
            const filteredCourses = course.filter(data => data.tag === content);

                 setFilterCourse(filteredCourses);
        }
    }, [content, course]);
    

    return (
        <div>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 mb-5">
                {filterCourse.map(data => (
                    <CourseCard key={data.id} courseData={data} />
                ))}
            </div>
        </div>
    );
};

export default CourseSlideContent;
