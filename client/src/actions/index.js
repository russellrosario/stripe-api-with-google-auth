import axios from 'axios';
import { FETCH_USER, FETCH_JOBLISTINGS } from './types';

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const submitAddUser = (values, history) => async dispatch => {
  try {
    const res = await axios.post('/api/addUsers', values);
    history.push('/addUsers');
    dispatch({ type: FETCH_USER, payload: res.data });
  }
}


export const fetchAddUsers = () => async dispatch => {
  const res = await axios.get('/api/addUsers');

  dispatch({ type: FETCH_JOBLISTINGS, payload: res.data });
};