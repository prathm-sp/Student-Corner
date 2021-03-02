const actions = {
  SET_USER: "SET_USER",


  setuser: (data) => {
    return {
      type: actions.SET_USER,
      payload: data,
    };
  },
  
 
};

export default actions;
