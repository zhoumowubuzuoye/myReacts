const initState = 99
export default function countReducer(preState = initState, action) {
  const { type, data } = action
  switch (type) {
    case 'addNumber':
      return preState + data
    case 'delNumber':
      return preState - data
    default:
      return preState
  }
}
