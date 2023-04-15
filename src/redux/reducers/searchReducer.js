
import { ADD_ALBUM_POP } from "../action/fetchSerch";
import { ADD_ALBUM_HIP } from "../action/fetchSerch";
import { ADD_ALBUM_ROCK } from "../action/fetchSerch";
import { ADD_ALBUM_ARTIS } from "../action/fetchSerch";


const initialState = {
  rock:[],
  hipHop:[],
  pop:[],
  albumArtist:[],   
  
};

const searchResult = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ALBUM_ROCK:
      return{
        ...state,
        rock: [...state.rock,action.payload]
      }
      case ADD_ALBUM_HIP:
        return {
          ...state,
          
            hipHop:[...state.hipHop,action.payload]
          
        }
        case ADD_ALBUM_POP:
          return {
            ...state,
        pop:[...state.pop,action.payload]
            
          }
          case ADD_ALBUM_ARTIS:
            return {
              ...state,
              albumArtist:[action.payload]
            }
    default:
      return state;
  }
};

export default searchResult;
