export const FETCH_DATA = 'FETCH_DATA';
export const REFRESH_DATA = 'REFRESH_DATA';

export interface dataState {
  num:number
  num2:number
}

interface fetchDataAction {
  type: typeof FETCH_DATA;
}

interface refreshDataAction {
  type: typeof REFRESH_DATA;
}

export type tableDataTypes = fetchDataAction | refreshDataAction;