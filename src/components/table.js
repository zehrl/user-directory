import { useEffect, useState } from "react";
import EmployeeRow from "./employeeRow";

function Table({ employeeData }) {
    console.log("table.js rendered, employeeData: ", employeeData)

    const [employeeCards, setEmployeeCards] = useState();

    useEffect(() => {
        
        // Generate cards only if there are no cards and if there is data
        console.log("employeeData? ", employeeData ? true : false);
        if (employeeData) { generateCards() }
    }, [employeeData])

    const generateCards = () => {
        let cards = [];
        console.log("generating cards...");
        employeeData.forEach(employee => {
            cards.push(
                <EmployeeRow employeeData={employee} key={employee.key}/>
            )
        })

        setEmployeeCards(cards);
    }

    return (
        <table className="table table-hover table-responsive-md">
            <thead>
                <tr>
                    <th scope="col"></th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Gender</th>
                    <th scope="col">Age</th>
                    <th scope="col">City</th>
                    <th scope="col">State</th>
                </tr>
            </thead>
            <tbody>
                {employeeCards}
            </tbody>
        </table>
    )
}

export default Table;