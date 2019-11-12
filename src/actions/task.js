import { actions } from "../constants/actions";

const TaskActions = {
  add: task => ({
    payload: task,
    type: actions.TASK_ADD
  }),
  remove: task => ({
    payload: task,
    type: actions.TASK_REMOVE
  })
};

export { TaskActions };
