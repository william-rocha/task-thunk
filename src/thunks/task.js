import { taskApis } from "../API/task";

import { TaskActions } from "../actions/task";

const taskThunks = {
  getAll: () => dispatch => {
    taskApis.getAll().then(tasks => dispatch(TaskActions.getAll(tasks)));
  }
};

export { taskThunks };
