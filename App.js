/**
 * <div>
  <div>
    <h1></h1>
  </div>
</div>

 */

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", {}, "I am an h1 tag")
  )
);

// const heading = React.createElement(
//   "h1",
//   { id: "heading", xyz: "abc" },
//   "Hello world from React"
// );
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
