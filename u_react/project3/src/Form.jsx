import {useState} from 'react'

export default function Form(props) {
  const [formData, setFormData] = useState({
    userName: '',
    age: '',
  });

  const [validNumber, setValidNumber] = useState(true);

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

// must be integer greater than -1 

    props.sendFormData(formData);
  }

  return (
   <form onSubmit={submit}>
     <p>message</p>
     <label>User Name</label>
     <input type='text' name='userName' required onChange={updateForm}></input>
     <label>Age</label>
     <input type='number' name='age' required onChange={updateForm}></input>
     <button type='submit'>Add User</button>
   </form>
  )
}
