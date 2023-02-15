import {useState} from 'react'

export default function Form(props) {
  const [formData, setFormData] = useState({
    userName: '',
    age: '',
    id: Math.random().toString(),
  });

  function updateForm(e) {
    setFormData(old => {
      return {
        ...old,
        [e.target.name]: e.target.value
      }
    })
  }

  function submit(e) {
    e.preventDefault();
    props.sendFormData(formData);
    setFormData({
      userName: '',
      age: '',
      id: Math.random().toString(),
    })
  }

  return (
   <form onSubmit={submit}>
     <p>message</p>
     <label>User Name</label>
     <input type='text' name='userName' value={formData.userName} required onChange={updateForm}></input>
     <label>Age</label>
     <input type='number' name='age' value={formData.age} required onChange={updateForm}></input>
     <button type='submit'>Add User</button>
   </form>
  )
}
