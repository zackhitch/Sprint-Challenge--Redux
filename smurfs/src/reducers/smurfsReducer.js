import * as actionTypes from '../actions';

const initialState = {
  smurfs: [],
  gettingSmurfs: false,
  gotSmurfs: false,
  postingSmurf: false,
  postedSmurf: false,
  error: false,
};

export const smurfsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GETTING_SMURFS:
      return { ...state, gettingSmurfs: true };
    case actionTypes.GET_SMURFS:
      return {
        ...state,
        gettingSmurfs: false,
        gotSmurfs: true,
        smurfs: action.payload,
      };
    case actionTypes.POSTING_SMURF:
      return { ...state, postingSmurf: true };
    case actionTypes.POST_SMURF:
      return {
        ...state,
        postingSmurf: false,
        postedSmurf: true,
        smurfs: action.payload,
      };
    case actionTypes.ERROR:
      return {
        ...state,
        gettingSmurfs: false,
        gotSmurfs: false,
        postingSmurf: false,
        postedSmurf: false,
        error: true,
      };
    default:
      return state;
  }
};
