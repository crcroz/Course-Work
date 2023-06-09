const Header = (props) => {
  return <h1>{props.course}</h1>;
};

const Part = (props) => {
  return (
    <p>
      {props.partName} {props.exercises}
    </p>
  );
};

const Content = (props) => {
  return (
    <div>
      <Part partName={props.parts[0]} exercises={props.exercises[0]} />
      <Part partName={props.parts[1]} exercises={props.exercises[1]} />
      <Part partName={props.parts[2]} exercises={props.exercises[2]} />
    </div>
  );
};

const Total = (props) => {
  return (
    <p>
      Number of exercises{" "}
      {props.exercises[0] + props.exercises[1] + props.exercises[2]}
    </p>
  );
};

const App = () => {
  const course = "Half Stack application development";
  const exercises = [10, 7, 14];
  const parts = [
    "Fundamentals of React",
    "Using props to pass data",
    "State of a component",
  ];

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} exercises={exercises} />
      <Total exercises={exercises} />
    </div>
  );
};

export default App;
