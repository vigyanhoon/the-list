export const LOADING = 'FETCH_COUNTRIES_LOADING';
export const LOAD_SUCCESS = 'FETCH_COUNTRIES_SUCCESS';
export const LOAD_ERROR = 'FETCH_COUNTRIES_ERROR';
export const FETCH_DATA = 'FETCH_DATA'

export interface Country {
  Rank:string;
  Country:string;
  Population:string;
  Date:string;
  Source:string;
  'Population %':string
}

export interface dataState {
  loading:boolean
  error:string
  data:any
}

export interface loadingAction {
  type: typeof LOADING;
}

export interface successAction {
  type: typeof LOAD_SUCCESS;
  data:Country[];
}

export interface errorAction {
  type: typeof LOAD_ERROR;
  error:string;
}

export type countriesActions = loadingAction | successAction | errorAction;