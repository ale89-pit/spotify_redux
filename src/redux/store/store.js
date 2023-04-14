import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import favoritsReducer from "../reducers/favoritsReducer";
import searchResultReducer from "../reducers/searchReducer";
import playlistReducer from "../reducers/playlistReducer";

const bigReducer = combineReducers({
  favorits: favoritsReducer,
  searchResult: searchResultReducer,
  playlist: playlistReducer,
});

const store = configureStore({
  reducer: bigReducer,
});

export default store;
