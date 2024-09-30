import axios from 'axios';

const instance = axios.create({
  baseURL: `${process.env.REACT_APP_SN_INSTANCE}/api/now/table`,
  auth: {
    username: process.env.REACT_APP_SN_USERNAME,
    password: process.env.REACT_APP_SN_PASSWORD,
  },
});

export const getCourses = async () => {
  const response = await instance.get('/x_quo_coursehub_course');
  return response.data.result;
};

export const subscribeToCourse = async (courseSysId, learnerSysId) => {
  const response = await instance.post('/x_quo_coursehub_course_subscription', {
    course: courseSysId,
    learner: learnerSysId,
  });
  return response.data.result;
};

export const getSubscribedCourses = async (learnerSysId) => {
  const response = await instance.get('/x_quo_coursehub_course_subscription', {
    params: {
      sysparm_query: `learner.sys_id=${learnerSysId}`,
      sysparm_fields: 'sys_id,course,course.sys_id,course.title,course.description,course.duration',
    },
  });

  return response.data.result.map((subscription) => {
    const course = subscription.course;
    return {
      sys_id: course.sys_id,
      title: course.title,
      description: course.description,
      duration: course.duration,
    };
  });
};

export const unsubscribeFromCourse = async (courseSysId, learnerSysId) => {
  const sysparm_query = `course.sys_id=${courseSysId}^learner.sys_id=${learnerSysId}`;
  
  const response = await instance.get('/x_quo_coursehub_course_subscription', {
    params: {
      sysparm_query,
    },
  });

  console.log('Query:', sysparm_query);
  console.log('Response Data:', response.data);

  const subscription = response.data.result[0];
  if (subscription) {
    const subscriptionSysId = subscription.sys_id;
    await instance.delete(`/x_quo_coursehub_course_subscription/${subscriptionSysId}`);
    return true;
  } else {
    console.warn('Subscription not found for deletion.');
    return false;
  }
};