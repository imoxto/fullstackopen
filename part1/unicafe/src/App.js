import { useState } from "react";

const Button = ({ name, onClick }) => {
  return <button onClick={onClick}>{name}</button>;
};
const StatisticLine = ({ name, val, unit }) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{val + (unit ? unit : "")}</td>
    </tr>
  );
};
const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;
  return (
    <>
      <h1>Statistics</h1>
      {total > 0 ? (
        <table>
          <tbody>
            <StatisticLine name={"Good"} val={good} />
            <StatisticLine name={"Neutral"} val={neutral} />
            <StatisticLine name={"Bad"} val={bad} />
            <StatisticLine name={"All"} val={total} />
            <StatisticLine name={"Average"} val={(good - bad) / total} />
            <StatisticLine name={"Positive"} val={(good * 100) / total} unit={"%"} />
          </tbody>
        </table>
      ) : (
        <p>No feedback given</p>
      )}
    </>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <>
      <h1>Give Feedback</h1>
      <Button name={"good"} onClick={() => setGood(good + 1)} />
      <Button name={"neutral"} onClick={() => setNeutral(neutral + 1)} />
      <Button name={"bad"} onClick={() => setBad(bad + 1)} />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </>
  );
};

export default App;
