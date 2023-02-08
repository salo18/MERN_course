import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from './Card'

export default function Expenses(props) {
  const expenseItems = props.expenses.map((exp, idx) => {
    return <ExpenseItem
      expense={props.expenses[idx]}
      key={props.expenses[idx].id}
      />;
  });

  return (
      <Card className='expenses'>
        {expenseItems}
      </Card>
  );
}
