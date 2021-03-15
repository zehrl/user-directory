function Table() {
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
                <tr>
                    <td><img src="https://randomuser.me/api/portraits/med/men/75.jpg" alt="thumbnail of employee"/></td>
                        <td>Brad</td>
                        <td>Gibson</td>
                        <td>Male</td>
                        <td>26</td>
                        <td>Seattle</td>
                        <td>Washington</td>
                </tr>
            </tbody>
        </table>
    )
}

export default Table;