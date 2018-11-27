import { combineReducers } from 'redux';
import Calendar from './Calendar';

const rootReducer = combineReducers({
    calendar: Calendar
});

export default rootReducer;