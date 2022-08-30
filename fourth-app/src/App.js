import {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "./redux/usersReducer/usersReducer";

function App() {
  const users = useSelector(state => state.users);
  const loading = useSelector(state => state.loading);
  const error = useSelector(state => state.error);
  const dispatch = useDispatch();

  const retry = () => {
    dispatch(getUsers())
  }

  useEffect(() => {
    dispatch(getUsers())
  }, [dispatch])

  if(loading) {
    return (
      <div>
        Loading...
      </div>
    )
  }

  if(error) {
    return (
      <div>
        <p>Error!</p>
        <button onClick={retry}>Try again</button>
      </div>
    )
  }

  return (
    <div>
      {users.map((user) =>{
        return (
          <div key={user.id}>
            {user.name}
          </div>
        )
      })}
    </div>
  );
}

export default App;
