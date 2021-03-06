/*var initState = {
  titleList : false,
  backgroundColor:"#50AADB",
  width: "1024px",
  height: "768px",
  left: "0px",
  top: "0px",
};*/

const itemReducer = (state, action) => {
    switch (action.type) {
      case "CHANGE_BACKGROUNDCOLOR2LIGHTBLUE": {
       return  state = {
         ...state,
         backgroundColor: action.backgroundColor
       };
      }
      case "CHANGE_BACKGROUNDCOLOR2BLUE":{
        return  state = {
          ...state,
          backgroundColor: action.backgroundColor
        };
      }
      case "TITLELIT_ONCLICK":{
        return  state = {
          ...state,
          titleList: action.titleList
        };
      }case "TITLELIT_OFFCLICK":{
        return  state = {
          ...state,
          titleList: action.titleList
        };
      }
      default:
        return state;
    }
};

export default itemReducer;