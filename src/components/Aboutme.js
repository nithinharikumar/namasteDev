import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    console.log(this.props.name + "componentDidMount is called");
  }
  componentDidUpdate() {
    console.log(this.props.name + "componentDidUpdate is called");
  }
  componentWillUnmount() {
    console.log(this.props.name + "componentWillUnmount is called");
  }
  render() {
    console.log(this.props.name + "render is called");
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
