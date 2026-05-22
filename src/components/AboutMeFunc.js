import { useState, useEffect } from "react";
const AboutMeFunc = (props) => {
  const [count, setCount] = useState(0);

  const { name, location, email } = props;

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>click</button>
      <h1>Name: {name}</h1>
      <h2>Location: {location}</h2>
      <h3>Email: {email}</h3>
    </div>
  );
};
export default AboutMeFunc;
