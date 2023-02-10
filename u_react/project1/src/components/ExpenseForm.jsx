import "./ExpenseForm.css";
import { useState } from "react";

export default function ExpenseForm(props) {
  const [userInput, setUserInput] = useState({
    title: "",
    amount: "",
    date: "",
  });

  function inputChangeHandler(e) {
    setUserInput((prevState) => {
      if (e.target.name === 'date') {
        return {
          ...prevState,
          date: new Date(e.target.value)
        };
      } else {
        return {
          ...prevState,
          [e.target.name]: e.target.value,
        };
      }
    });
  }

  function submitHandler(e) {
    e.preventDefault();
    console.log('sumbitted!')
    props.onSaveExpenseData(userInput);
    setUserInput({
      title: "",
      amount: "",
      date: "",
    })
  }

  return (
    <form onSubmit={submitHandler}>
        <div className="new-expense__conrtols">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              type="text"
              onChange={inputChangeHandler}
              name="title"
              value={userInput.title}
            />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              onChange={inputChangeHandler}
              name="amount"
              value={userInput.amount}
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              min="2019-01-01"
              max="2023-12-31"
              onChange={inputChangeHandler}
              name="date"
              value={userInput.date}
            />
          </div>
          <div className="new-expense__actions">
            <button onClick={props.onCancel()}type="submit">Add Expense</button>
            <button onClick={props.onCancel()}type="reset">Cancel</button>
          </div>
        </div>
    </form>
  );
}
