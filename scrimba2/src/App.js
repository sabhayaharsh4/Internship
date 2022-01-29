import logo from "./logo.svg";
import "./App.css";
import data from "./data";
import Navbar from "./Navbar";
import MainComponent from "./MainComponent";

function App() {
  const dataHolder = data.map((item) => {
    return <MainComponent key={item.id} item={item} />;
  });

  return (
    <div className="App">
      <Navbar />
      <section>{dataHolder}</section>
    </div>
  );
}

export default App;
