export default function(state = null, action) {
  switch (action.type) {
    case 'SET_COURSE':
      return action.course;
    default:
      return state;
  }
}
