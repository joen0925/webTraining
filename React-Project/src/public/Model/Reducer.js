const initState = {
  backgroundColor:"#50AADB",
  width: "1024px",
  height: "768px",
  left: "0px",
  top: "0px",
};

const itemReducer = (state = initState, action) => {
    switch (action.type) {
      case "CHANGE_BACKGROUNDCOLOR2LIGHTBLUE": {
       return  state = {
         ...initState,
         backgroundColor: action.backgroundColor
       };
      }
      case "CHANGE_BACKGROUNDCOLOR2BLUE":{
        return  state = {
          ...initState,
          backgroundColor: action.backgroundColor
        };
      }
      default:
        return state;
    }
};

export default itemReducer;