//eslint-disable-next-line
import logo from "./logo.svg";
import "./App.css";
import Card from "./Component/Card";
import myCard from "./Data/Data";
import ReactDOM from "react-dom";

const cList = myCard.map((card, index) => (
  <Card
    key={index}
    title={Card.title}
    image={Card.image}
    description={Card.description}
  />
));

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="card-container">{cList}</div>
);

function App() {
  const cList = myCard.map((card) => (
    <Card
      key={Card.title}
      title={Card.title}
      imgage={Card.image}
      description={Card.description}
    />
  ));

  ReactDOM.render(
    <div className="card-container">{cList}</div>,
    document.getElementById("root")
  );
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
