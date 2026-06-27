import React from "react";
import CounterContext from "../utils/counterContext";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { name, bio, email } = this.props;
    return (
      <div>
        <h1>Name: {name}</h1>
        <h2>Bio: {bio}</h2>
        <h3>Email: {email}</h3>
        <div><CounterContext.Consumer>
          {({ initialvalue }) =>
            <div>
              c
              the counter is {initialvalue}
            </div>}

        </CounterContext.Consumer>
        </div>
      </div>
    );
  }
}
export default UserClass;
