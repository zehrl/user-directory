function Form() {
    return (
        <form className="p-3">
            <div className="form-group">
                <label className="mr-2" for="inlineFormCustomSelectPref">Sort By:</label>
                <select className="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                    <option value="1">First Name</option>
                    <option value="2" selected>Last Name</option>
                    <option value="3">Gender</option>
                    <option value="4">Age</option>
                    <option value="5">City</option>
                    <option value="6">State</option>
                </select>
            </div>

            <label className="mr-2" for="asdf">Filter By:</label>
            <div className="form-row">

                <div className="form-group col-sm">
                    <select className="custom-select my-1 mr-sm-2" id="asdf">
                        <option disabled selected>Gender</option>
                        <option value="1">Male</option>
                        <option value="2">Female</option>
                    </select>
                </div>

                <div className="form-group col-sm">
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
                </div>

                <div className="form-group col-sm my-1">
                    <button type="submit" className="btn btn-primary">Clear Filters</button>
                </div>

            </div>

        </form>
    )
}

export default Form;