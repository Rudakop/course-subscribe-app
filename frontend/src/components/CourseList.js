import React, { useEffect, useState } from 'react';
import { getCourses, subscribeToCourse } from '../api/serviceNowApi';

const CourseList = ({ learnerSysId }) => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const courses = await getCourses();
            setCourses(courses);
        }
        fetchData();
    }, []);

    const handleSubscribe = async (courseSysId) => {
        await subscribeToCourse(courseSysId, learnerSysId);
        alert('Subscribed successfully!');
    };

    return (
        <div>
            <h2>Available Courses</h2>
            <ul>
                {courses.map((course) => (
                    <li key={course.sys_id}>
                        <h3>{course.title}</h3>
                        <p>{course.description}</p>
                        <p>Duration: {course.duration}</p>
                        <button onClick={() => handleSubscribe(course.sys_id)}>
                            Subscribe
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CourseList;
