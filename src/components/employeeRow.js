function EmployeeCard({ employeeData: { imgUrl, firstName, lastName, gender, age, city, state, hidden } }) {

    return (
        <tr className={hidden ? "d-none" : null}>
            <td><img src={imgUrl} alt="thumbnail of employee" /></td>
            <td>{firstName}</td>
            <td>{lastName}</td>
            <td>{gender}</td>
            <td>{age}</td>
            <td>{city}</td>
            <td>{state}</td>
        </tr>
    )
}

export default EmployeeCard;