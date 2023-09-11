const heading = React.createElement("div", { id: "parent" }, [
  React.createElement(
    "div",
    { id: "child" },
    // React.createElement("h1", {}, "Hi I m H1") //for single elemnt
    [
      React.createElement("h1", { id: "a1" }, "Hi I m H1"),
      React.createElement("h2", { id: "a2" }, "Hi I m H2"),
    ] //create multiple elements of same type
  ),
  React.createElement(
    "div",
    { id: "child2" },
    // React.createElement("h1", {}, "Hi I m H1") //for single elemnt
    [
      React.createElement("h1", { id: "a1" }, "Hi I m H1"),
      React.createElement("h2", { id: "a2" }, "Hi I m H2"),
    ] //create multiple elements of same type
  ),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
