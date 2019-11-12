import { actions } from "../constants/actions";

const INITIAL_STATE = {
  tasks: []
};

const taskReducers = (state = INITIAL_STATE, action) => {
  const { payload, type } = action;
  const { tasks } = state;
  switch (type) {
    case actions.TASK_ADD:
      return { ...state, tasks: [...tasks, payload] };
    case actions.TASK_REMOVE:
      return { ...state, tasks: tasks.filter(task => task !== payload) };
    default:
      return state;
  }
};

export { taskReducers };
