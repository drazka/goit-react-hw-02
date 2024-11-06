import clsx from "clsx";
import css from "./Options.module.css";

const Options = ({ updateFeedback, totalFeedback, resetFeedback }) => {
    return (
      <div className={css.options}>
        <button onClick={() => updateFeedback('good')}>Good</button>
        <button onClick={() => updateFeedback('neutral')}>Neutral</button>
        <button onClick={() => updateFeedback('bad')}>Bad</button>
        {totalFeedback > 0 && (
          <button className={css.reset} onClick={resetFeedback}>Reset</button>
        )}
      </div>
    );
  };
  
  export default Options;