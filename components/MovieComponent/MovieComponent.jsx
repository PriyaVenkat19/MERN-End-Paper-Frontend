import React, { useEffect, useState } from "react"

function MovieComponent() {
  const [users, setUsers] = useState([])

  const fetchUserData = () => {
    fetch("http://localhost:3001/api/data")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setUsers(data)
      })
  }

  useEffect(() => {
    fetchUserData()
  }, [])

  return (
    <div>
      {users.length > 0 && (
        <ul>
          {users.map(user => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default MovieComponent