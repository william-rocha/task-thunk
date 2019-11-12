import { actions } from "../constants/actions";

const TaskActions = {
  add: task => ({
    payload: task,
    type: actions.TASK_ADD
  }),
  remove: task => ({
    payload: task,
    type: task.TASK_REMOVE
  })
};

export { TaskActions };
