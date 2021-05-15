import "./ExpenseDate.css";

const ExpenseDate = (props) => {
  const days = props.date.toLocaleString("en-us", { day: "2-digit" });
  const months = props.date.toLocaleString("en-US", { month: "long" });
  const year = props.date.getFullYear();
  return (
    <div className="expense-date">
      <div className="expense-date__month">{months}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day>">{days}</div>
    </div>
  );
};

export default ExpenseDate;
