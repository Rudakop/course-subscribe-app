import React, { useState, useEffect } from 'react';
import { useDrop } from 'react-dnd';
import { subscribeToCourse, getSubscribedCourses, unsubscribeFromCourse } from '../api/serviceNowApi';
import { Card, CardContent, Button, ListItem, Typography, Box } from '@mui/material';

const SubscriptionBasket = ({ learnerSysId }) => {
    const [subscribedCourses, setSubscribedCourses] = useState([]);

    useEffect(() => {
        const fetchSubscribedCourses = async () => {
            try {
                const courses = await getSubscribedCourses(learnerSysId);
                setSubscribedCourses(courses);
            } catch (error) {
                console.error('Failed to fetch subscribed courses:', error);
            }
        };

        fetchSubscribedCourses();
    }, [learnerSysId]);

    const handleUnsubscribe = async (courseSysId) => {
        try {
            await unsubscribeFromCourse(courseSysId, learnerSysId);
            setSubscribedCourses((prevCourses) =>
                prevCourses.filter((course) => course.sys_id !== courseSysId)
            );
            alert('Unsubscribed successfully!');
        } catch (error) {
            console.error('Failed to unsubscribe:', error);
        }
    };

    const [{ isOver }, drop] = useDrop({
        accept: 'COURSE',
        drop: async ({ course }) => {
            try {
                await subscribeToCourse(course.sys_id, learnerSysId);
                setSubscribedCourses((prevCourses) => [...prevCourses, course]);
                alert(`Subscribed to ${course.title}!`);
            } catch (error) {
                console.error('Failed to subscribe to course:', error);
            }
        },
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    });

    return (
        <Box ref={drop} sx={{ border: '2px dashed #ccc', padding: '20px', backgroundColor: isOver ? '#e0ffe0' : '#f9f9f9' }}>
            <Typography variant="h4" gutterBottom>
                My subscriptions
            </Typography>
            <Typography>Drag courses here to subscribe</Typography>
            {subscribedCourses.map((course,i) => (
               <ListItem key={`${course.sys_id}-${i}`}>
                    <Card style={{ width: '100%', backgroundColor: '#e0ffe0' }}>
                        <CardContent>
                            <Typography variant="h6" style={{ marginBottom: '10px' }}>
                                {course.title}
                            </Typography>
                            <Button
                                variant="outlined"
                                onClick={() => handleUnsubscribe(course.sys_id)}
                            >
                                Unsubscribe
                            </Button>
                        </CardContent>
                    </Card>
                </ListItem>
            ))}
        </Box>
    );
};

export default SubscriptionBasket;
