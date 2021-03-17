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
          // sortBy(data, "firstName");
          filterBy(data, "gender", "female");
        })
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const sortBy = (data, column) => {
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
  
  const filterBy = (data, column, value) => {

    // const filteredArray = data.(employee => employee[column] === value)

    const filteredArray = data.map(employee => {
      if (employee[column] !== value) {
        employee.hidden = true;
      }

      return employee;
    });

    setEmployees(filteredArray);

    console.log("filteredArray: ", filteredArray);
  }

  const clearFilters = (event) => {
    console.log("clearFilters called.")
    event.preventDefault();
    
    setEmployees(
      employees.map(employee => {
        employee.hidden = false;
        return employee;
      })
    )
  }

  return (
    <div>
      <Jumbotron />
      <div className="container">
        <Form 
          clearFilters={clearFilters}
        />
        <Table
          employeeData={employees}
        />
      </div>
    </div>
  );
}

export default App;
