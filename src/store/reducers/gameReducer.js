const gameReducer = (state={}, action) => {
    if(action.type === 'UPDATE_GAME'){
      return {name:action.payload};  
    }
    return state;
  }

export default gameReducer;