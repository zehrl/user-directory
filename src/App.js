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
          sortBy("firstName", data)
        })
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const sortBy = (column, data) => {
    console.log("Before sortBy, data: ", data)
    
    const sortedArray = data.sort((employee, nextEmployee) => {
      console.log("employee[column]: ", employee[column]);
      console.log("nextEmployee[column]: ", nextEmployee[column]);

      // Determine column type and sort accordingly
      if (typeof employee[column] === "number") {
      
        return employee[column] - nextEmployee[column]
      
      } else if (typeof employee[column] === "string") {
      
        const employeeStr = employee[column].toUpperCase();
        const nextEmployeeStr = nextEmployee[column].toUpperCase();

        if (employeeStr > nextEmployeeStr) {
          return 1;
        } else {
          return -1;
        }
      }

    });

    setEmployees(sortedArray)

    console.log("sortedArray: ", sortedArray);
  };

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
