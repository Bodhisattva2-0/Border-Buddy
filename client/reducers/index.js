import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { routerReducer as router } from 'react-router-redux';
import signUpTravelerReducer from './signUpTraveler'
import travelersReducer from './travelers';
import selectedTravelerReducer from './selectedTraveler';
import flightReducer from './flight';
import authReducer from './auth';


const reducer = combineReducers({
  routing: router,
  form: formReducer,
  signUpTraveler: signUpTravelerReducer,
  travelers: travelersReducer,
  selectedTraveler: selectedTravelerReducer,
  flight: flightReducer,
  auth: authReducer
});

export default reducer;
