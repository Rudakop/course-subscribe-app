import React, { useEffect, useState } from 'react';
import { getMyCourses, getSubscribedCourses } from '../api/serviceNowApi';
import { Card, CardContent, Typography, List, ListItem } from '@mui/material';

const MyCourses = ({ learnerSysId }) => {
    const [myCourses, setMyCourses] = useState([]);
    const [subscribedCourses, setSubscribedCourses] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const subscriptions = await getMyCourses(learnerSysId);
            const subscribed = await getSubscribedCourses(learnerSysId);
            setMyCourses(subscriptions);
            setSubscribedCourses(subscribed);
        }
        fetchData();
    }, [learnerSysId]);

    // Filter out courses that are already subscribed to
    const availableCourses = myCourses.filter(course => 
        !subscribedCourses.some(sub => sub.sys_id === course.sys_id)
    );

    return (
        <div>
            <Typography variant="h4" gutterBottom>
                Available Courses
            </Typography>
            <List>
                {availableCourses.map((subscription) => (
                    <ListItem key={subscription.sys_id}>
                        <Card style={{ width: '100%' }}>
                            <CardContent>
                                <Typography variant="h5">{subscription.course.title}</Typography>
                                <Typography>{subscription.course.description}</Typography>
                                <Typography>Duration: {subscription.course.duration}</Typography>
                            </CardContent>
                        </Card>
                    </ListItem>
                ))}
            </List>
        </div>
    );
};

export default MyCourses;
