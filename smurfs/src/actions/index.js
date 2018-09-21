import axios from 'axios';

export const ERROR = 'ERROR';
export const GETTING_SMURFS = 'GETTING_SMURFS';
export const GET_SMURFS = 'GET_SMURFS';
export const POSTING_SMURF = 'POSTING_SMURF';
export const POST_SMURF = 'POST_SMURF';

const URL = 'http://localhost:3333/smurfs';

export const getSmurfs = () => {
  return dispatch => {
    dispatch({ type: GETTING_SMURFS });
    axios
      .get(`${URL}`)
      .then(response => {
        dispatch({ type: GET_SMURFS, payload: response.data });
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: err });
      });
  };
};

export const postSmurf = smurf => {
  return dispatch => {
    dispatch({ type: POSTING_SMURF });
    axios
      .post(`${URL}`, smurf)
      .then(response => {
        dispatch({ type: POST_SMURF, payload: response.data });
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: err });
      });
  };
};
