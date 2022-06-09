import React from "react";

function Part({ part }) {
  return (
    <p>
      {part.name} {part.exercises}
    </p>
  );
}

function Header({ header }) {
  return <h1>{header}</h1>;
}

function Content({ parts }) {
  return (
    <>
      {parts.map((part, i) => (
        <Part key={i} part={part} />
      ))}
    </>
  );
}

function Total({ num }) {
  return <p>Number of exercises {num}</p>;
}

function App() {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  const { name, parts } = course;

  return (
    <>
      <Header header={name} />
      <Content parts={parts} />
      <Total num={parts.reduce((t, part) => t + part.exercises, 0)} />
    </>
  );
}

export default App;
