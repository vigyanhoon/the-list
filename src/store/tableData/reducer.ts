import {
  FETCH_DATA,
  REFRESH_DATA,
  tableDataTypes,
  dataState
} from './types'

const initialState: dataState = {
  num: 5,
};

const tableDataReducer = (
  state = initialState,
  action: tableDataTypes
):dataState => {

  switch(action.type) {
    case FETCH_DATA:
      return {
        ...state,
        num: 10
      }
    default:
      return state
  }
}

export default tableDataReducer;