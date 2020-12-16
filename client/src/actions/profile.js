import { SHOW_ALL_PROFILES, PROFILE_ERROR } from './types';
import axios from 'axios';

export const showAllProfiles = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/user/profile/all');

    dispatch({
      type: SHOW_ALL_PROFILES,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
    });
  }
};
