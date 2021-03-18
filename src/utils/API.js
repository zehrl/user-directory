import axios from "axios";

const API = {
    getEmployees: async (count) => {
        let employees = [];

        for (let i = 0; i < count; i++) {

            await axios
                .get("https://randomuser.me/api/")
                .then(({ data: { results } }) => {
                    const user = results[0];

                    const formattedData = {
                        imgUrl: user.picture.medium,
                        firstName: user.name.first,
                        lastName: user.name.last,
                        gender: user.gender,
                        age: user.dob.age,
                        city: user.location.city,
                        state: user.location.state,
                        hidden: false,
                        key: i
                    }
                    
                    employees.push(formattedData);
                    return formattedData;

                })
                .catch((error) => {
                    throw error;
                })
        }

        console.log("Employees: ", employees)
        return employees;
    }
}

export default API;