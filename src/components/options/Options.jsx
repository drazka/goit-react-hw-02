import clsx from "clsx";
import css from "./Options.module.css";

const Options = () => {
    return (
  <div className={css.options}>
    <button>Good</button>
    <button>Neutral</button>
    <button>Bad</button>
    <button>Reset</button>
  </div>
    );
  };
  
  export default Options;