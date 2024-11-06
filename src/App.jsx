import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Description from './components/description/Description'
import Options from './components/options/Options'
import Feedback from './components/feedback/Feedback'

const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const updateFeedback = (feedbackType) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1,
    }));
  };

  return (
    <>
      <Description />
      <Options updateFeedback={updateFeedback} />
      <Feedback feedback={feedback} />
    </>
  );
};

export default App;