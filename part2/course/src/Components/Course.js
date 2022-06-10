export function Part({ part }) {
  return (
    <p>
      {part.name} {part.exercises}
    </p>
  );
}

export function Header({ header }) {
  return <h1>{header}</h1>;
}

export function Header2({ header }) {
  return <h2>{header}</h2>;
}

export function Content({ parts }) {
  return (
    <>
      {parts.map((part) => (
        <Part key={part.id} part={part} />
      ))}
    </>
  );
}

export function Total({ num }) {
  return <b>total of {num} exercises</b>;
}

const Course = ({ course }) => {
  const { name, parts } = course;
  return (
    <>
      <Header2 header={name} />
      <Content parts={parts} />
      <Total num={parts.reduce((t, part) => t + part.exercises, 0)} />
    </>
  );
};

export default Course;
