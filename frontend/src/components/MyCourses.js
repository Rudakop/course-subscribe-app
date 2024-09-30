import React, { useEffect, useState } from 'react';
import { getMyCourses } from '../api/serviceNowApi';

const MyCourses = ({ learnerSysId }) => {
    const [myCourses, setMyCourses] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const subscriptions = await getMyCourses(learnerSysId);
            setMyCourses(subscriptions);
        }
        fetchData();
    }, [learnerSysId]);

    return (
        <div>
            <h2>My Courses</h2>
            <ul>
                {myCourses.map((subscription) => (
                    <li key={subscription.sys_id}>
                        <h3>{subscription.course.title}</h3>
                        <p>{subscription.course.description}</p>
                        <p>Duration: {subscription.course.duration}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MyCourses;
