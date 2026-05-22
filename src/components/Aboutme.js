import React from "react";
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
      </div>
    );
  }
}
export default UserClass;
