// try to fix
// var getLocal = () => {
//   let tasks = [];
//   Object.keys(localStorage).forEach((key) => {
//     tasks.push(JSON.parse(localStorage[key]))
//   });
//   return tasks;
// }

var initialState = {
  tasks: [],
  openInput: false,
  openDrawer: false
};

export default function reducer (state, action) {
  if (state === undefined) {
    return initialState;
  }

  switch (action.type) {
    case 'API_CALL':
      return Object.assign (
        {},
        state,
        {tasks: action.tasks}
      );
    case 'TOGGLE_INPUT':
      return Object.assign (
        {},
        state,
        {openInput: action.open}
      );
    default:
      return state;
  }
}
