import clsx from "clsx";
import css from "./Feedback.module.css";

const Feedback = ({ feedback }) => {
    const total = feedback.good + feedback.neutral + feedback.bad;
    const positivePercentage = total > 0 ? (((feedback.good + (feedback.neutral / 2)) / total) * 100).toFixed(2) : 0;
  
    return (
      <div className={css.feedback}>
        <p>Good: {feedback.good}</p>
        <p>Neutral: {feedback.neutral}</p>
        <p>Bad: {feedback.bad}</p>
        <p>Total: {total}</p>
        <p>Positive: {positivePercentage}%</p>
      </div>
    );
  };
  
  export default Feedback;