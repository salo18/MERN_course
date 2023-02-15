import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Form from './Form'
import List from './List'

function App() {
  const [users, setUsers] = useState([]);

  function updateUser(user) {
    setUsers(old => {
      return [
        ...old,
        user
      ]
    })
  }

  return (
    <div className="container">
      <Form
        sendFormData={updateUser}
      />
      <List users={users}/>
    </div>
  )
}

export default App
