const Parent = React.createElement("div", { id: "parent" }, [React.createElement("div", { id: "child" }, React.createElement("h1", {}, "hello")), React.createElement("div", { id: "child2" }, React.createElement("h1", {}, "hello"))]);
const Parent2 = React.createElement("div", { id: "parent2" }, [React.createElement("div", { id: "child" }, React.createElement("h1", {}, "wwwww")), React.createElement("div", { id: "child2" }, React.createElement("h1", {}, "wwww"))]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(Parent);
root.render(Parent2);
