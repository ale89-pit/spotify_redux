import { ADD_TO_FAV } from "../action/fetchFavortis";
import { REMOVE_FROM_FAV } from "../action/fetchFavortis";
const initialState = {
  content: [],
};

const favoritsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAV:
      return{
        ...state,
          content:[...state.content,action.payload]
        }
      case REMOVE_FROM_FAV:
        return{
          ...state,
          content:state.favoritsReducer.content.filter((fav,i)=> i !==action.payload)
        }
    default:
      return state;
  }
};

export default favoritsReducer;
