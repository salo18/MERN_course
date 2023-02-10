import {useState} from 'react'
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from './Card';
import ExpenseFilter from './ExpenseFilter';
import ExpensesChart from './ExpensesChart';

export default function Expenses(props) {
  const [year, setYear] = useState('2020');

  const filtered = props.expenses.filter(exp => exp.date.getFullYear() === Number(year));

  const expenseItems = filtered.map((exp, idx) => {
    return <ExpenseItem
      expense={exp}
      key={exp.id}
      />;
  });

  function receiveYear(year) {
    setYear(year);
  }

  return (
    <Card className='expenses'>
      <ExpenseFilter selected={year} sendYear={receiveYear}/>
      {expenseItems.length === 0 && <p>No expenses that</p>}
      <ExpensesChart items={filtered}/>
      {expenseItems}
    </Card>
  );
}
