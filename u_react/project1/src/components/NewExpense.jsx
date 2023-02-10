import './NewExpense.css'
import ExpenseForm from './ExpenseForm'
import {useState} from 'react'

export default function NewExpense(props) {
  const [showModal, setShowModal] = useState(false);

  function saveExpenseDataHandler(expenseData) {
    const data = {
      ...expenseData,
      id: Math.random().toString(),
    }
    props.onAddExpense(data);
    setShowModal(false);
  }

  function handleClick() {
    setShowModal(old => !old)
  }

  return (
    <div className='new-expense'>
      {!showModal && <button onClick={() => setShowModal(old => !old)}>Add New Expense</button>}
      {showModal  && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={handleClick}  />}
    </div>
  )
}