import {
  LOADING,
  LOAD_SUCCESS,
  LOAD_ERROR,
  dataState
} from './types'
import {countriesActions} from './types'

const initialState = {
    data: [],
    loading: false,
    error: ''
};

export default function countriesReducer(
  state = initialState,
  action:countriesActions):dataState 
  {
    switch (action.type) {
        case LOADING: {
            return {
                ...state,
                loading: true,
                error: ''
            };
        }
        case LOAD_SUCCESS: {
            return {
                ...state,
                data: action.data,
                loading: false
            }
        }
        case LOAD_ERROR: {
            return {
                ...state,
                loading: false,
                error: action.error
            };
        }
        default: {
            return state;
        }
    }
}