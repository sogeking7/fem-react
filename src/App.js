const Pizza = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("p", {}, props.description),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Freddy Fazbear's Pizza"),
    React.createElement(Pizza, {
      name: "The Pepperoni",
      description: "some dope pizza",
    }),
    React.createElement(Pizza, {
      name: "Americano Pizza",
      description: "some dope pizza",
    }),
    React.createElement(Pizza, {
      name: "Chicken Pizza",
      description: "some dope pizza",
    }),
  ]);
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
