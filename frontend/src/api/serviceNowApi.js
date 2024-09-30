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

export const getMyCourses = async (learnerSysId) => {
  const response = await instance.get('/x_quo_coursehub_course_subscription', {
    params: {
      sysparm_query: `learner=${learnerSysId}`,
      sysparm_expand: 'true',
    },
  });
  return response.data.result;
};
