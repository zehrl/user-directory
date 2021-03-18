import { useState } from "react";

function Form({ clearFilters, sortBy, filterBy }) {

    const [sortByValue, setSortByValue] = useState();
    const [filterByGender, setFilterByGender] = useState();


    function handleClearFilters(event) {
        setFilterByGender();
        clearFilters(event);
    }
    
    function handleSortByChange(event) {
        setSortByValue(event.target.value);
        sortBy(event.target.value);
    }

    function handleFilterBy(event) {
        clearFilters(event);

        filterBy([{column: "gender", value: event.target.value}])
    }

    return (
        <form className="p-3">
            <div className="form-group">
                <label className="mr-2" for="sortBy">Sort By: (Updates on filter change)</label>
                <select onChange={handleSortByChange} value={sortByValue} className="custom-select my-1 mr-sm-2" id="sortBy">
                    <option disabled selected>Choose Column...</option>
                    <option value="firstName">First Name</option>
                    <option value="lastName">Last Name</option>
                    <option value="gender">Gender</option>
                    <option value="age">Age</option>
                    <option value="city">City</option>
                    <option value="state">State</option>
                </select>
            </div>

            <label className="mr-2" for="asdf">Filter By:</label>
            <div className="form-row">

                <div className="form-group col-sm">
                    <select onChange={handleFilterBy} className="custom-select my-1 mr-sm-2" id="asdf">
                        <option disabled selected>Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </div>

                {/* <div className="form-group col-sm">
                    <select className="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                        <option disabled selected>City</option>
                        <option value="1">Seattle</option>
                    </select>
                </div>

                <div className="form-group col-sm">
                    <select className="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                        <option disabled selected>State</option>
                        <option value="1">Seattle</option>
                    </select>
                </div> */}

                <div className="form-group col-sm my-1">
                    <button onClick={handleClearFilters} className="btn btn-primary">Clear Filters</button>
                </div>

            </div>

        </form>
    )
}

export default Form;