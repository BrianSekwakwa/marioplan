export const createProject = project => {
  return (dispatch, getState) => {
    // Make some async calls to the database
    dispatch({ type: "CREATE_PROJECT", project: project });
  };
};
