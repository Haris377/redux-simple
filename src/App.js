import './App.css';
import update_person from './store/actions/personAction';
import update_game from './store/actions/gameAction';
import fetch_users from './store/actions/userAction';
import {connect} from 'react-redux';

//do not need to use these function in this way when we use
// connect(mapDispatchToPtops)(App) component to store.
//
// function updatePerson(){
//   store.dispatch(update_person)
// }

// function updateGame(){
//   store.dispatch(update_game)
// }

function App(props) {
  console.log(props)  // here props have dispatch(), getState()
  return (
    <div className="App">
     <h1>Redux Toturial</h1>
       Person Name : {props.person.name} 
       {/*{store.getState().person.name}*/}
       {/*getState return the reducer state object */}
       <br/>
      <button onClick={props.updatePerson}>Update Person</button>
       {/* <button onClick={store.dispatch(updatePerson)}>Update Person</button> 
            it is use when we do not connect App.js to mapDispatchToProps*/}
      <br/>
       Game Name : {props.game.name}
      {/* Game Name : {store.getState().game.name}  
          it is use when we do not connect App.js to mapStateToProps*/}
      <br/>
      <button onClick={props.updateGame}>Update Game</button>
      <br/>
      Users : <button onClick={props.fetchUsers}>Fetch Users</button>
      {
        props.users.length === 0 ? <p>No User Found</p> : 
        props.users.map(user => <p>{user.first_name}</p>)
      }
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    //game:state.game,
    //person:state.person
    //users:state.user
    state
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    updatePerson: () => {dispatch(update_person)},
    updateGame: () => {dispatch(update_game)},
    fetchUsers: () => {dispatch(fetch_users)}
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
//