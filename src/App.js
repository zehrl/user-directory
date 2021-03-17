import Jumbotron from "./components/jumbotron";
import Form from "./components/form"
import Table from "./components/table";
import { useState, useEffect } from "react";
import API from "./utils/API";

function App() {

  const [employees, setEmployees] = useState("");

  useEffect(() => {
    if (!employees) {
      API
        .getEmployees(20)
        .then((data) => {
          console.log("Data sent to setEmployees: ", data)
          setEmployees(data);
        })
    }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Jumbotron />
      <div className="container">
        <Form />
        <Table
          employeeData={employees}
        />
      </div>
    </div>
  );
}

export default App;
