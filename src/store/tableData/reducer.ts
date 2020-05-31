import {
  FETCH_DATA,
  REFRESH_DATA,
  tableDataTypes,
  dataState
} from './types'

const initialState: dataState = {
  num: 1,
  num2: 2
};

const tableDataReducer = (
  state = initialState,
  action: tableDataTypes
):dataState => {

  switch(action.type) {
    case FETCH_DATA:
      return {
        ...state,
        num: 3,
        num2: 4
      }
    default:
      return state
  }
}

export default tableDataReducer;