import { combineReducers } from 'redux';
import authReducer from './authReducer';
import { reducer as reduxForm } from 'redux-form';
import  selectedCourse  from './selectedCourse';

export default combineReducers({
  auth: authReducer,
  form: reduxForm,
  selectedCourse: selectedCourse
});
