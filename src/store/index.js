import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import personReducer from './reducers/personReducer';
import gameReducer from './reducers/gameReducer';
import userReducer from './reducers/userReducer';
import thunk from 'redux-thunk';

  const AllReducer = combineReducers({game:gameReducer,person:personReducer,users:userReducer})

  const InitialStates = {
    person:{name:'Haris', email:"haris@gmail.com"},
    game:{name:'Football'},
    users:[]
  }

  const middleware = [thunk]

  const store = createStore(AllReducer,InitialStates,compose(applyMiddleware(...middleware)),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

  export default store;
  
  //store which brings the actions and reducers together
  //Allow access to state via getState()
  //Allow state to be updated via dispatch(action)
  //Registers listeners via subscribe(listener) 
  
  
  