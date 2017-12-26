import axios from 'axios';
import { FETCH_USER } from './types';

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');
  console.log('fetchUser ', res.data);
  dispatch({
    type: FETCH_USER,
    payload: res.data
  });
};

export const handleToken = token => async dispatch => {
  const res = await axios.post('/api/stripe', token);
  console.log('handleToken ', res);
  dispatch({
    type: FETCH_USER,
    payload: res.data
  });
};

export const submitCourse = (values, history) => async dispatch => {
  const res = await axios.post('/api/course_submit', values);
  history.push('/courses');
  return { type: 'SUBMIT_COURSE' };
};

export const setCourse = course => {
  return { type: 'SET_COURSE', course };
};

