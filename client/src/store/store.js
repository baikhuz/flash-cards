import { createStore, applyMiddleware } from "redux";
import flashCards from "../reducers";
import thunk from "redux-thunk";

const store = createStore(flashCards, applyMiddleware(thunk));

export default store;
