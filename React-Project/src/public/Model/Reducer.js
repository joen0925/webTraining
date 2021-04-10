const initState = {
  titleList : false,
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
         ...state,
         backgroundColor: action.backgroundColor
       };
      }
      case "CHANGE_BACKGROUNDCOLOR2BLUE":{
        return  state = {
          ...initState,
          backgroundColor: action.backgroundColor
        };
      }
      case "TITLELIT_ONCLICK":{
        return  state = {
          ...initState,
          titleList: action.titleList
        };
      }case "TITLELIT_OFFCLICK":{
        return  state = {
          ...initState,
          titleList: action.titleList
        };
      }
      default:
        return state;
    }
};

export default itemReducer;