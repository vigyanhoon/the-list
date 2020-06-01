import tableDataReducer from './tableData/reducer'
import countriesReducer from './countries/reducer'
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
  tableData: tableDataReducer,
  countriesData: countriesReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export const getTableData = (state: AppState) => {
  return state.tableData;
}

const logger = (store: { getState: () => any; }) => (next: (arg0: any) => any) => (action: any) => {
  console.log('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  return result
}

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk, logger))
)

export default store;