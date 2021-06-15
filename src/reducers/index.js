import { combineReducers } from "redux";
import modalsReducer from "./modalsReducer";
import validationReducer from "./validationReducer";
import tweetsReducer from "./tweetsReducer";

//Aqui se combinan los reducers para luego exportar uno solo
export default combineReducers({
  modals: modalsReducer,
  validations: validationReducer,
  tweets: tweetsReducer,
});
