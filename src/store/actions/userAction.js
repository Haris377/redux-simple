export const FETCH_USERS = 'FETCH_USERS'

const fetch_users = () => {
    fetch('https://reqres.in/api/users')
    .then(res => res.json())
    .then(res => dispatch({type:FETCH_USER, payload: res.data}))
}

export default fetch_users;