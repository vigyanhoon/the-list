
export const logger = (store: any) => (next: any) => (action: any) => {
  console.log('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())

  return result
}

export const error = (store: any) => (next: any) => (action: any) => {
  if(action.error) {
    console.log('error found')
  }
  let result = next(action)
  return result
}