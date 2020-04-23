const initState = {
  projects: [
    {
      id: "1",
      title: "connect mongoDB to express server",
      content: "dannng"
    },
    {
      id: "2",
      title: "fetch ninja data from database using http get method",
      content: "dannng"
    },
    {
      id: "3",
      title: "send or post new data to database",
      content: "dannng"
    }
  ]
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_PROJECT":
      console.log("project created", action.project);
      return state;
    case "CREATE_PROJECT_ERROR":
      console.log("create project error", action.error);
      return state;
    default:
      return state;
  }
};

export default projectReducer;
