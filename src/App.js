import Jumbotron from "./components/jumbotron";
import Form from "./components/form"
import Table from "./components/table";
import { useState, useEffect } from "react";
import API from "./utils/API";

function App() {

  const [employees, setEmployees] = useState("");

  useEffect(() => {
    console.log("useEffect() called!")
    if (!employees) {
      API
        .getEmployees(20)
        .then((data) => {
          console.log("Data sent to setEmployees: ", data)
          // sortBy(data, "firstName");
          // filterBy(data, "gender", "female");
          setEmployees(data);
        })
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const sortBy = (column) => {
    console.log("Before sortBy, data: ", employees)
    console.log("Sorting by: ", column)

    const sortedArray = employees.sort((employee, nextEmployee) => {
      console.log("Sort Loop")
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

    console.log("sortedArray: ", sortedArray);

    // setEmployees(sortedArray)

  };

  const filterBy = (filters) => {
    console.log("filterBy employees state: ", employees);
    let filteredArray = employees;
    console.log("filters: ", filters)
    filters.forEach(({ column, value }) => {

      filteredArray = filteredArray.map(employee => {
        console.log("Filter Loop")
        if (employee[column] !== value) {
          employee.hidden = true;
        }

        return employee;
      });

    });

    setEmployees(filteredArray);

    console.log("filteredArray: ", filteredArray);
  }

  const clearFilters = (event) => {
    console.log("clearFilters called.")
    event.preventDefault()

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
          sortBy={sortBy}
          filterBy={filterBy}
        />
        <Table
          employeeData={employees}
        />
      </div>
    </div>
  );
}

export default App;
