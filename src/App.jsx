import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Description from './components/description/Description'
import Options from './components/options/Options'
import Feedback from './components/feedback/Feedback'

const App = () => {
  return (
    <>
      <Description/>
      <Options/>
      <Feedback/>
    </>
  );
};

export default App

const marks = {
	good: 0,
	neutral: 0,
	bad: 0
}
