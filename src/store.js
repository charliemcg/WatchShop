import { createStore } from "redux";
import blahReducer from "./reducers/blahReducer";

// export default createStore(combineReducers({ blahReducer }));
export default createStore(blahReducer);
