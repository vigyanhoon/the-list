import tableDataReducer from './tableData/reducer'
import countriesReducer from './countries/reducer'
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {logger, error} from './middlewares'

const rootReducer = combineReducers({
  tableData: tableDataReducer,
  countriesData: countriesReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export const getTableData = (state: AppState) => {
  return state.tableData;
}

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk, logger, error))
)

export default store;