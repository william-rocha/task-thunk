import { combineReducers, createStore } from "redux";

const INITIAL_STATE = {
  tasks: []
};

const taskReducer = (state = INITIAL_STATE, action) => {
  const { payload, type } = action;
  const { tasks } = state;
  switch (type) {
    case "TASK_ADD":
      return { ...state, tasks: [...tasks, payload] };
    case "TASK_REMOVE":
      return { ...state, tasks: tasks.filter(task => task !== payload) };
    default:
      return state;
  }
};

const reducers = combineReducers({
  taskReducer
});

const store = createStore(reducers);

const actions = {
  add: task => ({
    payload: task,
    type: "TASK_ADD"
  }),
  remove: task => ({
    payload: task,
    type: "TASK_REMOVE"
  })
};

export { actions, store };
