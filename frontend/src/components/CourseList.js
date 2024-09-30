import React, { useEffect, useState } from 'react';
import { getCourses } from '../api/serviceNowApi';
import { useDrag } from 'react-dnd';
import { Card, CardContent, Typography, List, ListItem, Box } from '@mui/material';
import SubscriptionBasket from './SubscriptionBasket';

const CourseList = ({ learnerSysId }) => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const courses = await getCourses();
            setCourses(courses);
        }
        fetchData();
    }, []);

    return (
        <Box display="flex" justifyContent="space-between" gap={2}>
            <Box flex={1}>
                <Typography variant="h4" gutterBottom>
                    Available Courses
                </Typography>
                <List>
                    {courses.map((course) => (
                        <CourseItem key={course.sys_id} course={course} />
                    ))}
                </List>
            </Box>
            <Box flex={1}>
                <SubscriptionBasket learnerSysId={learnerSysId} />
            </Box>
        </Box>
    );
};

export default CourseList;

const CourseItem = ({ course }) => {
    const [{ isDragging }, drag] = useDrag({
        type: 'COURSE',
        item: { course },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    });

    return (
        <ListItem ref={drag} style={{ opacity: isDragging ? 0.5 : 1 }}>
            <Card style={{ width: '100%', cursor: 'move' }}>
                <CardContent>
                    <Typography variant="h5">{course.title}</Typography>
                    <Typography>{course.description}</Typography>
                    <Typography>Duration: {course.duration}</Typography>
                </CardContent>
            </Card>
        </ListItem>
    );
};
