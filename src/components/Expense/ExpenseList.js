import ExpenseItems from "./ExpenseItems";
import './ExpenseList.css'
const ExpenseList = (props) => {
    if (props.items.length === 0) {
        return <h2 className="expense-list__fallback">Found no expense</h2>
    }
    return (
        <ul className="expense-list">
            {props.items.map((expense) => (
                <ExpenseItems
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                />
            ))
            }
        </ul>
    )
}
export default ExpenseList;