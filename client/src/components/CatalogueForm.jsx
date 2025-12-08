import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ServiceCreation() {
    return  (
        <>
            <h1 className="text-center mb-3">Service Creation</h1>
            <div className="container-sm text-bg-dark p-2 hstack gap-2 border-warning border-5 rounded-3">
                {/* Service Name */}
                <div className="input-group">
                    <span className="input-group-text" id="inputGroup-sizing-default">Service Name</span>
                    <input id="name" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
                </div>
                {/* Service Price */}
                <div className="input-group">
                    <span className="input-group-text">₱</span>
                    <input id="price" type="text" className="form-control" aria-label="Dollar amount (with dot and two decimal places)"/>
                </div>
                {/* Service Category */}
                <select id="category" className="form-select" aria-label="Default select example">
                    <option selected>Category</option>
                    <option value="employee0">nail</option>
                    <option value="employee1">hair</option>
                    <option value="employee2">body</option>
                </select>

                {/* Staff Available */}
                <select id="servicedBy" className="form-select" aria-label="Default select example">
                    <option selected>Staff</option>
                    <option value="employee0">employee0</option>
                    <option value="employee1">employee2</option>
                    <option value="employee2">employee3</option>
                </select>

                {/* Service Availability */}
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="availability"/>
                    <label className="form-check-label" for="availability">
                        Available
                    </label>
                </div>
            </div>
            <div id="description" className="container-sm text-bg-light p-1 rounded-3 mt-1">                
                <div className="mb-3">
                    <label for="exampleFormControlTextarea1" className="form-label">Service Description</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
            </div>
            <div className="container-sm hstack p-1 gap-1 rounded-3">               
                <button type="button" className="btn btn-outline-warning ms-auto rounded-pill">Cancel</button> 
                <button type="button" className="btn btn-outline-success rounded-pill">Create</button>
            </div>
        </>
    );
}