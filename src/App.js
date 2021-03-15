import Jumbotron from "./components/jumbotron";
import Form from "./components/form"
import Table from "./components/table";

function App() {
  return (
    <div>
      <Jumbotron />
      <div className="container">
        <Form />
        <Table />
      </div>
    </div>
  );
}

export default App;
