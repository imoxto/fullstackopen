import React from "react";

function Part({ part, exer }) {
  return (
    <p>
      {part} {exer}
    </p>
  );
}

function Header({ header }) {
  return <h1>{header}</h1>;
}

function Content({ part1, exer1, part2, exer2, part3, exer3 }) {
  return (
    <>
      <Part part={part1} exer={exer1} />
      <Part part={part2} exer={exer2} />
      <Part part={part3} exer={exer3} />
    </>
  );
}

function Total({ num }) {
  return <p>Number of exercises {num}</p>;
}

function App() {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  return (
    <>
      <Header header={course} />
      <Content part1={part1} part2={part2} part3={part3} exer1={exercises1} exer2={exercises2} exer3={exercises3} />
      <Total num={exercises1 + exercises2 + exercises3} />
    </>
  );
}

export default App;
