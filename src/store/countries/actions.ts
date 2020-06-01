import {FETCH_DATA} from './types'
import { ThunkAction } from 'redux-thunk';
import {AppState} from '../index'
import { ActionCreator, Action, Dispatch } from "redux";
import {
  LOADING,
  LOAD_SUCCESS,
  LOAD_ERROR
} from './types'
import Api from '../../api/api';

export const fetchData = () => {
  return {
    type: FETCH_DATA,
  }
}

export type AppThunk = ActionCreator<
  ThunkAction<void, AppState, null, Action<string>>
>;

export const getCountries:AppThunk = () => {
  return (dispatch: Dispatch) => {
    dispatch({type: LOADING})
      Api.getUsers()
        .then(response=>response.json())
        .then(
          data=>dispatch({ type: LOAD_SUCCESS, data }),
          error=>dispatch({ type: LOAD_ERROR, error: error.message || 'Unexpected Error!!!' })
        )
  };
}