import UPDATE_PERSON from '../actions/personAction';
const personReducer = (state={}, action) => {
    if(action.type === UPDATE_PERSON){
      //Defining a new variable does not create a new actual object - it only creates
      // another reference to the same object.
      //
      return  {
        ...state,
        name:action.payload
        //object.assign({},state,{name:action.payload})
      };
    }
    return state;
}

export default personReducer;

  // array mutation [...state, new value]

