import { actions } from "../constants/actions";

const TaskActions = {
  add: task => ({
    payload: task,
    type: actions.TASK_ADD
  }),
  getAll: tasks => ({
    payload: tasks,
    type: actions.TASK_GET_ALL
  }),
  remove: task => ({
    payload: task,
    type: actions.TASK_REMOVE
  })
};

export { TaskActions };
