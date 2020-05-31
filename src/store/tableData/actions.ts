import {FETCH_DATA, REFRESH_DATA} from './types'

export const fetchData = () => {
  return {
    type: FETCH_DATA,
  }
}

export const refreshData = () => {
  return {
    type: REFRESH_DATA,
  }
}