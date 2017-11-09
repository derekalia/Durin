import axios from 'axios';
import { FETCH_USER } from './types';

// const updateUser = user => {
//   type: FETCH_USER;
//   payload: user;
// };

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');
  console.log(res.data)
  dispatch( {
    type: FETCH_USER,
    payload: res.data
  });
};
