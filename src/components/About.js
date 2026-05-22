import React from "react";
import UserClass from "./Aboutme";
import AboutMeFunc from "./AboutMeFunc";

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userinfo: {
        name: "",
        bio: "",
        email: "",
      },
    };
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/nithinharikumar");
    const json = await data.json();
    console.log(json);
    this.setState({
      userinfo: {
        name: json.name,
        bio: json.bio,
        email: json.email,
      },
    });
    this.interval = setInterval(() => {
      console.log("setinterval is called");
    }, 1000);
    console.log("didmount parent");
  }
  async componentDidUpdate() {
    console.log("update PARENT is called");
  }
  async componentWillUnmount() {
    console.log("componentWillUnmount parent is called");
    await clearInterval(this.interval);
  }
  render() {
    const { name, bio, email } = this.state.userinfo;
    return (
      <div className="max-w-4xl mx-auto my-12 p-8 bg-white border border-slate-100 rounded-3xl shadow-xl text-center">
        <div className="text-6xl mb-4">🍳</div>
        <h1 className="text-4xl font-extrabold text-slate-800 mb-4">
          Our Recipe for <span className="text-rose-500">Njam Njam</span>
        </h1>
        <p className="text-slate-500 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
          At Njam Njam, we believe that web applications should be cooked to
          perfection. Our developers are gourmet chefs blending fresh,
          state-of-the-art React components with flavorful styles to serve you
          the speediest digital delicacies.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left mt-8">
          <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
            <div className="text-3xl mb-2">🥕</div>
            <h3 className="font-bold text-lg text-slate-800 mb-1">
              Fresh Ingredients
            </h3>
            <p className="text-slate-500 text-sm">
              We use only the latest hooks, clean imports, and zero stale state
              to ensure everything tastes fast.
            </p>
          </div>
          <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
            <div className="text-3xl mb-2">🔥</div>
            <h3 className="font-bold text-lg text-slate-800 mb-1">
              Hot & Ready
            </h3>
            <p className="text-slate-500 text-sm">
              Served instantly via optimized APIs and fast-loading pipelines
              directly to your browser.
            </p>
          </div>
          <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
            <div className="text-3xl mb-2">🍰</div>
            <h3 className="font-bold text-lg text-slate-800 mb-1">
              Sweet Experience
            </h3>
            <p className="text-slate-500 text-sm">
              A delightful UI styled with smooth hover effects, curated colors,
              and modern animations.
            </p>
          </div>
        </div>

        <UserClass name={name} bio={bio} email={email} />
      </div>
    );
  }
}

export default About;
