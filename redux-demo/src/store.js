import { createStore } from "redux";
import rootReducer from "./reducers";
import ChangeTheNumber from "./reducers/Change";

const store = createStore(ChangeTheNumber);

export default store



// Redux ---> button dispatch action 