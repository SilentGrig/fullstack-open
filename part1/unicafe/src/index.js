import React, { useState } from "react";
import ReactDOM from "react-dom";

const Button = ({ text, onClick }) => (
  <button onClick={onClick} > {text} </button>
)

const Statistic = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
}

const Statistics = ({good, neutral, bad}) => {
  const allFeedback = good + neutral + bad;
  const averageFeedback = ((good - bad) / allFeedback).toFixed(2);
  const postiveFeedback = `${(good / allFeedback * 100).toFixed(2)} %`;
  if(allFeedback === 0) {
    return <div>No feedback given</div>
  }
  return (
    <table>
      <tbody>
        <Statistic text="good" value={good} />
        <Statistic text="neutral" value={neutral} />
        <Statistic text="bad" value={bad} />
        <Statistic text="all" value={allFeedback} />
        <Statistic text="average" value={averageFeedback} />
        <Statistic text="positive" value={postiveFeedback} />
      </tbody>
    </table>
  );
}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const giveGoodFeedback = () => setGood(good + 1);
  const giveNeutralFeedback = () => setNeutral(neutral + 1);
  const giveBadFeedback = () => setBad(bad + 1);

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={giveGoodFeedback} text="good" />
      <Button onClick={giveNeutralFeedback} text="neutral" />
      <Button onClick={giveBadFeedback} text="bad" />
      <h1>Statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
