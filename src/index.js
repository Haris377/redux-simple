import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './store/index';
import { Provider } from 'react-redux'


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


// the way to subscribe App compont to store, other way which is use in application is Provider
// let render = () => {
//   ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
// }

// store.subscribe(render);
// render();

//-----------------------------------------------------------------------------------------------------
// const reducer = (state,action) => {
// 	if(action.type === 'UPDATE_NAME'){
// 		return {name:action.payload};
//   }
//   return {name:'Haris'};
// }

// const store = createStore(reducer);
// console.log(store.getState());    		

// store.dispatch({type:'UPDATE_NAME', payload:'muhammad'})  
														  
// console.log(store.getState());

//-----------------------------------------------------------------------------------------------------

// const personReducer = (state={}, action) => {
//   if(action.type === 'UPDATE_PERSON'){
//     return {personName:action.payload};
//   }
//   return state
// }
// const gameReducer = (state, action) => {
//   if(action.type === 'UPDATE_GAME'){
//     return {personName:action.payload};  
//   }
//   return {gameName: 'Football'}
// }
// const AllReducer = combineReducers({gameReducer,personReducer})
// const initialStates = {
//   game:{gameName:'Football'},
//   person:{personName:'Haris'}
// }
// const store = createStore(AllReducer,initialStates);
// console.log(store.getState());

// store.dispatch({type:'UPDATE_PERSON', payload:'muhammad'})  			

// console.log(store.getState());
//------------------------------------------------------------------------------------------------------

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
